import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PropsComponent from './views/props/index.jsx'
import ConditionallyView from './views/conditionally/example-1/index.jsx'
import WeatherInfoView from './views/conditionally/weather-info/index.jsx'
import InsideALoopRendering from './views/homeworks/inside-a-loop-rendering/index.jsx'
import ConditionallyRendering from './views/homeworks/conditionally-rendering/index.jsx'
import TernaryOperator from './views/homeworks/ternary-operator/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PropsComponent /> */}
    {/* <ConditionallyView /> */}
    {/* <WeatherInfoView /> */}
    {/* <InsideALoopRendering /> */}
    {/* <ConditionallyRendering /> */}
    <TernaryOperator />
  </StrictMode>,
)
