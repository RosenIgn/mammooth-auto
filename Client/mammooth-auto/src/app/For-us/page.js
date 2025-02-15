import React from 'react';
import Navbar from 'components/navbar';

export default function Contacts() {
    return (
        <div>
            <Navbar />
                    <div className='for-us-background-img'>
                    <div className='for-us-content'>
                      <h1>За нас   </h1>
                      <div className='subtitle'>Запознай се с екипа ни и научи повече за процеса на работа</div>
                    </div>
                  </div>

                    <div className='for-us-display'>
                    <div className='for-us-information'>
                    <h2>Добре дошли в Mammoth Auto</h2>
        <h1>Ние сме любители на автомобилите. Те са нашата голяма страст.</h1>
        <p>Занимаваме се с внос на автомобили от 12 години. Работим с най-големите марки</p>
        <p> в Германия: Мерцедес, БМВ, Ауди и Фолксваген.</p>
        <ul>
            <li>Внос на автомобили</li>
            <li>Регистрация в КАТ</li>
            <li>Аксесоари за твоя автомобил</li>
            <li>Съвети за покупка и продажба</li>
            <li>Лизинг</li>
            <li>Застраховки</li>
        </ul>
                    </div>
                    <div className='image-content'>
                    <img src="/assets/merc-interior.png"></img>
                    </div>
                 </div>






        </div>)}