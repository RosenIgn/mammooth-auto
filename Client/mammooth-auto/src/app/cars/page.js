import React from "react";

export default function Contacts() {
  const cars = [
    {
      title: "Range Rover Sport HSE 3.0 SDV6",
      link: "https://7cars.bg/cars/range-rover-sport-hse-3-0-sdv6/",
      images: [
        "https://7cars.bg/wp-content/uploads/2025/02/1-copy-5-1024x683.jpg",
        "https://7cars.bg/wp-content/uploads/2025/02/9-copy-5-1024x683.jpg",
      ],
      mileage: "195075 km",
      year: "2016",
      transmission: "Автоматична",
      price: "51,990.00 лв.",
    },
    {
      title: "Mercedes-Benz E300 CDI Avantgarde",
      link: "https://7cars.bg/cars/mercedes-benz-e300-cdi-avantgarde/",
      images: [
        "https://7cars.bg/wp-content/uploads/2025/02/1-copy-3-1024x683.jpg",
        "https://7cars.bg/wp-content/uploads/2025/02/9-copy-3-1024x683.jpg",
      ],
      mileage: "285,432 km",
      year: "2009",
      transmission: "Автоматична",
      price: "13,990.00 лв.",
    },
    {
      title: "BMW 420d xDrive*HeadUp*DISTRONIC*",
      link: "https://7cars.bg/cars/bmw-420d-xdriveheadupdistronic/",
      images: [
        "https://7cars.bg/wp-content/uploads/2025/02/1-copy-2-1024x683.jpg",
        "https://7cars.bg/wp-content/uploads/2025/02/9-copy-2-1024x683.jpg",
      ],
      mileage: "174000 km",
      year: "2014",
      transmission: "Автоматична",
      price: "29,990.00 лв.",
    },
    {
      title: "BMW 420d xDrive*HeadUp*DISTRONIC*",
      link: "https://7cars.bg/cars/bmw-420d-xdriveheadupdistronic/",
      images: [
        "https://7cars.bg/wp-content/uploads/2025/02/1-copy-2-1024x683.jpg",
        "https://7cars.bg/wp-content/uploads/2025/02/9-copy-2-1024x683.jpg",
      ],
      mileage: "174000 km",
      year: "2014",
      transmission: "Автоматична",
      price: "29,990.00 лв.",
    },
    {
      title: "BMW 420d xDrive*HeadUp*DISTRONIC*",
      link: "https://7cars.bg/cars/bmw-420d-xdriveheadupdistronic/",
      images: [
        "https://7cars.bg/wp-content/uploads/2025/02/1-copy-2-1024x683.jpg",
        "https://7cars.bg/wp-content/uploads/2025/02/9-copy-2-1024x683.jpg",
      ],
      mileage: "174000 km",
      year: "2014",
      transmission: "Автоматична",
      price: "29,990.00 лв.",
    },
    {
      title: "BMW 420d xDrive*HeadUp*DISTRONIC*",
      link: "https://7cars.bg/cars/bmw-420d-xdriveheadupdistronic/",
      images: [
        "https://7cars.bg/wp-content/uploads/2025/02/1-copy-2-1024x683.jpg",
        "https://7cars.bg/wp-content/uploads/2025/02/9-copy-2-1024x683.jpg",
      ],
      mileage: "174000 km",
      year: "2014",
      transmission: "Автоматична",
      price: "29,990.00 лв.",
    },
  ];
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
      <div className="container mx-auto mt-5 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div key={index} className="flex flex-col border p-4 rounded-lg shadow-md">
            <a href={car.link} className="block">
              <img src={car.images[0]} alt={car.title} className="w-full rounded-md" />
            </a>
            <h3 className="mt-3 text-lg font-semibold text-gray-500">
              <a href={car.link}>{car.title}</a>
            </h3>
            <p className="text-gray-500">{car.mileage}</p>
            <p className="text-gray-500">Година: {car.year}</p>
            <p className="text-gray-500">Скоростна кутия: {car.transmission}</p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-xl font-bold text-gray-500">{car.price}</span>
              <a href={car.link} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
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