"use client";
import React, { useState } from "react";
import Image from 'next/image';

type PopupExample = {
  mounted: boolean;
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function PopupExample({ mounted,setMounted }: PopupExample) {
  const [isOpen, setIsOpen] = useState(true);

  const [formData, setFormData] = useState({ f_name:'',l_name: '',phone:'', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwGlUwMyQlWuSElhZginKTAgcofRXyscDz--6hzwPFFap63l58YYyB_7TakNnc8frl6Cg/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      setSubmitted(true);
      setFormData({ f_name: '',l_name:'',phone:'', email: '', message: '' });
    } catch (err) {
      console.error('Submit failed:', err);
    } finally {
      setLoading(false);
    }
  };
 

  return (
    <>
      {/* Button can stay or be removed */}
      {isOpen && (
        <div
          className="popup"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="popup-content"
            style={{
              position: "relative",
              background: "white",
              padding: 20,
              borderRadius: 8,
              maxWidth: 600,
              width: "90%",
              textAlign: "center",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: 8,
                right: 12,
                fontSize: 24,
                border: "none",
                background: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ×
            </button>

            {/* Image with onLoad triggers popup opening */}
            <Image
              src="https://drahomes.in/images/newSpot-bg.jpg"
              alt="Luxury Watch"
              style={{ maxWidth: "100%", height: "auto" }}
              onLoad={() => setIsOpen(true)} 
            />

            <p>
              WE <span style={{ color: "orange" }}>❤️</span> LUXURY.
            </p>
            <h2>TIMELESS LUXURY HOMES delivered ON TIME.</h2>
          </div>
        </div>
      )}
    { mounted && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        <button
         onClick={(e) => {
            if (e.target === e.currentTarget) setMounted(false);
          }}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Enquire Now</h2>

        {/* Enquiry Form */}
         {submitted ? (
          <p className="text-green-600">Thank you! Your enquiry has been submitted.</p>
        ) :(
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="f_name"
              onChange={handleChange}
              value={formData.f_name}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="l_name"
              onChange={handleChange}
              value={formData.l_name}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            onChange={handleChange}
            name="message"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >{formData.message}</textarea>

          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-full font-semibold"
          >
           {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      )}
      </div>
    </div>
    )}
    </>
  );
}
