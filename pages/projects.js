import NeoLayout from '../components/neoLayout';
import Head from 'next/head';

export default function Projects() {
  return (<>
    <NeoLayout activeItem="projects">
      <Head>
        <title>Erick Kristofer's Projects (eumali22)</title>
      </Head>
      Hello World. This is the projects page.
    </NeoLayout>
  </>);
}