import React, { Children } from 'react';
import clsx from 'clsx';

import styles from './ImportOptions.module.css';

export default function PasteCode({ children }) {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className={clsx('row', styles.center)}>
          <div className="col col--6">
            {Children.toArray(children)[0]}
          </div>

          <span className={clsx('col col--1 padding-vert--lg', styles.or)}>Or</span>

          <div className="col col--5">
            {Children.toArray(children)[1]}
          </div>
        </div>
      </div>
    </section>
  );
}
