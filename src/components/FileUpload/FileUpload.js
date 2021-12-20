import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

const UploadIcon = require('../../../static/icons/upload.svg').default
import styles from './FileUpload.module.css';

export default function FileUpload() {
  const contractUrl = useBaseUrl('/contract');

  const readData = (e, filename) => {
    const data = e.target.result;
    const json = JSON.parse(data);

    if (json) {
      const contract = JSON.stringify({
        filename,
        abi: json
      })
      localStorage.setItem('contract', contract);
      window.location.href = contractUrl;
    }
  }

  const handleFile = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => readData(e, file.name);
  }

  return (
      <div className="card shadow--md padding--md">
        <div className="card__header">
          <h3 className="margin-bottom--sm">Upload your ABI</h3>
          <p className={styles.description}>
            Only JSON format allowed
          </p>
        </div>

        <div className={clsx("card__body", styles.container)}>
          <label htmlFor="abi" className={styles.upload}>
            <input
              type="file"
              id="abi"
              name="abi"
              accept=".json"
              className={styles.input}
              onChange={handleFile}
            />

            <UploadIcon className={styles.icon} />

            <span className={clsx(styles.label, 'margin-top--sm')}>
              Upload ABI
            </span>
          </label>
        </div>
      </div>
  );
}
