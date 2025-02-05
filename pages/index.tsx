import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Main from '../components/Main'
import Menu from '../components/Menu'
import Gallerie from '../components/Gallerie'
import Livraison from '../components/Livraison'
import Link from 'next/link'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
import Notice from '../components/Notice';


const Home: NextPage = () => {
  const [ref, inView] = useInView({})
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // When the component mounts, show the modal
    setModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <div className='bg-gradient-to-tr from-[#ffad1f] to-[#ffc45d] h-screen text-white snap-y snap-mandatory overflow-y-scroll z-0
    overflow-x-hidden scrollbar-none scroll-smooth'>

      <Head>
        <title>OPIANO | Restaurant Coréen / Korean Restaurant In Montreal</title>
        <meta name="description" content="Restaurant coréen au centre-ville de Montréal près de l'université McGill." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header inView={inView} />

      <section id="main" className='relative snap-center'>
        <div ref={ref} className="absolute h-[30%]"></div>
        <Main />
      </section>

      <section id="menu" className='relative snap-center'>
        <Menu />
      </section>

      <section id="gallerie" className='relative snap-center'>
        <Gallerie />
      </section>

      <section id="livraison" className='relative snap-center'>
        <Livraison />
      </section>

      <footer className='sticky sm:bottom-[2%] bottom-[10%] w-full'>
        <div className='flex item-center justify-center'>
          <Link href="#main">
            <ArrowUpCircleIcon className='h-10 w-10 rounded-full text-[#ffe7b3] hover:text-white hover:scale-110
            transition-all z-30' />
          </Link>
        </div>
      </footer>

      {/* <Notice isOpen={isModalOpen} onClose={handleCloseModal}>
        <img
            src="/notice.png"
            alt=''
            className='h-max w-max object-cover'
        />
      </Notice> */}

    </div>
  )
}

export default Home
