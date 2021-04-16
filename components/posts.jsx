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
                            <h2 className={styles.title}>{post.title}</h2>
                            <h3 className={styles.date}>{formatDate(post.date)}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Posts