import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Models from './Components/Model';
import Stories from './Components/Stories';
import Context from './Global/Context';
import Create from './Components/Create';
import Posts from './Components/Posts';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Context className="App">
       <Navbar />
       <div className="container">
         <Stories />
         <Create />
         <Posts />
         <Sidebar />
       </div>
       <Models />
    </Context>
  );
}

export default App;
