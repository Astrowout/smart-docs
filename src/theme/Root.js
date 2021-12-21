import React from 'react';

import { FileStatus } from '../components';

// Default implementation, that you can customize
function Root({children}) {
	return (
		<>
			{children}

			<FileStatus/>
		</>
	);
}

export default Root;