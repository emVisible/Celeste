import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import '@/plugins/tailwind/index.scss'
import '@/assets/global.scss'
ConfigProvider.config({
  theme: {},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
