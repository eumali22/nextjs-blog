import NeoLayout, { siteTitle } from '../components/neoLayout';
import Head from 'next/head';

export default function Projects() {
  return (<>
    <NeoLayout activeItem="projects">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      Hello World. This is the projects page.
    </NeoLayout>
  </>);
}