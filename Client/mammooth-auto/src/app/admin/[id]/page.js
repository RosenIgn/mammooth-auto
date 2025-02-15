// //THIS PAGE IS ADMIN ONLY
// //If not Admin => return "/"
// //If not Admin => return "/"
// //If not Admin => return "/"
// //If not Admin => return "/"

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
        const response = await fetch(`https://localhost:5022/api/Admin/GetCarById/${id}`, {
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
    <div className="max-w-7xl mx-auto p-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src={car.imageUrls || "https://via.placeholder.com/1024x665"}
            alt={car.carName}
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-6 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
            <p className="text-xl font-bold">{car.carName}</p>
            <p className="text-lg">{car.sellingPrice ? `${car.sellingPrice.toLocaleString()} лв.` : "Цена при запитване"}</p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">{car.carName}</h1>
          <p className="text-2xl text-yellow-500 font-semibold mt-2">{car.sellingPrice ? `${car.sellingPrice.toLocaleString()} лв.` : "Цена при запитване"}</p>

          <div className="mt-4 space-y-2">
            <p className="text-gray-200"><span className="font-semibold">Година:</span> {car.year}</p>
            <p className="text-gray-200"><span className="font-semibold">Модел:</span> {car.model}</p>
            <p className="text-gray-200"><span className="font-semibold">Пробег:</span> {car.mileage} км</p>
            <p className="text-gray-200"><span className="font-semibold">Скоростна кутия:</span> {car.gearboxType}</p>
            <p className="text-gray-200"><span className="font-semibold">Външен цвят:</span> {car.color}</p>
            <p className="text-gray-200"><span className="font-semibold">VIN:</span> {car.vin}</p>
            <p className="text-gray-200"><span className="font-semibold">Статус:</span> {car.status}</p>
            <p className="text-gray-200"><span className="font-semibold">Дата на пускане:</span> {new Date(car.createdAt).toLocaleDateString()}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-white">НЕ НАМИРАШ ТОЧНИЯ АВТОМОБИЛ?</h2>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Направи поръчка</button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-white">КЪДЕ СЕ НАМИРАМЕ?</h2>
        <p className="text-gray-300 mt-2">
          ПГЕЕ "Апостол Арнаудов" ул. "Потсдам" 3 - до Битака на гр. Русе
        </p>
      </div>

      <div className="mt-8">
        <div className="mt-4 space-y-2">
          <p className="text-gray-200 whitespace-pre-line">{car.description}</p>
        </div>
      </div>
    </div>
  );
}
