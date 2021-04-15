import styles from '../styles/post.module.css'

import { useEffect } from "react"
import { Gradient } from "../api/gradient"

import { useRouter } from 'next/router'

export default function Post(props) {

    const router = useRouter()
    
    useEffect(() => {
        var back = new Gradient();
        back.initGradient("#post_back__16JYp");
    })

    return(
        <article id={styles.content}>
            <canvas id={styles.back} onClick={() => { router.push("/") }}></canvas>
            <div id={styles.head}>
                <div id={styles.date}>{props.date}</div>
                <div id={styles.title} className="gradText">{props.title}</div>
                <div id={styles.description}>{props.description}</div>
            </div>

            <div id={styles.post}>
                {props.children}    
            </div>
        </article>
    )
}