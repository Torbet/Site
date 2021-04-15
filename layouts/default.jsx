import styles from "../styles/default.module.css"
import Link from 'next/link'
import Head from 'next/head'



import { useEffect } from "react"
import { Gradient } from "../api/gradient"

import { FaGithub, FaTwitter, FaInstagram, FaInbox } from "react-icons/fa"

export default function Default(props) {

    useEffect(() => {
        var leftGrad = new Gradient();
        leftGrad.initGradient("#default_leftGrad__3GcSF");

        var rightGrad = new Gradient();
        rightGrad.initGradient("#default_rightGrad__2dqIv");
    })

    return (
        <main id={styles.main}>

            <Head>
                <title>{props.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content="A portfolio of Guy Torbet. Updating the progress of projects and summarising key information from what I read online - hopefully providing value." />
                <meta property="og:title" content="Guy Torbet | Portfolio" />
                <meta property="og:description" content="A portfolio of Guy Torbet. Updating the progress of projects and summarising key information from what I read online - hopefully providing value." />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@guytorbet" />
                <meta name="twitter:title" content="Guy Torbet | Portfolio" />
                <meta name="twitter:description" content="A portfolio of Guy Torbet. Updating the progress of projects and summarising key information from what I read online - hopefully providing value." />
                <meta name="twitter:image" content="https://torbet.co/profile.jpg" />

                <script type="application/ld+json">{`
                    {
                    "@context":"https://schema.org/",
                    "@type":"Organization",
                    "name":"Guy Torbet",
                    "image":"https://torbet.co/favicon.ico",
                    "logo":"https://torbet.co/favicon.ico",
                    "url": "https://torbet.co"
                    }
                    `}
                </script>

            </Head>

            <section id={styles.left}>
                <canvas id={styles.leftGrad}></canvas>

                <div id={styles.about}>
                    <h1 id={styles.title}>GUY TORBET.</h1>
                    <p className={styles.subHeading}>I'm a 17 year old Software Developer and Student from Scotland.</p>
                    <p className={styles.subHeading}>I read a lot online, and make a lot of projects; here I document and summarise the key ideas and insights from my experiences, and hopefully provide some value to you.</p>
                    <p className={styles.subHeading}>I also have an email newsletter, it's a 2-5 minute read every week of high quality tech and productivity content. There's also a <a href="/feed" className="navItem">RSS feed</a> if you're into that.</p>
                    <div id={styles.links}>
                        <Link href="https://github.com/torbet"><FaGithub className={styles.icon} /></Link>
                        <Link href="https://twitter.com/"><FaTwitter className={styles.icon} /></Link>
                        <Link href="https://instagram.com/guytorbet"><FaInstagram className={styles.icon} /></Link>
                        <Link href="mailto:guy@torbet.co"><FaInbox className={styles.icon} /></Link>
                    </div>
                </div>

            </section>




            <section id={styles.right}>
                <nav id={styles.nav}>
                    <canvas id={styles.rightGrad}></canvas>
                    <div id={styles.navLinks}>
                        <Link href="/"><a className={styles.navItem}>Posts</a></Link>
                        <Link href="/projects"><a className={styles.navItem}>Projects</a></Link>
                    </div>

                </nav>
                {props.children}

            </section>

        </main>
    )
}