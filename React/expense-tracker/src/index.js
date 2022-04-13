import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'
import './index.css'

import { Provider } from './context/context'
import App from './App'

ReactDOM.render(
    <SpeechProvider appId="5b64dea2-87f1-4605-aaad-83c9253f8b21" language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>, document.getElementById('root'));
