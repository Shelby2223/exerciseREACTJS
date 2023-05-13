import Sanpham from '../Sanpham/Sanpham';
import './App.css';
import React,{Component} from 'react';
import Header from '../header/header';
import Fooder from '../Footer/Footer';
import Content from '../body/content';

function App() {
  return (
    <div>
        <Header></Header>
        <Content></Content>
        <Fooder></Fooder>
    </div>
  );
}
export default App;
