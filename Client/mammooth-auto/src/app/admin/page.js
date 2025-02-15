// import React from 'react';
// import Navbar from 'components/navbar';

// //THIS PAGE IS ADMIN ONLY
// //If not Admin => return "/"
// //If not Admin => return "/"
// //If not Admin => return "/"
// //If not Admin => return "/"



"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CarAdminRequestsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkAdminRole = async () => {
      const jwtToken = localStorage.getItem("jwt");

      if (!jwtToken) {
        console.log("User is not logged in");
        router.push("/");
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
          if (response.status === 401) {
            localStorage.clear();
            router.push("/");
          }
          return;
        }

        const data = await response.json();

        if (data && data.roles && data.roles.includes("Admin")) {
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        router.push("/");
      }
    };

    checkAdminRole();
  }, [router]);

  useEffect(() => {
    const fetchCarRequests = async () => {
      try {
        const response = await fetch("https://localhost:5022/api/Admin/GetAllEnquieries", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const data = await response.json();
        if (data.success) {
          setCars(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Failed to fetch car requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchCarRequests();
  }, []);

  const approveRequest = async (id) => {
    const sellingPrice = prompt("Enter selling price:");
    if (!sellingPrice || isNaN(sellingPrice)) {
      alert("Invalid selling price.");
      return;
    }
  
    const response = await fetch(`https://localhost:5022/api/Admin/ApproveRequest/${id}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sellingPrice: parseFloat(sellingPrice) })
    });
    console.log(id);
    console.log(response);
    console.log(parseFloat(sellingPrice));
    if (response.ok) {
      alert("Request approved!");
      setCars(prevCars =>
        prevCars.map(car =>
          car.carId === id
            ? { ...car, status: "Approved", sellingPrice: parseFloat(sellingPrice) }
            : car
        )
      );
    } else {
      alert("Failed to approve request.");
    }
  };
  
  const rejectRequest = async (id) => {
    const feedback = prompt("Enter rejection reason:");
    if (!feedback) {
      alert("Feedback is required.");
      return;
    }
  
    const response = await fetch(`https://localhost:5022/api/Admin/RejectRequest/${id}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ feedback })
    });
  
    if (response.ok) {
      alert("Request rejected!");
      setCars(prevCars =>
        prevCars.map(car =>
          car.carId === id
            ? { ...car, status: "Rejected", adminFeedback: feedback }
            : car
        )
      );
    } else {
      alert("Failed to reject request.");
    }
  };

  return (
    <div className="bg-white">
      <div className="contacts-background-img">
        <div className="contacts-content">
          <h1>Админ - заявки за коли</h1>
          <div className="subtitle">Преглед и управление на заявки за продажба на коли</div>
        </div>
      </div>

      <div className="container mx-auto mt-5 px-4 max-w-5xl pb-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold mt-2 text-gray-500">
            Управлявайте заявките за продажба
          </h2>
        </div>

        {loading && <p className="text-center text-gray-600">Зареждане...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-3 gap-4 mt-4">
          {cars.map((car, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md max-w-xs max-h-min">
              <a href={`/admin/${car.carId}`}>
                <img src={car.imageUrls} alt={car.title} className="w-auto" />
              </a>
              <h3 className="mt-3 text-lg font-semibold text-gray-500">
                {car.carName}
              </h3>
              <p className="text-gray-500">Година: <b>{car.year}</b></p>
              <p className="text-gray-500">Пробег: <b>{car.mileage} км</b></p>
              <p className="text-gray-500">Скоростна кутия: <b>{car.gearboxType}</b></p>
              <p className="text-gray-500">Потребителска цена: <b>{car.priceFromUser.toLocaleString()} лв.</b></p>
              <p className="text-gray-500">Продажна цена: <b>{car.sellingPrice.toLocaleString()} лв.</b></p>
              <p className="text-gray-500">Дата на създаване: <b>{new Date(car.createdAt).toLocaleDateString()}</b></p>
              <p className="text-gray-500">
                Статус: <b>{car.status}</b>
              </p>
              {car.adminFeedback && <p className="text-gray-500">Обратна връзка: <b>{car.adminFeedback}</b></p>}

              {car.status === "В процес..." && (
                <div className="flex justify-center items-center gap-3 mt-4">
  <button
    onClick={() => approveRequest(car.carId)}
    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    Одобри
  </button>
  <button
    onClick={() => rejectRequest(car.carId)}
    className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    Отхвърли
  </button>
</div>
                
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


