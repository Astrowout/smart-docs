import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const CodeIcon = require('../../../static/icons/code.svg').default
import styles from './PasteCode.module.css';

export default function PasteCode() {
  const contractUrl = useBaseUrl('/contract');

  const handleContract = (e) => {
    const value = e.target.value.replace(/\s/g,'');
    const json = JSON.parse(value);

    if (json && Array.isArray(json)) {
      const contract = JSON.stringify({
        abi: json
      });

      localStorage.setItem('contract', contract);
      window.location.href = contractUrl;
    }
  }

  return (
    <div className="card shadow--md padding--md">
      <div className="card__header">
        <CodeIcon className={styles.icon}></CodeIcon>

        <h3 className="margin-bottom--sm">Paste your ABI code</h3>
        <p className={styles.description}>
          Only JSON format allowed
        </p>
      </div>

      <div className="card__body">
          <textarea
            id="abi-code"
            name="abi-code"
            className={styles.input}
            onChange={handleContract}
            rows="8"
            placeholder='// Paste your JSON ABI code here'
          />
      </div>
    </div>
  );
}
