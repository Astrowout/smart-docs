import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { HomepageHero, HomepageFeatures, ImportOptions, FileUpload, PasteCode } from '../components';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageHero />
        <ImportOptions>
          <PasteCode />
          <FileUpload />
        </ImportOptions>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
