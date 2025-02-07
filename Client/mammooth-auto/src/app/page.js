"use client";
import { useState } from "react";

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black p-4 text-white flex items-center">
        <h1 className="text-2xl font-bold mr-10">Mammoth Auto</h1>
        <ul className="flex space-x-16">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Cars</a></li>
          <li><a href="#" className="hover:underline">Sell your car</a></li>
          <li><a href="#" className="hover:underline">Reviews</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      
      {/* Home Content */}
      <div className="p-6 text-center">
         <p className="text-xl font-semibold italic mb-4">We won't let ICEs go extinct like mammoths did.</p>
        <h1 className="text-4xl font-bold mb-6">Welcome to Mammoth Auto</h1>
        <p className="text-lg mb-6">Find your dream car with us</p>
      </div>
    </div>
  );
}