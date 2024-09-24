import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextInput from '@/components/TextInput/TextInput'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-cyan-700">Vite + React</h1>
      <div className="card">
        <TextInput fontSize="large" label="sample" />
        <TextInput fontSize="medium" label="sample" state="error" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
