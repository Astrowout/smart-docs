import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function FileStatus() {
  const [file, setFile] = useState(null);

  const readData = () => {
    const json = localStorage.getItem('ABI');
    console.log(json);
  }

  useEffect(() => {
    readData();
  })

  return (
    <div className="padding-vert--xl">
     test
    </div>
  );
}
