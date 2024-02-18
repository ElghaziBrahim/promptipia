
import styles from "../styles/globals.module.css"
import Nav from "@/components/Nav"
import Provider from "@/components/Provider"

export const matadata = {
    title: "Promtopia",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <main className={styles.app}>
                        <Nav />
                        {children}
                    </main>
                </Provider>

            </body>
        </html>
    )
}
export default RootLayout
