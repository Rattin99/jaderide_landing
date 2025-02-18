"use client";
import Script from "next/script";
import React, { useState, useEffect, useContext } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LanguageContext } from "@/lib/LanguageContext";
import { translations } from "@/public/language/language";

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

const renderSuggestion = (suggestion, getSuggestionItemProps) => {
  const { placeId } = suggestion;
  const suggestionProps = getSuggestionItemProps(suggestion);
  const { key, ...restProps } = suggestionProps;
  return (
    <div
      key={placeId}
      {...restProps}
      className={
        suggestion.active
          ? "bg-gray-200 cursor-pointer p-2"
          : "bg-white cursor-pointer p-2"
      }
    >
      {suggestion.description}
    </div>
  );
};

export default function Hero() {
  const [address, setAddress] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        },
      );
    }
  }, []);

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

  const searchOptions = {
    location: userLocation
      ? new google.maps.LatLng(userLocation.lat, userLocation.lng)
      : null,
    radius: 50000,
    types: ["address"],
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
        setSubmittedName(formData.firstName);
        setShowWelcomeModal(true);
        reset();
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
      <Dialog open={showWelcomeModal} onOpenChange={setShowWelcomeModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-blue-600 flex w-full justify-center items-center">
              {t.welcomeModal.title}
            </DialogTitle>
            <DialogDescription>{t.welcomeModal.description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={() => setShowWelcomeModal(false)}
              className="bg-blue-800 hover:bg-blue-700"
            >
              {t.welcomeModal.closeButton}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="py-20 relative">
        <img
          src="hero.jpg"
          className="absolute top-0 object-cover w-full max-h-4/5 md:max-h-[720px] z-0"
        />
        <div className="container relative w-full mx-auto px-4 z-10">
          <div className="flex flex-col w-full mt-28 lg:flex-row items-center lg:items-end lg:justify-end">
            <div className="lg:w-1/2"></div>
            <div className="lg:w-2/5 bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-xl py-2 text-gray-700 font-semibold mb-6">
                {t.heroSection.title}
              </h1>
              <form
                className="pb-12"
                onSubmit={handleSubmit(formSubmitHandler)}
              >
                <div className="space-y-4 md:space-y-8">
                  <input
                    {...register("businessName")}
                    placeholder={t.form.businessNamePlaceholder}
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
                      <option value="">{t.form.businessTypePlaceholder}</option>
                      <option value="Restaurant or Coffee shop">
                        {t.form.businessTypes.restaurant}
                      </option>
                      <option value="Grocery Store">
                        {t.form.businessTypes.grocery}
                      </option>
                      <option value="Retail Store">
                        {t.form.businessTypes.retail}
                      </option>
                      <option value="Pharmacy">
                        {t.form.businessTypes.pharmacy}
                      </option>
                      <option value="Flower Shop">
                        {t.form.businessTypes.flowerShop}
                      </option>
                      <option value="Pet Store">
                        {t.form.businessTypes.petStore}
                      </option>
                      <option value="Bakery or Pastry shop">
                        {t.form.businessTypes.bakery}
                      </option>
                      <option value="Courier and Logistics Services">
                        {t.form.businessTypes.courier}
                      </option>
                      <option value="Bookstore">
                        {t.form.businessTypes.bookstore}
                      </option>
                      <option value="Other">
                        {t.form.businessTypes.other}
                      </option>
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
                      <option value="">{t.form.locationsPlaceholder}</option>
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
                    searchOptions={searchOptions}
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
                            placeholder: t.form.addressPlaceholder,
                            className:
                              "p-3 rounded-md placeholder-gray-400 text-gray-700 w-full focus:outline-none border focus:ring-2 focus:ring-black",
                          })}
                        />
                        <div className="bg-white rounded-md mt-1 shadow-lg">
                          {loading && (
                            <div className="p-2 text-gray-500">
                              {t.form.loading}
                            </div>
                          )}
                          {suggestions.map((suggestion) =>
                            renderSuggestion(
                              suggestion,
                              getSuggestionItemProps,
                            ),
                          )}
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
                      placeholder={t.form.firstNamePlaceholder}
                      className="p-3 border border-gray-300 rounded-md"
                    />
                    {errors.firstName && (
                      <p className="text-red-500">{errors.firstName.message}</p>
                    )}
                    <input
                      {...register("lastName")}
                      placeholder={t.form.lastNamePlaceholder}
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
                      placeholder={t.form.emailPlaceholder}
                      className="p-3 border border-gray-300 rounded-md"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                    <input
                      {...register("phone")}
                      type={t.form.phonePlaceholder}
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
                  {t.form.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
