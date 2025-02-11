/*

In this component we create browser router to navigate frontend endpoints and use ApplicationContext

@author postnikovtrofim1@gmail.com (Postnikov Trofim)

*/

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApplicationContext, ApplicationContextType } from './appCore/ApplicationContext'
import IndexPage from './pages/IndexPage'
import ClothPage from './pages/ClothPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const applicationContextValue: ApplicationContextType = {};
  return (
    <BrowserRouter>
      <ApplicationContext.Provider value={applicationContextValue}>
      <Routes>
          <Route index={true} path='/' Component={IndexPage} />
          <Route path='/login' Component={null} />
          <Route path='/registration' Component={null} />
          <Route path='/cloth/:id' Component={ClothPage} />
          <Route path='/cloth' element={<ErrorPage nameError='404 Page Not Found' commentError='Unknown page'/>} />
      </Routes>
      </ApplicationContext.Provider>
    </BrowserRouter>
  )
}

export default App
