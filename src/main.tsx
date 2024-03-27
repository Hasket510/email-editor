import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from './Provider'
import './index.css'
import { Home } from './pages/Home/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider>
			<Home />
		</Provider>
	</React.StrictMode>
)
