export default function Navbar() {
    return (
        <div className='navbar'>
          <div className='logo'>
            <img src="/assets/mammoth_logo.png"/>
          </div>
          <div className='nav-buttons-all'>
            <ul className='nav-buttons'>
              <li><a href="">Начало</a></li>
              <li><a href="">За нас</a></li>
              <li><a href="">Обяви</a></li>
              <li><a href="">Продай автомобил</a></li>
              <li><a href="/Contacts">Контакти</a></li>
            </ul>
          </div>
          <div className='nav-buttons-all'>
            <ul className='nav-buttons2'>
              <li><a href="/login">Влизане</a></li>
              <li><a href="/register">Регистрация</a></li>
            </ul>
          </div>
        </div>
    );
  }