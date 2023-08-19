import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import HomeTop from './components/HomeTop'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomeTop/>
    </main>
  )
}
