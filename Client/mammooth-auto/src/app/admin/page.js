// import React from 'react';
// import Navbar from 'components/navbar';

// //THIS PAGE IS ADMIN ONLY
// //If not Admin => return "/"
// //If not Admin => return "/"
// //If not Admin => return "/"
// //If not Admin => return "/"



"use client";
import React, { useEffect, useState } from "react";

const AdminCarRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://localhost:5022/api/Admin/GetAllEnquieries", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        return response.json();
      })
      .then(data => {
        setRequests(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
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

    if (response.ok) {
      alert("Request approved!");
      setRequests(requests.map(req => req.id === id ? { ...req, status: "Approved" } : req));
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
      setRequests(requests.map(req => req.id === id ? { ...req, status: "Rejected" } : req));
    } else {
      alert("Failed to reject request.");
    }
  };

  if (loading) return <p>Loading car requests...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>

      <div className='background-img'>
        <div className='home-content'>
          <div className='moto'>ADMIN</div>
          <h1>Mammoth Auto</h1>
          <div className='subtitle'>ADMIN PANEL</div>
        </div>
      </div>
      <div>
        <h2>Заявки от потребители</h2>
      </div>

      <h2>Car Sale Requests</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Car</th>
            <th>Requested Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((request) => (
              <React.Fragment key={request.id}>
                <tr>
                  <td>{request.id}</td>
                  <td>{request.user?.fullName || "N/A"}</td>
                  <td>{request.car?.make} {request.car?.model} ({request.car?.year})</td>
                  <td>${request.requestedPrice}</td>
                  <td>{request.status}</td>
                </tr>
                {request.status === "Pending" && (
                  <tr key={`actions-${request.id}`}>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      <button onClick={() => approveRequest(request.id)} style={{ marginRight: "10px", padding: "5px 10px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer" }}>
                        ✅ Approve
                      </button>
                      <button onClick={() => rejectRequest(request.id)} style={{ padding: "5px 10px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}>
                        ❌ Reject
                      </button>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>No car sale requests available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCarRequests;

