import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.render(<App />, document.querySelector('#root'))
