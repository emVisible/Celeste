import '@/assets/global.scss'
import '@/plugins/tailwind/index.scss'
import { ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Welcome from './components/Welcome.tsx'
ConfigProvider.config({
  theme: {},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <BrowserRouter>
        <div className='relative'>
          <Welcome></Welcome>
          <App />
        </div>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
