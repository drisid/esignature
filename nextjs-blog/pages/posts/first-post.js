//import { SecondPost } from "./second-post";
import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout";

export default function FirstPost() 
{
    return (
        <Layout>
        <Head> 
            <title> FirstPost </title>
        </Head>
        <h1> First Post </h1>
        <h2>
            <Link href = "/posts/second-post"> Link to open second post </Link>
        </h2>
        </Layout>
    )
  }