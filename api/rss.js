const fs = require("fs");
const RSS = require("rss");

const matter = require('gray-matter')

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

function formatDate(date) {
    var splitDate = date.split('-');
    var month = splitDate[1] - 1; //Javascript months are 0-11

    const today = new Date(splitDate[2], month, splitDate[0]);

    return today;
}


function generate() {
    const previewItems = getPosts();
    const feed = new RSS({
        title: "Guy Torbet | Posts",
        site_url: "https://torbet.co/",
        feed_url: "https://torbet.co/feed.xml",
        managingEditor: 'Guy Torbet',
        webMaster: 'Guy Torbet',
        language: 'en',
    });


    previewItems.map((post) => {
        feed.item({
            title: post.title,
            guid: post.slug,
            url: `https://torbet.co/posts/${post.slug}`,
            date: formatDate(post.date),
            description: post.description,
        });
    });

    const rss = feed.xml({ indent: true });
    fs.writeFileSync("./public/feed.xml", rss);
}

generate();