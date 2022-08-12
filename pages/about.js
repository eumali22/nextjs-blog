import NeoLayout from '../components/neoLayout';
import Head from 'next/head';

export default function About() {
  return (<>
    <NeoLayout activeItem="about">
      <Head>
        <title>About Erick Kristofer (eumali22)</title>
      </Head>
      Moshi moshi warudo. This is the about page.
    </NeoLayout>
  </>);
}