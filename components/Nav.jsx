"use client"

import styles from "../styles/nav.module.css"


import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    setUpProviders()
  }, [])

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.homepro}>
        <Image
          src="/assets/images/logo.svg"
          alt="logo website"
          width={30}
          height={30}
        />
        <p>Proptopia</p>
      </Link>
      {
        session?.user ? (
          <div className={styles.createpost}>
            <Link href="/create-prompt" >
              create post
            </Link>
            <button onClick={signOut} className={styles.signOutBu}>Sign Out</button>
            <Link href="/profile" className={styles.profile}>
              <Image
                src={session?.user.image}
                alt="Profile Picture"
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : (
          <>
            {
              providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"

                  key={provider.id}
                  onClick={() => signIn(provider.id)}
                  className={styles.sign}
                >
                  Sign In
                </button>
              ))
            }

          </>
        )
      }
    </nav>
  )
}

export default Nav
