import React from 'react'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getMonthName } from '@/lib/utils'
import parse from 'html-react-parser'
import { blogPosts } from '@/constants/blog-posts'
import Image from 'next/image'
const Blog = () => {
  const post = blogPosts.find(post => post.id === 'blog5')
  console.log(post)
  if (!post) return <div className='justify-center text-center text-2xl'>Post not found</div>

  const createdAt = new Date(post.createdAt)

  return (
    <div>
      <NavBar />
      <main className="container mx-auto my-10 p-4">
        <Card className="w-full">
          <CardHeader>
          <div className="relative w-full sm:w-[60rem] h-[12rem] sm:h-[30rem] mx-auto mt-10 mb-10">
            <Image
              src={post.image}
              alt="post featured image"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-md"
            />
          </div>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>
              {getMonthName(createdAt.getMonth())} {createdAt.getDate()},{' '}
              {createdAt.getFullYear()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-xl parsed-container flex flex-col mt-10 gap-10">
              {parse(post.content)}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default Blog
