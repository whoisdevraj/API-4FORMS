import React, { useState } from "react";
import { requestApiKey } from "../utils/api";
import "./ApiRequestForm.css";

function ApiRequestForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      // Call the requestApiKey function and set success message
      const successMessage = await requestApiKey(email);
      setMessage(
        successMessage || "API key sent successfully. Check your email."
      );
    } catch (error) {
      // Set error message returned from backend
      setMessage(
        error.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="api-request-form">
      <h2>Request Your API Key</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter Your Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your.email@example.com"
        />
        <button type="submit">Get API Key</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ApiRequestForm;
