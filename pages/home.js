import React from 'react'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
        <h3>Home</h3>
        <ul>
            <li><Link href='/youtube/users'>getStaticProps Users-yt</Link></li>
            <li><Link href='/youtube/posts'>getStaticProps Posts-yt</Link></li>
            <li><Link href='/youtube/news'>getServerSideProps News-yt</Link></li>
        </ul>
    </div>
  )
}
