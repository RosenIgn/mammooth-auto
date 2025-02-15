"use client";
import { useState, useEffect } from "react";

const handleLogout = () => {
  fetch("https://localhost:5022/api/Auth/Logout", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        localStorage.clear();
        window.location.href = "/";
      }
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
};

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt");
    setIsLoggedIn(!!jwtToken);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const jwtToken = localStorage.getItem("jwt");

      if (!jwtToken) {
        console.log("User is not logged in");
        return;
      }

      try {
        const response = await fetch("https://localhost:5022/api/Auth/GetUser", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        if (!response.ok) {
          console.error(`Failed to fetch user data: ${response.statusText}`);
          if (response.status === 401) {
            localStorage.clear();
            setIsLoggedIn(false);
          }
          return;
        }

        const data = await response.json();
        if (data && data.user.userName) {
          setUsername(data.user.userName);
          if (data.roles == "Admin") {
            setAdmin(true);
          }
        } else {
          console.error("Invalid response format", data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUser();
  }, []);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    handleLogout();
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/mammoth_logo.png" alt="Logo" />
      </div>
      <div className="nav-buttons-all">
        <ul className="nav-buttons">
          <li><a href="/">Начало</a></li>
          <li><a href="/cars">Обяви</a></li>
          {isLoggedIn && (
            <li><a href="/sell">Продай автомобил</a></li>
          )}
          <li><a href="/Contacts">Контакти</a></li>
          <li><a href="/For-us">За нас</a></li>
        </ul>
      </div>
      <div className="nav-buttons-all">
        {!isLoggedIn ? (
          <ul className="nav-buttons2">
            <li><a href="/login">Влизане</a></li>
            <li><a href="/signup">Регистрация</a></li>
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
                {/* <li><a href="/">Моите обяви</a></li> */}
                {isAdmin && (<li><a href="/admin">Админ панел</a></li>)}
                <li><a href="/" onClick={handleLogoutClick}>Изход</a></li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
