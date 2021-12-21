import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from "./FileStatus.module.css";

import { useContract } from "../../hooks";

export default function FileStatus() {
  const { contractLoaded } = useContract();

  return (
    <div className={clsx("shadow--lw", styles.status, { [styles.missing]: !contractLoaded })}>
     {contractLoaded ? 'ABI interface loaded.' : "ABI missing."}
     &nbsp;
      <Link to={contractLoaded ? '/contract' : '/import'} className={styles.link}>
        {contractLoaded ? 'View your contract.' : "Import one here."}
      </Link>
    </div>
  );
}
