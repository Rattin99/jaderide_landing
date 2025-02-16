"use client";
import Script from "next/script";
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  businessName: z.string().min(1, "Business Name is required"),
  businessType: z.string().min(1, "Business Type is required"),
  locations: z.string().min(1, "Number of locations is required"),
  address: z.string().min(1, "Address is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone number is required"),
});

export default function Hero() {
  const [address, setAddress] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const handleChange = (value) => {
    setAddress(value);
    setValue("address", value);
  };

  const handleSelect = (value) => {
    setAddress(value);
    setValue("address", value);
    geocodeByAddress(value)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  const formSubmitHandler = async (formData) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        console.log("Email sent successfully!");
      } else {
        console.error("Email sending failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />
      <div
        className="bg-gray-100 py-20"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-xl py-2 font-bold text-black mb-6">
                Tap into a new revenue stream with JMD, the perfect pairing for
                your business.
              </h1>
              <form
                className="pb-12"
                onSubmit={handleSubmit(formSubmitHandler)}
              >
                <div className="space-y-4 md:space-y-8">
                  <input
                    {...register("businessName")}
                    placeholder="Business Name"
                    className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 w-full"
                  />
                  {errors.businessName && (
                    <p className="text-red-500">
                      {errors.businessName.message}
                    </p>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <select
                      {...register("businessType")}
                      className="p-3 border border-gray-300 bg-white rounded-md text-gray-700"
                    >
                      <option value="">Select Business Type</option>
                      <option value="Restaurant or Coffee shop">
                        Restaurant or Coffee shop
                      </option>
                      <option value="Grocery Store">Grocery Store</option>
                      <option value="Retail Store">Retail Store</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Flower Shop">Flower Shop</option>
                      <option value="Pet Store">Pet Store</option>
                      <option value="Bakery or Pastry shop">
                        Bakery or Pastry shop
                      </option>
                      <option value="Courier and Logistics Services">
                        Courier and Logistics Services
                      </option>
                      <option value="Bookstore">Bookstore</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.businessType && (
                      <p className="text-red-500">
                        {errors.businessType.message}
                      </p>
                    )}

                    <select
                      {...register("locations")}
                      className="p-3 border border-gray-300 bg-white rounded-md text-gray-700"
                    >
                      <option value="">Number of locations</option>
                      <option value="1-5">1-5</option>
                      <option value="6-10">6-10</option>
                      <option value="11-24">11-24</option>
                      <option value="25-50">25-50</option>
                      <option value="50+">Over 50</option>
                    </select>
                    {errors.locations && (
                      <p className="text-red-500">{errors.locations.message}</p>
                    )}
                  </div>

                  <PlacesAutocomplete
                    value={address}
                    onChange={handleChange}
                    onSelect={handleSelect}
                  >
                    {({
                      getInputProps,
                      suggestions,
                      getSuggestionItemProps,
                      loading,
                    }) => (
                      <div>
                        <input
                          {...getInputProps({
                            placeholder: "123 Street, City, Province, Zip Code",
                            className:
                              "p-3 rounded-md placeholder-gray-400 text-gray-700 w-full focus:outline-none border focus:ring-2 focus:ring-black", // Removed border
                          })}
                        />
                        <div className="bg-white rounded-md mt-1 shadow-lg">
                          {suggestions.map((suggestion) => {
                            const suggestionStyle = suggestion.active
                              ? "bg-gray-200 cursor-pointer p-2"
                              : "bg-white cursor-pointer p-2";
                            return (
                              <div
                                key={suggestion.placeId}
                                {...getSuggestionItemProps(suggestion, {
                                  className: suggestionStyle,
                                })}
                              >
                                {suggestion.description}
                              </div>
                            );
                          })}
                        </div>
                        {errors.address && (
                          <p className="text-red-500">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                    )}
                  </PlacesAutocomplete>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <input
                      {...register("firstName")}
                      placeholder="First Name"
                      className="p-3 border border-gray-300 rounded-md"
                    />
                    {errors.firstName && (
                      <p className="text-red-500">{errors.firstName.message}</p>
                    )}
                    <input
                      {...register("lastName")}
                      placeholder="Last Name"
                      className="p-3 border border-gray-300 rounded-md"
                    />
                    {errors.lastName && (
                      <p className="text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email"
                      className="p-3 border border-gray-300 rounded-md"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+1 0020"
                      className="p-3 border border-gray-300 rounded-md"
                    />
                    {errors.phone && (
                      <p className="text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-1/2 mx-auto mt-10 flex justify-center bg-blue-800 text-white p-3 rounded-md hover:bg-blue-700"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
