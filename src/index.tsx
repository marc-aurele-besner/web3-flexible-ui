import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App'

const rootElement = document.getElementById('root') as HTMLDivElement
// @ts-ignore
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
);