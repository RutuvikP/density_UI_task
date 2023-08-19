import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import HomeTop from './components/HomeTop'
import HomeMid from './components/HomeMid'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomeTop/>
      <HomeMid/>
    </main>
  )
}
