import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

ReactDOM.render(<Main />, document.getElementById('root'));
