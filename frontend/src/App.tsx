/*

In this component we create browser router to navigate frontend endpoints and use ApplicationContext

@author postnikovtrofim1@gmail.com (Postnikov Trofim)

*/

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApplicationContext, ApplicationContextType } from './appCore/ApplicationContext'
import IndexPage from './pages/IndexPage'

function App() {
  const applicationContextValue: ApplicationContextType = {};
  return (
    <BrowserRouter>
      <ApplicationContext.Provider value={applicationContextValue}>
      <Routes>
          <Route index={true} path='/' Component={IndexPage} />
      </Routes>
      </ApplicationContext.Provider>
    </BrowserRouter>
  )
}

export default App
