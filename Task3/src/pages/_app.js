import '@/styles/globals.css'
import localFont from "next/font/local";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const LeagueSpartan = localFont({src:"../../public/fonts/LeagueSpartan-VariableFont_wght.ttf"});


export default function App({ Component, pageProps }) {
  return( 
    <UserProvider>
      <main className={LeagueSpartan.className}>
        <Component {...pageProps} />
      </main>
    </UserProvider>
    
  )
}
