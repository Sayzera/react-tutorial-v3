import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PropsComponent from './views/props/index.jsx'
import ConditionallyView from './views/conditionally/example-1/index.jsx'
import WeatherInfoView from './views/conditionally/weather-info/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PropsComponent /> */}
    {/* <ConditionallyView /> */}
    <WeatherInfoView />
  </StrictMode>,
)
