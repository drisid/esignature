import Link from "next/link"
import Head from "next/head"
//import Script from "next/script"
import Layout from "../../components/layout"


export default function SecondPost()
{
   return (
 <Layout>
   <Head>
       <title> SecondPost </title>
       </Head>
    
      {/* <Script 
        src="https://connect.facebook.net/en_US/sdk.js"
        //strategy = "lazyOnload"
        //onLoad = {() => console.log('script loaded correctly')}
      > Mozilla link </Script> */}
        
 
   <h1> Second Post</h1>
   <h2>  {' '}
       <Link href="/posts/first-post"> Link to open first post </Link> 
    </h2>
    </Layout> 

   )
}
