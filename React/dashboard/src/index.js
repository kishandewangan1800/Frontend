import React from 'react';
import ReactDOM  from 'react-dom';

import  App  from './App';
import './index.css'

import {ContextProvider} from './contexts/ContextProvider'

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// root.render(
//     <App />
// )

ReactDOM.render(
<ContextProvider>
<App />
</ContextProvider>
, document.getElementById('root'));