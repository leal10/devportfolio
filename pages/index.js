import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import Work from '../components/Work'

//since its a single page i can have all my components in this file

function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Work />
    </div>
  )
}

export default Home
