"use client"
import React from 'react'
import Form from '@components/Form'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const CreatePrompt = () => {
    const router = useRouter()
    const { data: session } = useSession()

    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })
    const createPrompt = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/prompt/new', {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    userId: session?.user.id
                })
            })
            if (response.ok) {
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePrompt
