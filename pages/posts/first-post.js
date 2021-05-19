import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout'

export default function NewPost(){
    return (
        <Layout>
            <Head>
                <title>New Post</title>
            </Head>
            <h1>New Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
}