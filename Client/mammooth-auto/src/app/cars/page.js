"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CarAdsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

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
        <div className="container mx-auto mt-5 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars.map((car, index) => (
              <div key={index} className="flex flex-col border p-4 rounded-lg shadow-md">
                <a href="#" className="block">
                  <img src={car.image || "https://via.placeholder.com/300"} alt={car.carName} className="w-full rounded-md" />
                </a>
                <h3 className="mt-3 text-lg font-semibold text-gray-500">
                  {car.carName}
                </h3>
                <p className="text-gray-500">{car.mileage} km</p>
                <p className="text-gray-500">Година: {car.year}</p>
                <p className="text-gray-500">Скоростна кутия: {car.gearboxType}</p>
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
