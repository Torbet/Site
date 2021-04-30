import Default from '../layouts/default'

import { getPosts } from '../api/index'
import Posts from '../components/posts'


export default function Landing(props) {
    return(
        <Default title='Guy Torbet'>
            <Posts allPosts={props.posts}/>
        </Default>
    )
}

export async function getStaticProps() {
    const posts = await getPosts()
    return {
        props: {
            posts: posts,
        }
    }
}