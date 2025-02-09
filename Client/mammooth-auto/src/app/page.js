import React from 'react';
import Navbar from 'components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='background-img'>
          <div className='home-content'>
            <div className='moto'>We won't let ICEs go extinct like mammoths did.</div>
            <h1>Mammoth Auto</h1>
            <div className='subtitle'>С автомобил по поръчка получаваш точно това, което търсиш. Ние ще се погрижим за всичко останало.</div>
            <div className='div-btn'>
            <a href="/" className='order-btn'>Направи поръчка</a>
            </div>
          </div>
      </div>
    </div>
  );
}