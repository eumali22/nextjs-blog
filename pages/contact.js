import NeoLayout, { siteTitle } from '../components/neoLayout';
import Head from 'next/head';

export default function Contact() {
  return (<>
    <NeoLayout activeItem="contact">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p>
        Ohayou sekai. This is the contact page.
      </p>
    </NeoLayout>
  </>);
}