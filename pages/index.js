import { useEffect } from 'react'
import Head from 'next/head'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import toast, { Toaster } from 'react-hot-toast'
import Header from '../components/Header'
import Hero from '../components/Hero'

import 'bootstrap/dist/css/bootstrap.css';

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-br from-[#2d1459] to-[#bf0863] `,
  button: `px-7 py-4 text-xl font-semibold rounded-xl bg-yellow-300 animate-pulse`,
  details: `text-lg text-center text-white font-semibold mt-4`,
}

const Home = () => {
  const connect = useMetamask()
  const address = useAddress()
  //const disconnect = useDisconnect()

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }
      welcomeUser(userDoc.userName)
    })()
  }, [address])

  return (
    <div className={style.wrapper}>
      <Head>
        <title>NFT Kottu</title>
        <link rel="icon" href="/bunny.png" />
      </Head>
      <Toaster position='top-center' reverseOrder={false} />
      {address ? (
        <>
          < Header />
          <Hero />
        </>
      ): (
        <div className={style.walletConnectWrapper}>
          <button 
            className={style.button}
            onClick={connect}> Connect Wallet 
          </button>
          <div className={style.details}>
            You need Chrome to run this App
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
