/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <p>
        Simple structure, allows you to freely move between subjects <br />
        And you can open it from everywhere!
        </p>
      </>
    ),
    additionalDescription: (
      <>
        <p>
        Take a look
        </p>
      </>
    ),
    followButton: 'docs/basics-gmod',
    followTitle:'Hello GMod',
  },
  {
    title: 'Basics to Expert',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        <p>
        With simple examples and the provided screenshots you can follow along while reading up.
        </p>
      </>
    ),
    additionalDescription: (
      <>
        <p>
        Follow the pages along and if you have any question, feel free to ask!
        </p>
      </>
    ),
    followButton: 'https://github.com/Ghosty-chan/GDoc/issues/new',
    followTitle:'Ask me on GitHub',
  },
  {
    title: 'Additions like Wire, E2 and others',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        <p>
        Will be provided as well, if you're more advanced already. There's always space for improvement
        </p>
      </>
    ),
    additionalDescription: (
      <>
        <p>
        Take a look
        </p>
      </>
    ),
    followButton: 'docs/gmod/basics-gmod-tools',
    followTitle:'Expert Stuff',
  },
  
];

function Feature({imageUrl, title, description, additionalDescription, followButton, followTitle}) {
  const imgUrl = useBaseUrl(imageUrl);
  const followUrl = useBaseUrl(followButton)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
      {additionalDescription}
      <div className={styles.buttons}>
        <Link
          className={clsx(
            'button button--outline button--secondary button--lg',
            styles.getStarted,
          )}
          to={followUrl}>
          {followTitle}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/basics-gmod')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description,additionalDescription,followButton,followTitle}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                    additionalDescription={additionalDescription}
                    followButton={followButton}
                    followTitle={followTitle}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
