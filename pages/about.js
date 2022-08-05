import NeoLayout, { siteTitle } from '../components/neoLayout';
import Head from 'next/head';

export default function About() {
  return (<>
    <NeoLayout activeItem="about">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      Moshi moshi warudo. This is the about page.
    </NeoLayout>
  </>);
}