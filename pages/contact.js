import NeoLayout from '../components/neoLayout';
import Head from 'next/head';

export default function Contact() {
  return (<>
    <NeoLayout activeItem="contact">
      <Head>
        <title>Contact Details of Erick Kristofer Umali (eumali22)</title>
      </Head>
      <p>
        Ohayou sekai. This is the contact page.
      </p>
    </NeoLayout>
  </>);
}