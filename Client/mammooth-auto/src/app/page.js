import React from 'react';

export default function Home() {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
          <img src="/assets/mammoth_logo.png"/>
        </div>
        <div className='nav-buttons-all'>
          <ul className='nav-buttons'>
            <li><a href="">За нас</a></li>
            <li><a href="">Обяви</a></li>
            <li><a href="">Продай автомобил</a></li>
            <li><a href="">Контакти</a></li>
          </ul>
          <ul className='nav-buttons2'>
            <li><a href="/login">Влизане</a></li>
            <li><a href="/register">Регистрация</a></li>
          </ul>

        </div>
      </div>
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