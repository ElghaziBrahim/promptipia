'use client'

import { useState } from "react"
import Image from "next/image"
import styles from "../styles/card.module.css"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    const { data: session } = useSession()
    const pathName = usePathname()
    const router = useRouter()
    return (
        <div className={styles.card}>
            <div className={styles.creator_post} >
                <Image
                    className={styles.creator_image}
                    src={post.creator.image}
                    alt="user image"
                    width={40}
                    height={40}
                />
                <div className={styles.creator_user}>
                    <h3>{post.creator.username}</h3>
                    <p>{post.creator.email}</p>
                </div>

            </div>
            <p className={styles.prompt_content}>
                {post.prompt}
            </p>
            <p className={styles.tags}
                onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                #{post.tag}

            </p>
            {
                session?.user.id === post.creator._id &&
                pathName === '/profile' && (
                    <div className={styles.acctions_card}>
                        <p className={styles.edit_card} onClick={handleEdit}>Edit</p>
                        <p className={styles.delete_card} onClick={handleDelete}> Delete</p>
                    </div>
                )
            }
        </div>
    )
}

export default PromptCard
