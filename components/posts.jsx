import { useRouter } from 'next/router'

import styles from '../styles/posts.module.css'

import { formatDate } from '../api/index'

function Posts({ allPosts }) {

    const router = useRouter()

    return (
        <div>
            <ul>
                {allPosts.map(function (post, key) {
                    return (
                        <li onClick={() => { router.push(`/posts/${post.slug}`) }} key={key} className={styles.post}>
                            <h3>{post.title}</h3>
                            <h4 className={styles.date}>{formatDate(post.date)}</h4>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Posts