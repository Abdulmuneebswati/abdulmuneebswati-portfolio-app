import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "./Context"
import DataState from './Context/dataState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Projects from './Pages/Projects';
import ProjectDetails from './Pages/ProjectDetails';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>

<Routes>
<Route  path="/" element={<ThemeProvider>
  <DataState>
   <App />
</DataState>
</ThemeProvider>}/>

        <Route exact path='/projects' element={<DataState><Projects/></DataState>}/>
        <Route exact path='projects/project/:id' element={<DataState><ProjectDetails /></DataState>}/>
      </Routes>
    </Router>

  </React.StrictMode>
);


