import ReactMarkdown from 'react-markdown'

import PostLayout from '../../layouts/postlayout'

import CodeBlock from "../../components/codeblock";
import Image from '../../components/image'

import { formatDate, getPostBySlug, getPosts } from '../../api/index'

function Post(props) {

    const input = '# This is a header\n\nAnd this is a paragraph'

    return (
        <article>
            <PostLayout title={props.title} date={formatDate(props.date)} description={props.description}>
                <ReactMarkdown children={props.content} renderers={{ code: CodeBlock, image: Image }} />
            </PostLayout>
        </article>
    )
}

export async function getStaticProps(context){
    return {
        props: await getPostBySlug(context.params.slug)
    }
}

export async function getStaticPaths(){
    return {
        paths: [],
        fallback: true
    }
}
export default Post