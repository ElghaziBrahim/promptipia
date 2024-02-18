'use client'
import { useState, useEffect } from "react"
import styles from "../styles/feed.module.css"
import PromptCard from "./PromptCard"


const Feed = () => {
  const [posts, setPosts] = useState([])

  const [searchText, setSearchText] = useState('')
  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }
  const handleTagClick = () => {

  }
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])
  return (
    <section className={styles.feed_countainer}>
      <form className={styles.form_feed}>
        <input
          type="text"
          placeholder="search for a tag"
          value={searchText}
          onChange={(e) => handleSearchChange(e)}
          required
        />
      </form>

      <div className={styles.card_list}>
        {
          searchText === '' ? (
            posts.map((post) => (
              <PromptCard
                key={post._id}
                post={post}
                handleTagClick={handleTagClick}
              />
            ))
          ) : (
            posts.filter(post => post.prompt.includes(searchText) || post.tag.includes(searchText))
              .map((post) => (
                <PromptCard
                  key={post._id}
                  post={post}
                  handleTagClick={handleTagClick}
                />
              ))
          )
        }



      </div>

    </section>
  )
}

export default Feed
