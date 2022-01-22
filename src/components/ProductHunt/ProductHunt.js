import React from 'react';
import clsx from 'clsx';

import styles from './ProductHunt.module.css';

export default function FileStatus() {
  return (
    <section className="padding-vert--xl">
      <div className={clsx('container', styles.center)}>
        <a href="https://www.producthunt.com/posts/smart-docs?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-smart-docs" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=325835&theme=light" alt="Smart Docs - Easiest documentation viewer for Solidity smart contracts | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" /></a>
      </div>
    </section>
  );
}
