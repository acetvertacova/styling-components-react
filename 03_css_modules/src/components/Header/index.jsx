import styles from './Header.module.scss';

export default function Header({theme}){

    return(
        <header className={styles.header}>
            <h2 className={styles.title}>IT Blog</h2>
        </header>
    )
}