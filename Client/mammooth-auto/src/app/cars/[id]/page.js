
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CarDetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`https://localhost:5022/api/CarAd/GetCarInfoById/${id}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch car details.");
        }

        const data = await response.json();
        setCar(data.data);
        console.log(data);
      } catch (err) {
        setError("Failed to fetch car details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCarDetails();
  }, [id]);

  if (loading) return <p className="text-center text-gray-600">Зареждане...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!car) return <p className="text-center text-gray-600">Няма информация за тази кола.</p>;

  return (
    <div className="container mx-auto mt-5 px-4">
      <h2 className="text-2xl font-semibold text-gray-500">Детайли за колата</h2>
      <div className="border p-4 rounded-lg shadow-md">

        {/* TUKA NQKUDE TRQQ IMA ZA SNIMKI */}
        {/* TUKA NQKUDE TRQQ IMA ZA SNIMKI */}
        {/* TUKA NQKUDE TRQQ IMA ZA SNIMKI */}

        <h3 className="text-lg font-semibold text-gray-500">{car.carName}</h3>
        <p className="text-gray-500">Година: {car.year}</p>
        <p className="text-gray-500">Пробег: {car.mileage} км</p>
        <p className="text-gray-500">Скоростна кутия: {car.gearboxType}</p>
        <p className="text-gray-500">Цвят: {car.color}</p>
        <p className="text-gray-500">VIN: {car.vin}</p>
        <p className="text-gray-500">Описание: {car.description}</p>

        <p className="text-gray-500">
          Продажна цена: {car.sellingPrice ? car.sellingPrice.toLocaleString() : "Няма информация за"} лв.
        </p>

        <p className="text-gray-500">Дата на създаване: {new Date(car.createdAt).toLocaleDateString()}</p>

        {/* TUKA NQKUDE TRQQ IMA USER, KOITO E PUSNAL OBQVATA */}
        {/* TUKA NQKUDE TRQQ IMA USER, KOITO E PUSNAL OBQVATA */}
        {/* TUKA NQKUDE TRQQ IMA USER, KOITO E PUSNAL OBQVATA */}

      </div>
    </div>
  );
}
