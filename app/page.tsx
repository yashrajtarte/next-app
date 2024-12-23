// Run app in dev mode - npm run dev
// In order to build application in prod level 
//   1. npm run build
//   2. npm start 
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './Component/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World!!!</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  )
}
  