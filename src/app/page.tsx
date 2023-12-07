import Hero from '@/components/Hero'
import FeaturePost from '@/components/Post/FeaturePost'

export default function HomePage() {
  return (
   <main className='h-full flex flex-col gap-10'>
    <Hero/>
    <FeaturePost/>
   </main>
  )
}
