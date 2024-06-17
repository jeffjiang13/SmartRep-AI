// import { onGetBlogPosts } from '@/actions/landing'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/constants/landing-page'
import { blogPosts } from '@/constants/blog-posts'

import clsx from 'clsx'
import { ArrowRightCircleIcon, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
import { getMonthName } from '@/lib/utils'
import Stripe from 'stripe'
import Contact from '@/components/contact'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  typescript: true,
  apiVersion: '2024-04-10',
})
export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_PLURA_PRODUCT_ID,
    active: true,
  })
  // const posts:
  //   | {
  //       id: string
  //       title: string
  //       image: string
  //       content: string
  //       createdAt: Date
  //     }[]
  //   | undefined = await onGetBlogPosts()
  // console.log(posts)
  return (
    <main>

      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
          <span className="text-orange bg-orange/20 px-4 py-2 rounded-full text-sm">
            An AI powered sales assistant chatbot
          </span>
          <div className="animate-text bg-gradient-to-r from-orange via-yellow-200 to-yellow-300 bg-clip-text text-transparent font-black">
          <h1 className=" text-6xl sm:text-7xl md:text-9xl lg:text-[150px] xl:text-[200px] font-bold text-center mt-10">
            SmartRep AI
          </h1>
        </div>
          <p className="text-center max-w-[300px] md:max-w-[500px] mb-10">
            Your AI powered sales assistant! Embed SmartRep AI into any website
            with just a snippet of code!
          </p>
          <Link href="/dashboard">
          <Button className="bg-orange hover:bg-yellow-300 font-bold text-white px-4">
            Start For Free
          </Button>
          </Link>
          <Image
            src="/images/iphonecorinna.png"
            width={400}
            height={100}
            alt="Logo"
            className="max-w-xs md:max-w-lg object-contain"
          />
        </div>
      </section>

      <section className="features-section py-20 mt-10" id='features'>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🤖 Automated AI Sales Rep</h3>
              <p className="text-gray-600">Engages with customers and answers their queries intelligently.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">📅 Appointment Booking</h3>
              <p className="text-gray-600">Effortlessly schedules appointments with an integrated calendar widget.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">💻 Universal Compatibility</h3>
              <p className="text-gray-600">Easy integration with any website through a simple code snippet.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🧠 Smart Question Linking</h3>
              <p className="text-gray-600">Provides accurate and relevant responses based on user queries.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">💬 Real-Time Chat</h3>
              <p className="text-gray-600">Supports both manual and automated chat options.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🏷️ White-Labeling Options</h3>
              <p className="text-gray-600">Customize the chatbot to match your brand&apos;s identity.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🎨 Customizable Interface</h3>
              <p className="text-gray-600">Modify the look and feel of the chatbot to suit your website&apos;s design.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🗓️ Calendar Widget</h3>
              <p className="text-gray-600">Integrated calendar for seamless appointment bookings.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">💳 Stripe Integration</h3>
              <p className="text-gray-600">Securely process payments through Stripe.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">✉️ Email Marketing</h3>
              <p className="text-gray-600">Simple tools to create and send marketing emails.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">💰 Financial Dashboard</h3>
              <p className="text-gray-600">Monitor and manage your financial transactions.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">💾 Lead Management</h3>
              <p className="text-gray-600">Save visitor information as leads for future follow-ups.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🔐 Custom Login/Signup with OTP</h3>
              <p className="text-gray-600">Secure authentication with one-time passwords.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">📲 Secure File/Image Uploads</h3>
              <p className="text-gray-600">Allow users to upload files and images safely.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🔍 SEO Optimized Blogging</h3>
              <p className="text-gray-600">Improve your site&apos;s search engine ranking with SEO-friendly blog posts.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🏗️ Improved Architecture</h3>
              <p className="text-gray-600">Efficient and scalable backend structure.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🖥️ Minimal, Stunning UI</h3>
              <p className="text-gray-600">Clean and modern user interface.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">❓ FAQ Section</h3>
              <p className="text-gray-600">Provide quick answers to frequently asked questions.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🌓 Light/Dark Mode Toggle</h3>
              <p className="text-gray-600">Switch between light and dark modes for user comfort.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">⚙️ Feature Control Settings</h3>
              <p className="text-gray-600">Enable or disable features as per your plan.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">🔒 Restrict Features by Plan</h3>
              <p className="text-gray-600">Control feature access based on user subscription plans.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-20" id='pricing'>
        <h2 className="text-4xl text-center max-w-[300px] md:max-w-[500px] animate-text bg-gradient-to-r from-orange via-yellow-200 to-yellow-300 bg-clip-text text-transparent font-black"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
      </section>
      <div className="flex  justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-orange': card.title === 'Ultimate',
              'border-2 border-yellow-300': card.title === 'Pro',

            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              {prices.data.map((price) => (
                price.id === card.priceId && (
                  <Link
                    key={price.id}
                    href={`/dashboard?plan=${price.id}`}
                    className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md hover:bg-yellow-200 hover:scale-105"
                  >
                    Get Started
                  </Link>
                )
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
      <section className="flex justify-center items-center flex-col gap-4 mt-28" id='news'>
        <h2 className="text-4xl font-bold">News Room</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Explore our insights on AI, technology, and optimizing your business.
        </p>
      </section>
      <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        {blogPosts &&
          blogPosts.map((post) => (
            <Link href={`${post.id}`} key={post.id}>
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={post.image}
                    alt="post featured image"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(new Date(post.createdAt).getMonth())}{' '}
                    {new Date(post.createdAt).getDate()}{' '}
                    {new Date(post.createdAt).getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(4, 100) + '...')}
                </div>
              </Card>
            </Link>
          ))}
      </section>
      {/* <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        {posts &&
          posts.map((post) => (
            <Link
              href={`/blogs/${post.id}`}
              key={post.id}
            >
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={`${process.env.CLOUDWAYS_UPLOADS_URL}${post.image}`}
                    alt="post featured image"
                    fill
                  />
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(post.createdAt.getMonth())}{' '}
                    {post.createdAt.getDate()} {post.createdAt.getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(4, 100))}...
                </div>
              </Card>
            </Link>
          ))}
      </section> */}
      <Contact />
      <Footer />
    </main>
  )
}
