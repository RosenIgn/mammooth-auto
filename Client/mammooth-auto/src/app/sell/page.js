"use client"
import { useState } from "react";

export default function CarListingForm() {
  // Initialize form state with empty values
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
  });

  // Error state for validation
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
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
            console.log(responseData)
            if (responseData.success) {
              console.log("Car listing submitted successfully!");
              window.location.href = "/";
            } else {
              console.error("Error submitting car listing");
            }
        } catch (error) {
        console.error("Error:", error);
        }        
      // console.log(formData); // Proceed with form data (e.g., send it to an API)
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Car Listing Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.brand && <p className="text-red-500 text-sm">{errors.brand}</p>}
        </div>

        {/* Model */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.model && <p className="text-red-500 text-sm">{errors.model}</p>}
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Year</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
        </div>

        {/* Mileage */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Mileage</label>
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.mileage && <p className="text-red-500 text-sm">{errors.mileage}</p>}
        </div>

        {/* Gearbox Type */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Gearbox Type</label>
          <input
            type="text"
            name="gearboxType"
            value={formData.gearboxType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.gearboxType && <p className="text-red-500 text-sm">{errors.gearboxType}</p>}
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}
        </div>

        {/* VIN */}
        <div>
          <label className="block text-sm font-medium text-gray-900">VIN</label>
          <input
            type="text"
            name="vin"
            value={formData.vin}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.vin && <p className="text-red-500 text-sm">{errors.vin}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Selling Price */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Selling Pricee</label>
          <input
            type="number"
            name="priceFromUser"
            value={formData.priceFromUser}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.priceFromUser && <p className="text-red-500 text-sm">{errors.priceFromUser}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
