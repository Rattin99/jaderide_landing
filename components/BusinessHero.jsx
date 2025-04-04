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

export default function BusinessHero({ imgSrc }) {
  const [address, setAddress] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [countryCode, setCountryCode] = useState("+1");

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

  const onSubmit = async (data) => {
    try {
      // Destructure country code and phone, then create full phone number
      const { countryCode, phone, ...otherData } = data;

      // Remove any non-digit characters from phone number
      const cleanedPhone = phone.replace(/\D/g, "");

      // Merge country code and cleaned phone number
      const fullPhoneNumber = `${countryCode}${cleanedPhone}`;

      // Create a new data object with merged phone number
      const submissionData = {
        ...otherData,
        phone: fullPhoneNumber,
      };

      const response = await fetch(
        "https://us-central1-delivexpress-5aa93.cloudfunctions.net/handleFormSubmission",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        },
      );

      if (!response.ok) {
        console.log("response", response);
        throw new Error("Failed to submit form");
      }
      setShowWelcomeModal(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
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
              onClick={() => {
                reset();
                setAddress("");
                setShowWelcomeModal(false);
              }}
              className="bg-blue-800 hover:bg-blue-700"
            >
              {t.welcomeModal.closeButton}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="relative min-h-[650px] mb-16">
        <img
          src={imgSrc}
          className="absolute top-0 md:left-[20%] object-cover md:w-[800px] h-[681px] z-0"
          alt="Chef chopping vegetables"
        />

        <div className="container relative mx-auto px-10 pt-6 pb-20 z-10">
          <div className="flex flex-col w-full mt-6 lg:flex-row lg:items-start lg:justify-end">
            <div className="lg:w-1/2"></div>

            <div className="w-full lg:w-5/12 bg-white p-6 md:p-8 rounded-md shadow-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Tap into a new revenue stream with JMD, the perfect pairing for
                your business.
              </h2>

              <form
                className="pb-4"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
              >
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <input
                      name="businessName"
                      {...register("businessName")}
                      placeholder="Business Name"
                      className="p-3 border border-gray-300 rounded-md placeholder-gray-400 text-gray-700 w-full"
                    />
                    {errors.businessName && (
                      <p className="text-red-500 text-sm mt-1">
                        {language === "fr"
                          ? "Nom d'entreprise requis"
                          : errors.businessName.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <select
                        name="businessType"
                        {...register("businessType")}
                        className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 w-full appearance-none"
                      >
                        <option value="">Select Business Type</option>
                        {/* Options as in your original code */}
                      </select>
                      {errors.businessType && (
                        <p className="text-red-500 text-sm mt-1">
                          {language === "fr"
                            ? "Type d'entreprise requis"
                            : errors.businessType.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <select
                        name="locations"
                        {...register("locations")}
                        className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 w-full appearance-none"
                      >
                        <option value="">Number of locations</option>
                        {/* Options as in your original code */}
                      </select>
                      {errors.locations && (
                        <p className="text-red-500 text-sm mt-1">
                          {language === "fr"
                            ? "Nombre de localisations requis"
                            : errors.locations.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col">
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
                        <div className="flex flex-col">
                          <input
                            name="address"
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
                            <p className="text-red-500 text-sm mt-1">
                              {language === "fr"
                                ? "Adresse requise"
                                : errors.address.message}
                            </p>
                          )}
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <input
                        name="firstName"
                        {...register("firstName")}
                        placeholder="First Name"
                        className="p-3 border border-gray-300 rounded-md w-full"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {language === "fr"
                            ? "Prénom requis"
                            : errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <input
                        name="lastName"
                        {...register("lastName")}
                        placeholder="Last Name"
                        className="p-3 border border-gray-300 rounded-md w-full"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {language === "fr"
                            ? "Nom de famille requis"
                            : errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <input
                      name="email"
                      {...register("email")}
                      type="email"
                      placeholder="Email"
                      className="p-3 border border-gray-300 rounded-md w-full"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {language === "fr"
                          ? "Email invalide"
                          : errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-[80px,1fr] gap-3">
                    <select
                      name="countryCode"
                      {...register("countryCode")}
                      className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 w-full appearance-none"
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+1">CA</option>
                      {/* Other country codes as in your original code */}
                    </select>

                    <input
                      name="phone"
                      {...register("phone")}
                      type="tel"
                      placeholder="+1"
                      className="p-3 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {language === "fr"
                        ? "Numéro de téléphone invalide"
                        : errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-full md:w-3/4 bg-blue-800 text-white py-3 rounded-md hover:bg-blue-700 font-medium"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
