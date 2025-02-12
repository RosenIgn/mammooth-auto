"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [username, setUsername] = useState("");
    useEffect(() => {
      const jwtToken = localStorage.getItem("jwt");
      setIsLoggedIn(!!jwtToken);
    }, []);


    // useEffect(() => {
    //   const getUser = async () => {
    //     try {
    //       const jwtToken = localStorage.getItem("jwt");

    //       const response = await fetch(
    //         "https://localhost:5022/api/Auth/GetUser",
    //         {
    //           method: "GET",
    //           headers: {
    //             Authorization: `Bearer ${jwtToken}`,
    //           },
    //         }
    //       );

    //       const data = await response.json();
    //       setUsername(data.userName);
    //     } catch (error) {
    //       console.error("Error fetching user:", error);
    //     }
    //   };

    //   getUser();
    // }, []);

    return (
        <div className='navbar'>
          <div className='logo'>
            <img src="/assets/mammoth_logo.png"/>
          </div>
          <div className='nav-buttons-all'>
            <ul className='nav-buttons'>
              <li><a href="/">Начало</a></li>
              <li><a href="/">За нас</a></li>
              <li><a href="/">Обяви</a></li>
              <li><a href="/salecars">Продай автомобил</a></li>
              <li><a href="/Contacts">Контакти</a></li>
            </ul>
          </div>
          <div className='nav-buttons-all'>
          {!isLoggedIn ? (
                    <ul className="nav-buttons2">
                        <li><a href="/login">Влизане</a></li>
                        <li><a href="/register">Регистрация</a></li>
                    </ul>
                ) : (
                    <div
                        className="profile-dropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="profile-button">
                            <img src="/assets/profile.jpeg" alt="Profile" />
                            <span>{username}</span>
                        </button>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><a href="/profile">Профил</a></li>
                                <li><a href="/">Моите обяви</a></li>
                                <li><a href="/settings">Настройки</a></li>
                                <li><a href="/logout">Изход</a></li>
                            </ul>
                        )}
                    </div>
                )}
          </div>
        </div>
    );
  }