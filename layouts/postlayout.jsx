import styles from '../styles/post.module.css'

import { useEffect } from "react"
import { Gradient } from "../api/gradient"

import Mail from "../components/mail"
import Meta from '../components/meta'

import { useRouter } from 'next/router'

export default function Post(props) {

    const router = useRouter()
    
    useEffect(() => {
        var back = new Gradient();
        back.initGradient("#post_back__16JYp");
    })

    return(
        <main>
             <Meta title={props.title} description={props.description} />
            <article id={styles.content}>
                <canvas id={styles.back} onClick={() => { router.push("/") }}></canvas>
                <div id={styles.head}>
                    <div id={styles.date}>{props.date}</div>
                    <div id={styles.title}>{props.title}</div>
                    <div id={styles.description}>{props.description}</div>
                </div>

                <div id={styles.post}>
                    {props.children}    
                </div>
                I also have an email newsletter, it's about a 2-5 minute read every week of high quality tech and productivity content, you can sign up to it here!
                <Mail />
            </article>
        </main>
    )
}