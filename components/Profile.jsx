import PromptCard from "./PromptCard"
import styles from "../styles/profile.module.css"
const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {

    return (
        <section className={styles.profile}>
            <h1>{name} profile</h1>
            <p className={styles.desc}>
                {desc}
            </p>
            <div className={styles.card_list}>
                {
                    data.map((post) => (
                        <PromptCard
                            key={post._id}
                            post={post}
                            handleDelete={() => handleDelete && handleDelete(post)}
                            handleEdit={() => handleEdit && handleEdit(post)}
                        />
                    ))
                }

            </div>

        </section>
    )
}

export default Profile
