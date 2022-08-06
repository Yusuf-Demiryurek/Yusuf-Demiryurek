import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Header from '@site/src/components/Header';
import Profile from '@site/src/components/Profile';
import Portfolio from '@site/src/components/Portfolio';
import Stack from '@site/src/components/Stack';
import ContactMe from '@site/src/components/ContactMe';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Portfolio - ${siteConfig.title}`}
      description="Portfolio personnel me permettant de partager mes compétences et mes projets">
      <Header/>
      <main>
        <Profile />
        <Stack />
        <Portfolio />
        <ContactMe />
      </main>
    </Layout>
  );
}
