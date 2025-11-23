import { Suspense } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Categories from '@/components/Categories'
import Loading from '@/components/Loading'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Suspense fallback={<Loading />}>
        <Hero />
        <Features />
        <Categories />
      </Suspense>
    </main>
  )
}
