import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';

import { routes } from "./routes";

export const Navigations = () => {
  return (
    <BrowserRouter>
        <div className='Main-Container'>

          <h1>Descubre mi trabajo</h1>
          <Navbar/>
          <Routes>
              {
                  routes.map(({Component, path, id}) => (
                      <Route key={id} path = {path} element = {<Component/>} />
                  ))
              }
          
              <Route path='/*' element = {<Navigate to= {routes[0].path} replace />}  />
          </Routes>
        </div>
      </BrowserRouter>
  )
}
