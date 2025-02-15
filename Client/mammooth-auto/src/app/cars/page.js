"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CarAdsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCarAds = async () => {
      try {
        const response = await axios.get("https://localhost:5022/api/CarAd/GetAllCarPreviews");

        if (response.data.success) {
          setCars(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError("Failed to fetch car ads.");
      } finally {
        setLoading(false);
      }
    };

    fetchCarAds();
  }, []);

  return (
    <div className="bg-white">
      <div className="contacts-background-img">
        <div className="contacts-content">
          <h1>Обяви за коли</h1>
          <div className="subtitle">Поддържаме седем социални мрежи и имаме</div>
          <div className="subtitle">офис с паркоместа</div>
        </div>
      </div>

      <div className="container mx-auto mt-5 px-4">
        <div className="flex flex-col items-center text-center">
          <div className="uppercase text-gray-600 font-bold">
            Какво имаме налично
          </div>
          <h2 className="text-2xl font-semibold mt-2 text-gray-500">
            Избери от нашите автомобили
          </h2>
        </div>

        {/* Loading and Error Handling */}
        {loading && <p className="text-center text-gray-600">Зареждане...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Car Listings */}
        <div className="container mx-auto mt-5 px-4 max-w-5xl pb-8">
          <div className="grid grid-cols-3 gap-4 mt-4">
            {cars.map((car, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md h-full max-w-xs flex flex-col">
                <a href={`/cars/${car.carId}`}>
                  <img src={car.imageUrls} alt={car.title} className="w-auto" />
                </a>
                <h3 className="mt-3 text-lg font-semibold text-gray-500">
                  {car.carName}
                </h3>
                <p className="text-gray-500">Година: <b>{car.year}</b></p>
                <p className="text-gray-500">Пробег: <b>{car.mileage} км</b></p>
                <p className="text-gray-500 mb-4">Скоростна кутия: <b>{car.gearboxType}</b></p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-500">
                    {car.sellingPrice.toLocaleString()} лв.
                  </span>
                  <a
                    href={`/cars/${car.carId}`}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                    Разгледай
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
