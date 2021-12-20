import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { ImportOptions, FileUpload, PasteCode } from '../components';

export default function Import() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Import ABI - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <ImportOptions>
          <PasteCode />
          <FileUpload />
        </ImportOptions>
      </main>
    </Layout>
  );
}