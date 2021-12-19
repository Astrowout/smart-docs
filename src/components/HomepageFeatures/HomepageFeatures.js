import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../../static/img/feature1.svg').default,
    description: (
      <>
        Smart docs lets you focus on what matters for your users. Set up your <strong>smart contract documentation</strong> easily to make it ready for using it in Web 3.0 🚀
      </>
    ),
  },
  {
    title: 'Just like Swagger API docs',
    Svg: require('../../../static/img/feature2.svg').default,
    description: (
      <>
        REST or GraphQL API documentation is used by frontenders all over the world. Soon <strong>Smart Contract ABI documentation</strong> will be too.
      </>
    ),
  },
  {
    title: 'Always available',
    Svg: require('../../../static/img/feature3.svg').default,
    description: (
      <>
        Come back later and start using your docs right away. Your uploaded smart contract documentation will be useable without having to re-upload.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md margin-top--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
