"use client"
import styles from "../styles/form.module.css"
import Link from "next/link"

const Form = ({ type, post, setPost, handleSubmit }) => {

    return (
        <section className={styles.container_form}>
            <h1 className={styles.header_form}>{type} Post</h1>
            <p className={styles.descruption_form}>
                {type} and share prompt with the world and let your imagination go wild
            </p>
            <form className={styles.form_create_post} onSubmit={handleSubmit}>
                <label className={styles.label_form} >

                    <span className={styles.span_header}>Your AI Prompt</span>
                    <textarea value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })} cols="30" rows="10"
                        placeholder="write your prompt here"
                        required
                        className={styles.text_area_form}
                    />
                </label>

                <label className={styles.label_form} >

                    <span className={styles.span_header}>Tag (#web,#idea,#dev)</span>
                    <input value={post.tag}
                        type="text"
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        placeholder="tag"
                        required
                        className={styles.input_tag}
                    />
                </label>
                <div className={styles.buttons}>
                    <Link
                        href="/"
                        className={styles.cancel_but}
                    >
                        Cancel
                    </Link>
                    <button type="submit" className={styles.submit_but}>
                        {type}
                    </button>

                </div>
            </form>
        </section>

    )
}

export default Form
