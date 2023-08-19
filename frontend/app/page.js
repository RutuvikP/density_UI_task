import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import HomeTop from './components/HomeTop'
import HomeMid from './components/HomeMid'
import HomeMid2 from './components/HomeMid2'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HomeTop/>
      <HomeMid/>
      <HomeMid2/>
      <Footer/>
    </main>
  )
}
