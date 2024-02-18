import styles from "../styles/home.module.css"
import Feed from "@/components/Feed"

const Home = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Welcome to Promptipia AI Prompts</h1>
            </header>
            <main className={styles.main}>
                <section className={styles.promptSection}>
                    <h2>Discover AI Prompts</h2>
                </section>
                <section className={styles.shareSection}>
                    <h2>Share Your AI Prompts</h2>
                </section>
                <Feed />
            </main>
        </>


    )
}

export default Home
