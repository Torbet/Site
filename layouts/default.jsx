import styles from "../styles/default.module.css"
import Link from 'next/link'
import Meta from '../components/meta'

import { useEffect } from "react"
import { Gradient } from "../api/gradient"
import { RightGradient } from "../api/rightGradient"

import Mail from "../components/mail"

import { FaGithub, FaTwitter, FaInstagram, FaInbox } from "react-icons/fa"

export default function Default(props) {

    useEffect(() => {
        var leftGrad = new Gradient();
        leftGrad.initGradient("#default_leftGrad__3GcSF");

        var rightGrad = new RightGradient();
        rightGrad.initGradient("#default_rightGrad__2dqIv");
    })

    return (
        <main id={styles.main}>

            <Meta title={props.title} description="A portfolio of Guy Torbet. Updating the progress of projects and summarising key information from what I read online - hopefully providing value." />

            <section id={styles.left}>
                <canvas id={styles.leftGrad}></canvas>

                <div id={styles.about}>
                    <h1 id={styles.title}>GUY TORBET.</h1>
                    <p className={styles.subHeading}>I'm a 17 year old Software Developer and Student from Scotland.</p>
                    <p className={styles.subHeading}>I read a lot online, and make a lot of projects; here I document and summarise the key ideas and insights from my experiences, and hopefully provide some value to you.</p>
                    <p className={styles.subHeading}>I also have an email newsletter, it's a 2-5 minute read every week of high quality tech and productivity content. There's also a <a href="/feed" className="navItem">RSS feed</a> if you're into that.</p>
                    <Mail/>
                    <div id={styles.links}>
                        <Link href="https://github.com/torbet"><FaGithub className={styles.icon} /></Link>
                        <Link href="https://twitter.com/guytorbet"><FaTwitter className={styles.icon} /></Link>
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