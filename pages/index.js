import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

//since its a single page i can have all my components in this file

function Home() {
  return (
    <div>
      <Navbar />
      <h1>The start of the portfolio! </h1>
    </div>
  )
}

export default Home
