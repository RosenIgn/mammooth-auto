import React from "react";

export default function Contacts() {
  return (
    <div>
      <div className="contacts-background-img">
        <div className="contacts-content">
          <h1>Свържи се с нас </h1>
          <div className="subtitle">Ела на място в нашия офис или шоурум.</div>
          <div className="subtitle">Последвай ни в социалните мрежи!</div>
        </div>
      </div>

      <div className="contacts-info-background">
        <div className="info-building">
          <h2>Сграда на Mammoth Auto</h2>
          <div className="info-building-content">
            <div className="info-building-display">
              <div className="info-building-description-location">
                <div className="info-building-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <path
                      d="M1 17V1H18L13.5652 6.71429L18 12.4286H1"
                      stroke="#111013"
                    ></path>
                  </svg>
                  <p className="bold">Местоположение</p>
                </div>
                <p className="bold">гр. София</p>
                <p>ж.к. Младост 4, Софийски околовръстен път 251,</p>
                <p> ПК: 1756</p>
                <p>Намира се в: Делта Топ Груп</p>
              </div>
              <div className="contact-us">
                <a href="#" className="contact-button">
                  {" "}
                  Свържи се с нас
                  <svg
                    fill="#000000"
                    viewBox="0 -5 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g></g>
                    <g></g>
                    <g>
                      {" "}
                      <path d="M29.000,22.000 L3.000,22.000 C1.346,22.000 -0.000,20.654 -0.000,19.000 L-0.000,3.000 C-0.000,1.346 1.346,-0.000 3.000,-0.000 L29.000,-0.000 C30.654,-0.000 32.000,1.346 32.000,3.000 L32.000,19.000 C32.000,20.654 30.654,22.000 29.000,22.000 ZM3.000,20.000 L29.000,20.000 C29.551,20.000 30.000,19.552 30.000,19.000 L30.000,3.317 L16.651,14.759 C16.463,14.920 16.232,15.000 16.000,15.000 C15.768,15.000 15.537,14.920 15.349,14.759 L2.000,3.317 L2.000,19.000 C2.000,19.552 2.449,20.000 3.000,20.000 ZM28.464,2.000 L3.536,2.000 L16.000,12.683 L28.464,2.000 Z"></path>{" "}
                    </g>
                  </svg>{" "}
                </a>
              </div>
            </div>

            <div className="info-building-display-2">
              <div className="info-building-description-worktime">
                  <div className="info-building-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Capa_1"
                      height="19"
                      viewBox="0 0 443.294 443.294"
                      width="18"
                    >
                      <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"></path>
                      <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"></path>
                    </svg>
                    <p className="bold">Работно време</p>
                  </div>
                  <p className="bold">Търсете ни между</p>
                  <p>Понеделник - Петък, 9:00 - 17:00</p>
                </div>
              
              <div className="contact-us-direct">
                <div className="info-building-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M13.3525 1.7936C14.7554 2.17089 16.0345 2.91018 17.0617 3.93742C18.089 4.96465 18.8283 6.24377 19.2055 7.64665M12.4959 4.99224C13.3376 5.21861 14.1051 5.66219 14.7214 6.27853C15.3378 6.89487 15.7813 7.66234 16.0077 8.50407M6.42828 10.5676C7.28669 12.3226 8.70923 13.7386 10.4681 14.589C10.5967 14.65 10.7391 14.6764 10.8811 14.6657C11.0231 14.655 11.1598 14.6074 11.2779 14.5278L13.8676 12.8009C13.9822 12.7245 14.114 12.6779 14.251 12.6653C14.3881 12.6527 14.5262 12.6745 14.6527 12.7287L19.4977 14.8051C19.6623 14.8751 19.7997 14.9966 19.8892 15.1514C19.9787 15.3062 20.0155 15.4859 19.994 15.6634C19.8409 16.8617 19.2562 17.963 18.3495 18.7613C17.4428 19.5595 16.2762 19.9999 15.0682 20C11.3371 20 7.75878 18.5178 5.12048 15.8795C2.48218 13.2412 1 9.66292 1 5.93181C1.00006 4.72378 1.44045 3.55719 2.23871 2.65048C3.03696 1.74377 4.13834 1.15911 5.33662 1.00598C5.51415 0.984492 5.69384 1.02128 5.84864 1.11081C6.00343 1.20033 6.12494 1.33773 6.19485 1.50232L8.27307 6.35148C8.32682 6.47691 8.34873 6.61369 8.33683 6.74963C8.32493 6.88557 8.2796 7.01646 8.20487 7.13064L6.48396 9.76012C6.40563 9.87841 6.35933 10.015 6.34957 10.1565C6.33981 10.2981 6.36693 10.4397 6.42828 10.5676Z"
                      stroke="#111013"
                    ></path>
                  </svg>
                  <p className="bold">Обадете се</p>
                </div>
                <p>+359 883 265 984</p>
              </div>
            </div>
          </div>  
        </div>

        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.6753633083354!2d23.37231838734364!3d42.62391198731124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa81334bcd781f%3A0x1c7059b3e82a8587!2z0LYu0LouINCc0LvQsNC00L7RgdGCIDTQnNC70LDQtNC-0YHRgiwg0KHQvtGE0LjQudGB0LrQuCDQvtC60L7Qu9C-0LLRgNGK0YHRgtC10L0g0L_RitGCIDI1MSwgMTYxNiDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1739386310003!5m2!1sbg!2sbg" width="700" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>


      <div className="contacts-info-background">
        <div className="info-building">
          <h2>Сграда на Mammoth Auto</h2>
          <div className="info-building-content">
            <div className="info-building-display">
              <div className="info-building-description-location">
                <div className="info-building-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <path
                      d="M1 17V1H18L13.5652 6.71429L18 12.4286H1"
                      stroke="#111013"
                    ></path>
                  </svg>
                  <p className="bold">Местоположение</p>
                </div>
                <p className="bold">гр. София</p>
                <p>ж.к. Младост 4, Софийски околовръстен път 251,</p>
                <p> ПК: 1756</p>
                <p>Намира се в: Делта Топ Груп</p>
              </div>
              <div className="contact-us">
                <a href="#" className="contact-button">
                  {" "}
                  Свържи се с нас
                  <svg
                    fill="#000000"
                    viewBox="0 -5 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g></g>
                    <g></g>
                    <g>
                      {" "}
                      <path d="M29.000,22.000 L3.000,22.000 C1.346,22.000 -0.000,20.654 -0.000,19.000 L-0.000,3.000 C-0.000,1.346 1.346,-0.000 3.000,-0.000 L29.000,-0.000 C30.654,-0.000 32.000,1.346 32.000,3.000 L32.000,19.000 C32.000,20.654 30.654,22.000 29.000,22.000 ZM3.000,20.000 L29.000,20.000 C29.551,20.000 30.000,19.552 30.000,19.000 L30.000,3.317 L16.651,14.759 C16.463,14.920 16.232,15.000 16.000,15.000 C15.768,15.000 15.537,14.920 15.349,14.759 L2.000,3.317 L2.000,19.000 C2.000,19.552 2.449,20.000 3.000,20.000 ZM28.464,2.000 L3.536,2.000 L16.000,12.683 L28.464,2.000 Z"></path>{" "}
                    </g>
                  </svg>{" "}
                </a>
              </div>
            </div>

            <div className="info-building-display-2">
              <div className="info-building-description-worktime">
                  <div className="info-building-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Capa_1"
                      height="19"
                      viewBox="0 0 443.294 443.294"
                      width="18"
                    >
                      <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"></path>
                      <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"></path>
                    </svg>
                    <p className="bold">Работно време</p>
                  </div>
                  <p className="bold">Търсете ни между</p>
                  <p>Понеделник - Петък, 9:00 - 17:00</p>
                </div>
              
              <div className="contact-us-direct">
                <div className="info-building-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M13.3525 1.7936C14.7554 2.17089 16.0345 2.91018 17.0617 3.93742C18.089 4.96465 18.8283 6.24377 19.2055 7.64665M12.4959 4.99224C13.3376 5.21861 14.1051 5.66219 14.7214 6.27853C15.3378 6.89487 15.7813 7.66234 16.0077 8.50407M6.42828 10.5676C7.28669 12.3226 8.70923 13.7386 10.4681 14.589C10.5967 14.65 10.7391 14.6764 10.8811 14.6657C11.0231 14.655 11.1598 14.6074 11.2779 14.5278L13.8676 12.8009C13.9822 12.7245 14.114 12.6779 14.251 12.6653C14.3881 12.6527 14.5262 12.6745 14.6527 12.7287L19.4977 14.8051C19.6623 14.8751 19.7997 14.9966 19.8892 15.1514C19.9787 15.3062 20.0155 15.4859 19.994 15.6634C19.8409 16.8617 19.2562 17.963 18.3495 18.7613C17.4428 19.5595 16.2762 19.9999 15.0682 20C11.3371 20 7.75878 18.5178 5.12048 15.8795C2.48218 13.2412 1 9.66292 1 5.93181C1.00006 4.72378 1.44045 3.55719 2.23871 2.65048C3.03696 1.74377 4.13834 1.15911 5.33662 1.00598C5.51415 0.984492 5.69384 1.02128 5.84864 1.11081C6.00343 1.20033 6.12494 1.33773 6.19485 1.50232L8.27307 6.35148C8.32682 6.47691 8.34873 6.61369 8.33683 6.74963C8.32493 6.88557 8.2796 7.01646 8.20487 7.13064L6.48396 9.76012C6.40563 9.87841 6.35933 10.015 6.34957 10.1565C6.33981 10.2981 6.36693 10.4397 6.42828 10.5676Z"
                      stroke="#111013"
                    ></path>
                  </svg>
                  <p className="bold">Обадете се</p>
                </div>
                <p>+359 883 265 984</p>
              </div>
            </div>
          </div>  
        </div>

        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.6753633083354!2d23.37231838734364!3d42.62391198731124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa81334bcd781f%3A0x1c7059b3e82a8587!2z0LYu0LouINCc0LvQsNC00L7RgdGCIDTQnNC70LDQtNC-0YHRgiwg0KHQvtGE0LjQudGB0LrQuCDQvtC60L7Qu9C-0LLRgNGK0YHRgtC10L0g0L_RitGCIDI1MSwgMTYxNiDQodC-0YTQuNGP!5e0!3m2!1sbg!2sbg!4v1739386310003!5m2!1sbg!2sbg" width="700" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    
  );
}
