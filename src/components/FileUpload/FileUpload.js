import React, { useState } from 'react';
import clsx from 'clsx';

const UploadIcon = require('../../../static/icons/upload.svg').default
import styles from './FileUpload.module.css';

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const readData = (e) => {
    const data = e.target.result;
    const json = JSON.parse(data);
    console.log(json);
  }

  const isValidABI = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = readData;

    return true;
  }

  const handleFile = (e) => {
    const file = e.target.files[0];

    console.log(file);

    if (isValidABI(file)) {
      setFile(file);
    }
  }

  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className={clsx('row', styles.center)}>
          <div className="col col--6">
            <div className="card shadow--md padding--md">
              <div className="card__header">
                <h3 className="margin-bottom--sm">Upload your ABI</h3>
                <p>
                  Only JSON format allowed
                </p>
              </div>

              <div className="card__body">
                {file ? (
                  <div>
                    <p>
                      {file.name}
                    </p>

                    <label htmlFor="abi" className={styles.altUpload}>
                      <input
                        type="file"
                        id="abi"
                        name="abi"
                        accept=".json"
                        className={styles.input}
                        onChange={handleFile}
                      />

                      <span className={styles.altLabel}>
                        Upload new ABI
                      </span>
                    </label>
                  </div>
                ) : (
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

                    <span className={clsx(styles.label, 'margin-top--md')}>
                      Upload ABI
                    </span>
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
