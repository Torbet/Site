import styles from '../styles/post.module.css'
import Head from 'next/head'

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
        <main>
             <Head>
                <title>{`${props.title} | Guy Torbet`}</title>
                <meta name='description' content={props.description} />
                <meta property="og:title" content={`${props.title} | Guy Torbet`} />
                <meta property="og:description" content={props.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@guytorbet" />
                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:image" content="https://torbet.co/profile.jpg" />
            </Head>

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
        </main>
    )
}