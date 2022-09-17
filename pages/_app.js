import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider 
      desiredChainId={ChainId.Rinkeby}
      chainRpc = {{[ChainId.Rinkeby]:'https://rinkeby.infura.io/v3/2f675bfa619c4ba09c68d6a9b5587e48'}}
    > 
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
  
}

export default MyApp
