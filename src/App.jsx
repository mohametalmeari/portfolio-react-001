import { Route, Routes } from 'react-router'
import './css/main.css'
import AboutPage from './routes/AboutPage'
import NotFoundPage from './routes/NotFoundPage'
import WorkPage from './routes/WorkPage'
import Layout from './components/Layout'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WorkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
