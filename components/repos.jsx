import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/repos.module.css'

function createData(Title, Description, Language, url) {
    return { Title, Description, Language, url };
}

export default function Repos(props) {
    const [arrayItems, setArrayItems] = useState([])
    useEffect(async () => {
        await fetch('https://api.github.com/users/torbet/repos').then(response => response.json())
            .then(data => {
                const items = data.map((arraySingleItem) => {
                    return (
                        createData(arraySingleItem.name, arraySingleItem.description, arraySingleItem.language, arraySingleItem.html_url)
                    );
                });
                setArrayItems(items);
            })

    }, [])

    const router = useRouter()



    return (
        <div>
            <ul>
                {arrayItems.map((row) => (
                        <li className={styles.row} onClick={() => { router.push(row.url) }} key={row.Title}>
                            <h2 className={styles.title}>{row.Title}</h2>
                            <h3 className={styles.subTitle}>{row.Description}</h3>
                            <h3 className={styles.subTitle}>{row.Language}</h3>
                        </li>
                ))}
            </ul>


        </div>

    );
}