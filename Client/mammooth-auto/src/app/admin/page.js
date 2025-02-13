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
          car.id === id
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
          car.id === id
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

      <div className="container mx-auto mt-5 px-4">
        <div className="flex flex-col items-center text-center">
          <div className="uppercase text-gray-600 font-bold">
            Админ панел - Заявки за коли
          </div>
          <h2 className="text-2xl font-semibold mt-2 text-gray-500">
            Управлявайте заявките за продажба
          </h2>
        </div>

        {loading && <p className="text-center text-gray-600">Зареждане...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cars.map((car, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <h3 className="mt-3 text-lg font-semibold text-gray-500">
                {car.carName}
              </h3>
              <p className="text-gray-500">Година: {car.year}</p>
              <p className="text-gray-500">Пробег: {car.mileage} км</p>
              <p className="text-gray-500">Скоростна кутия: {car.gearboxType}</p>
              <p className="text-gray-500">Потребителска цена: {car.priceFromUser.toLocaleString()} лв.</p>
              <p className="text-gray-500">Предложена продажна цена: {car.sellingPrice.toLocaleString()} лв.</p>
              <p className={`font-bold ${car.status === "Pending" ? "text-yellow-500" : car.status === "Approved" ? "text-green-500" : "text-red-500"}`}>
                Статус: {car.status}
              </p>
              {car.adminFeedback && <p className="text-gray-500">Обратна връзка: {car.adminFeedback}</p>}
              <p className="text-gray-500">Дата на създаване: {new Date(car.createdAt).toLocaleDateString()}</p>

              {car.status === "Pending" && (
                <div className="mt-4 flex justify-center space-x-4">
                  <button
                    onClick={() => approveRequest(car.carId)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    ✅ Одобри
                  </button>
                  <button
                    onClick={() => rejectRequest(car.carId)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    ❌ Отхвърли
                  </button>
                </div>
              )}
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={`/admin/${car.carId}`}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                  Разгледай
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


