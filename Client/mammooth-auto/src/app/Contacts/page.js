import React from 'react';
import Navbar from 'components/navbar';

export default function Contacts() {
    return (
        <div>
            <Navbar />
                  <div className='contacts-background-img'>
                    <div className='contacts-content'>
                      <h1>Свържи се с нас   </h1>
                      <div className='subtitle'>Ела на място в нашия офис или шоурум.</div>
                      <div className='subtitle'>Последвай ни в социалните мрежи!</div>
                    </div>
                  </div>

                  <div className='contacts-info-background'></div>
                    <div className='info-building-content'>
                        <h2>Сграда на Mammoth Auto</h2>
                        <div className='info-building-display'>
                            <div className='info-building-description-location'>
                             
                             <div className='info-building-location-logo'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none"><path d="M1 17V1H18L13.5652 6.71429L18 12.4286H1" stroke="#111013"></path></svg>
                                <p className='bold'>Местоположение</p>
                             </div> 
                                 <p className='bold'>гр. София</p>
                                 <p>ж.к. Младост 4, Софийски околовръстен път 251,</p> 
                                 <p> ПК: 1756</p>
                                 <p>Намира се в: Делта Топ Груп</p>
                            </div>
                                <div className='info-building-description-worktime'>
                                     <div className='info-building-worktime-logo'>
                                         <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="19" viewBox="0 0 443.294 443.294" width="18"><path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"></path><path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"></path></svg>                                 
                                            <p className='bold'>Работно време</p>
                                        </div> 
                                        <p className='bold'>Търсете ни между</p>
                                        <p>Понеделни-Петък, 9:00-17:00</p>


                                 </div>
                         </div>

                       
                    </div>




                  
                    
















         </div>
    )
}