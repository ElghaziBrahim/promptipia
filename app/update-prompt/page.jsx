"use client"
import Form from '@components/Form'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const EditPrompt = () => {
    const searchParams = useSearchParams()
    const promptId = searchParams.get('id')
    useEffect(() => {
        const getPromptInfo = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const post = await response.json()
            setPost({
                prompt: post.prompt,
                tag: post.tag
            })
        }
        if (promptId) getPromptInfo()
    }, [promptId])
    const router = useRouter()

    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })
    const updatePrompt = async (e) => {
        e.preventDefault()
        try {
            if (!promptId) return alert("Prompt Id Not Found")
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
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
            type="Edit"
            post={post}
            setPost={setPost}
            handleSubmit={updatePrompt}
        />


    )
}

export default EditPrompt
