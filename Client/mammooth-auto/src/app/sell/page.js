"use client";
import { useState } from "react";

export default function CarListingForm() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: 0,
    mileage: 0,
    gearboxType: "",
    color: "",
    vin: "",
    description: "",
    priceFromUser: 0,
    imageUrls: [],
  });

  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name === "images" && files.length > 0) {
      setUploading(true);
      const uploadedUrls = await uploadImages(Array.from(files));
      setUploading(false);
      setFormData((prevData) => ({
        ...prevData,
        imageUrls: [...prevData.imageUrls, ...uploadedUrls],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "imageUrls") {
        newErrors[key] = `${key} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const uploadImages = async (images) => {
    const uploadedUrls = [];
    
    for (let image of images) {
      const formDataImg = new FormData();
      formDataImg.append("file", image);
      formDataImg.append("upload_preset", "ml_default");

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dgesymslv/image/upload", {
          method: "POST",
          body: formDataImg,
        });

        const result = await response.json();
        if (result.secure_url) {
          uploadedUrls.push(result.secure_url);
        } else {
          console.error("Error uploading image:", result);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    return uploadedUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      try {
        const response = await fetch("https://localhost:5022/api/CarAd/Create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const responseData = await response.json();

        if (responseData.success) {
          console.log("Car listing submitted successfully!", formData);
          window.location.href = "/";
        } else {
          console.error("Error submitting car listing");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div>
    <div className="sell-background-img">
      <div className="sell-content">
        <h1>Продай автомобила си</h1>
        <div className="subtitle">Продай личния си автомобил чрез нас</div>
      </div>
    </div>

    <div className="form-background-img">
      <div className="form-info">
        <h1>Бърз и лесен начин да продадете вашият автомобил</h1>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none"><circle cx="14.5" cy="14.5" r="14.5" fill="#222222"></circle><path d="M10.0386 12.9177C9.44087 12.3441 8.49132 12.3637 7.91772 12.9614C7.34412 13.5591 7.36368 14.5087 7.96141 15.0823L10.0386 12.9177ZM13.0386 15.7966L10.0386 12.9177L7.96141 15.0823L10.9614 17.9612L13.0386 15.7966Z" fill="#E2C87B"></path><path d="M21.0599 12.0614C21.6461 11.4761 21.6468 10.5263 21.0614 9.94012C20.4761 9.3539 19.5263 9.35321 18.9401 9.93856L21.0599 12.0614ZM18.9401 9.93856L10.9284 17.9386L13.0482 20.0614L21.0599 12.0614L18.9401 9.93856Z" fill="#E2C87B"></path></svg>
            Опиши своят автомобил чрез формата
          </li>

          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none"><circle cx="14.5" cy="14.5" r="14.5" fill="#222222"></circle><path d="M10.0386 12.9177C9.44087 12.3441 8.49132 12.3637 7.91772 12.9614C7.34412 13.5591 7.36368 14.5087 7.96141 15.0823L10.0386 12.9177ZM13.0386 15.7966L10.0386 12.9177L7.96141 15.0823L10.9614 17.9612L13.0386 15.7966Z" fill="#E2C87B"></path><path d="M21.0599 12.0614C21.6461 11.4761 21.6468 10.5263 21.0614 9.94012C20.4761 9.3539 19.5263 9.35321 18.9401 9.93856L21.0599 12.0614ZM18.9401 9.93856L10.9284 17.9386L13.0482 20.0614L21.0599 12.0614L18.9401 9.93856Z" fill="#E2C87B"></path></svg>
            Изчакай одобрение на обявата от наш работник
          </li>
          
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none"><circle cx="14.5" cy="14.5" r="14.5" fill="#222222"></circle><path d="M10.0386 12.9177C9.44087 12.3441 8.49132 12.3637 7.91772 12.9614C7.34412 13.5591 7.36368 14.5087 7.96141 15.0823L10.0386 12.9177ZM13.0386 15.7966L10.0386 12.9177L7.96141 15.0823L10.9614 17.9612L13.0386 15.7966Z" fill="#E2C87B"></path><path d="M21.0599 12.0614C21.6461 11.4761 21.6468 10.5263 21.0614 9.94012C20.4761 9.3539 19.5263 9.35321 18.9401 9.93856L21.0599 12.0614ZM18.9401 9.93856L10.9284 17.9386L13.0482 20.0614L21.0599 12.0614L18.9401 9.93856Z" fill="#E2C87B"></path></svg>
            След одобряване ние ще се погрижим всякакви проблеми да бъдат отстранени
          </li>
          
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none"><circle cx="14.5" cy="14.5" r="14.5" fill="#222222"></circle><path d="M10.0386 12.9177C9.44087 12.3441 8.49132 12.3637 7.91772 12.9614C7.34412 13.5591 7.36368 14.5087 7.96141 15.0823L10.0386 12.9177ZM13.0386 15.7966L10.0386 12.9177L7.96141 15.0823L10.9614 17.9612L13.0386 15.7966Z" fill="#E2C87B"></path><path d="M21.0599 12.0614C21.6461 11.4761 21.6468 10.5263 21.0614 9.94012C20.4761 9.3539 19.5263 9.35321 18.9401 9.93856L21.0599 12.0614ZM18.9401 9.93856L10.9284 17.9386L13.0482 20.0614L21.0599 12.0614L18.9401 9.93856Z" fill="#E2C87B"></path></svg>
            Довършваме обявата като добавяме лека надценка на цената за труда по колата
          </li>
        </ul>
      </div>

      <div className="form">
        <h1>Опиши ни автомобила си:</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="brand">Марка:</label>
            <input 
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
            {errors.brand && <p className="text-red-500 text-sm">{errors.brand}</p>}
          </div>

          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="model">Модел:</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="textbox"
            />
            {errors.model && <p className="text-red-500 text-sm">{errors.model}</p>}
          </div>
          
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="year">Година на производство:</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="textbox"
            />
            {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
          </div>
          
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="mileage">Километри:</label>
            <input     
              type="number"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className="textbox"
            />
            {errors.mileage && <p className="text-red-500 text-sm">{errors.mileage}</p>}
          </div>
          
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="gearbox-type">Тип скоростна кутия:</label>
            <input
              type="text"
              name="gearboxType"
              value={formData.gearboxType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.gearboxType && <p className="text-red-500 text-sm">{errors.gearboxType}</p>}
          </div>
          
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="color">Цвят:</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}
          </div>
          
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="vin">VIN номер:</label>
            <input
              type="text"
              name="vin"
              value={formData.vin}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.vin && <p className="text-red-500 text-sm">{errors.vin}</p>}
          </div>
          
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="description">Описание:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="selling-price">Цена:</label>
            <input
              type="number"
              name="priceFromUser"
              value={formData.priceFromUser}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.priceFromUser && <p className="text-red-500 text-sm">{errors.priceFromUser}</p>}
          </div>

          <div className="flex gap-2 items-center justify-between">
            <input
              type="file"
              name="images"
              multiple
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {uploading && <p className="text-blue-500 text-sm">Качване...</p>}
          </div>        
          
          <button type="submit" className="w-full p-1 bg-blue-500 text-white rounded-md">
              Submit
          </button>
        </form>
      </div>
    </div>
  </div>    
  );
}