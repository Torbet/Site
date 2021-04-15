---
title: How I Built My Site (with Perfect Lighthouse Score)
date: 12-03-2021
description: This is How I Built My Portfolio Site and personal blog using React and NextJS, and how it achieved a Perfect Lighthouse Score. I rundown all the fudamental issues and how to solve them, aswell as how to optimise your page for Google.
---
I think that everyone should have a personal site, even if you're not in the development scene - and it doesn't always have to be a massive, expensive headache to set up. While this post is aimed at developers, it can still show you have to make site from the ground up, and completely for free!

While at present, it may not have much traffic, it is optimised as fuck - 100% lighthouse scores, quick load times, almost instantaneous indexing by Google, the whole shebang.

![image](https://drive.google.com/uc?export=view&id=1bqWUzrro1RTn8akmqWWHse-lo76MATyr)

Tech stack used:

- React with NextJS
- Hosting on Vercel
- Custom CSS styling
- Posts exported from Notion, using gray-matter for metadata
- Implementation of the GitHub API

I was torn between create-react-app and NextJS, but as a general rule of thumb, CRA is great for purely single page apps, whereas next is more appropriate for full on websites. A perk of using this is the fantastic hosting on Vercel, which automatically redeploys on a new git commit. This means that as soon as I push a post to the sites repository, Vercel updates the live site, no fuss.

NextJS also offers server side rendering, which at surface level seems ideal for blogs, but the content on my site was simply not dynamically changing enough to warrant the slightly longer load time associated with SSR, so static seems like the best option - for now.

I'm not a designer, far from it - but in my opinion, the site looks pretty clean and minimal. It's done with simple CSS, with some quirky features copied from some CodePens that I found, notably the animated underlines. I didn't have any relevant images, which makes design surprisingly hard, so I decided to focus more on typography. The whole goal of the site was to be concise and to the point, so the design should reflect this.

As for the posts, I write them in Notion, which has a handy feature that allows you to export pages as markdown. ReactMarkdown handles the rendering on the page from there. I then use an NPM package called gray-matter to assign each post with metadata (title, date, description) for easy formatting in React. This also allows me to effectively and automatically update the RSS feed, and is overall the biggest time saver I've found for managing posts!

I'm about to jump into how I handled some of the main features of the site, if you're not interested in the nerd shit then you can skip to the end to see how to optimise your site for Google.

This is how I get all of the posts, it's designed for use in React so the syntax might seem a bit weird:

```jsx
export async function getPosts() {
		const posts = []
    const context = require.context('../posts', false, /\.md$/)

    for (const key of context.keys()) {
        const post = key.slice(2);
        const content = await import(`../posts/${post}`);
        const meta = matter(content.default)
        posts.push({
            slug: post.replace('.md',''),
            title: meta.data.title,
            date: meta.data.date,
            description: meta.data.description,
        })
    }
    return posts;
}
```

You can see that it returns a list of objects, each with all the required data to display the posts information and route to it. I can then display them in a simple list like this:

```jsx
function Posts({ allPosts }) {

    const router = useRouter()

    return (
        <div id={styles.container}>
            <ul>
                {allPosts.map(function (post, key) {
                    return (
                        <li onClick={() => { router.push(`/posts/${post.slug}`) }} key={key} className={styles.tableRow}>
                            <div className={styles.titleContainer}><h2 className={styles.title}>{post.title}</h2></div>
                            <h3 className={styles.date}>{formatDate(post.date)}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
```

Implementing a RSS feed required the same getPosts function, but in pure nodeJS, here's what that looks like - it's a bit easier to understand what's happening:

```js
function getPosts() {
    var posts = []
    let filenames = fs.readdirSync("posts");

    filenames.forEach((file) => {
        const str = fs.readFileSync(`posts/${file}`, 'utf8');
        const meta = matter(str);
        posts.push({
            slug: file.replace('.md', ''),
            title: meta.data.title,
            date: meta.data.date,
            description: meta.data.description,
        })
    });
    return (posts)
}
```

I can then fetch specific posts based on the URL, this object also contains the content of the post, which is rendered to the screen, as well as the other meta-data to be passed as props to the post element. The description is only used for the meta tags for improved SEO:

```jsx
export async function getPostBySlug(slug){
    const fileContent = await import(`../posts/${slug}.md`)
    const meta = matter(fileContent.default)
    const post = meta.data
    const content = meta.content
    return {
        title: post.title,
        date: post.date,
        description: post.description,
        content: content
    }
}
```

It's pretty simple stuff, which is why I love working with React so much. 

NextJS handles dynamic routing amazingly, this is my [slug].jsx. The post data gets passed to a very simple post layout using React's getStaticProps method like so:

```jsx
function Post(props) {

    return (
        <PostLayout title={props.title} date={formatDate(props.date)} description={props.description}>
            <div id={styles.post}>
                <ReactMarkdown source={props.content} renderers={{code: CodeBlock, image: Image}} />
            </div>
        </PostLayout>
    )
}

export async function getStaticProps(context){
    return {
        props: await getPostBySlug(context.params.slug)
    }
}

export async function getStaticPaths(){
    let paths = await getPosts()
    paths = paths.map(post => ({
        params: { slug:post.slug }
    }));
    return {
        paths: paths,
        fallback: false
    }
}
```

With the post layout component working like so:

```jsx
export default function PostLayout(props) {
    return (
        <main>
            <Head>
                <title>{`${props.title} | Guy Torbet`}</title>
                <meta name='description' content={props.description} />
                <meta property="og:title" content={`${props.title} | Guy Torbet`} />
                <meta property="og:description" content={props.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div id={styles.main}>
                <Header title={props.title} />
        
                <article id={styles.content}>
	                <div id={styles.date}>{props.date}</div>
                    <div id={styles.post}>
                        {props.children}
                        <Mail />
		                 </div>
                </article>

            </div>
        </main>
    )

```

## Projects Integration

GitHub have a nice web API to allow for you to access all of a users public repository information, you can see what mine returns [here](https://api.github.com/users/torbet/repos).

This is pretty much everything for my projects section, I still need to tidy up some of the variable names:

```jsx
function createData(Title, Description, Language, url) {
    return { Title, Description, Language, url };
}

export default function Repos(props) {
    const [arrayItems, setArrayItems] = useState([])
    useEffect(async () => {
        await fetch('https://api.github.com/users/torbet/repos').then(response => response.json())
            .then(data => {
                const items = data.map((arraySingleItem) => {
                    return (
                        createData(arraySingleItem.name, arraySingleItem.description, arraySingleItem.language, arraySingleItem.html_url)
                    );
                });
                setArrayItems(items);
            })

    }, [])

    const router = useRouter()

    return (
        <div id={styles.container}>
            <ul>
                {arrayItems.map((row) => (
                        <li className={styles.tableRow} onClick={() => { router.push(row.url) }} key={row.Title}>
                            <h2 className={styles.title}>{row.Title}</h2>
                            <h3 className={styles.subTitle}>{row.Description}</h3>
                            <h3 className={styles.subTitle}>{row.Language}</h3>
                        </li>
                ))}
            </ul>

        </div>

    );
}
```

useEffect ensures that the api is only called once every time the page is loaded, this maintains speed whilst ensuring that the page is always up to date.

I love this feature, it means that as soon as I start a new project, it instantly shows up on my site, formatted with the rest of them.

## Optimising - Google Lighthouse

It's hard to know when you're done working on project, so I gave myself the target of a perfect lighthouse score. I wouldn't recommend this as you may have to change some fundamental parts of your site to comply with the standards, but in my case, it was simply a case of removing unused javascript, adding a few aria labels and changing some colours for better contrast.

Maybe I'm a web developing prodigy, just a natural talent - more likely, my site was just simple and I had to jump through the loopholes of SEO, but if Google tells me that this is what I have to do, what choice did I have? (plus you get those nice fireworks)

> Google Lighthouse is an open-source, automated tool for measuring the quality of web pages.

Lighthouse ranks in **5** main categories:

- [Performance](https://developers.google.com/web/tools/lighthouse/v3/scoring#perf): This how **fast** the page is, it measures the global performance. With the important metrics being the First Meaningful & Contentful Paints, the Time To Interactive and the Speed Index.
- [Accessibility](https://developers.google.com/web/tools/lighthouse/v3/scoring#a11y): This measures how **accessible** your page is. It performs various checks on the page's elements, like the *colour contrast a*nd aria label attributes. The audit has to pass a list defined in [here](https://web.dev/lighthouse-accessibility/).
- [Best Practices](https://developers.google.com/web/tools/lighthouse/v3/scoring#best-practices): This is the **reliability** of your page, it measure how much the best practices defined by the [W3C](https://www.w3.org/) or [Google's standards](https://web.dev/lighthouse-best-practices/) are used and respected. For example, it will check if your page is served via *HTTPS* and if errors are present in the console.
- [SEO](https://web.dev/lighthouse-seo/): This measures how **optimised** and **standardised** your page is for search engines. It checks, for example, if the *document* contains *meta tags* and *semantic titles*.
- [Progressive Web App (PWA)](https://developers.google.com/web/tools/lighthouse/v3/scoring#pwa): This measures if your website is able to be installable. It has to pass the audit based on the [Baseline PWA Checklist](https://web.dev/pwa-checklist/#baseline). This isn't normally required for most sites, if you want to start making PWAs, search how to make a manifest.json.

You need a low Time To First Byte. This means that the server needs to respond fast. I use CloudFlare and Vercel for my website and static site generation for my pages, which is essentially the same as using full server-side caching. These provide adequate response times while still allowing me full control over proxies, analytics and version control.

You need to optimise your images. Use SVG and compressed JPG's whenever possible. You can use loading=”lazy” on all image tags to reduce the first contentful paint. The total page size to aim for is under a 1000kb, and images often contribute to a large part of this.

Check your bundle size, the less data you send to clients, the better (within reason). NPM packages often have hidden dependancies, driving up total size of your site. There are many tools to track down which modules are taking up the most space, so go through them and make sure you only have ones that you need.

Improving the accessibility of a webpage is often simpler than one might expect. While there are bigger changes you can make to improve the accessibility of a website, most things require less than a few minutes to address.

Here is a list of some simple improvements that you can make to boost your accessibility rating:

- Use an appropriate viewport meta tag.
- Ensure all images have an appropriate alt attribute.
- Prefer semantic HTML, but fall back to [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) to help identify elements.
- Ensure links have a minimum clickable area of 44x44. Mobile users will love you
- Use colours with enough contrast to help the readability of text. Most browser dev tools can help you to find the right combination.

Optimising for lighthouse might take a while, but it helps to be methodical. Work in iterations where you:

1. Target an area.
2. Optimise.
3. Measure the results.
4. GOTO 1.

Websites need constant maintenance to stay relevant and up-to-date. As techniques evolve, and the web progresses, we need to adapt what we have to best serve our visitors. Hopefully this article serves as a checklist for your website, and it can help you achieve a better score which, ultimately, not only gives you a chance at a better placement in search engines, but it also serves your visitors with a better experience.
