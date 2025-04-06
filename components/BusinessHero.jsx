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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const countryOptions = [
  { short: "CA", name: "Canada", code: "+1" },
  { short: "UK", name: "United Kingdom", code: "+44" },
  { short: "US", name: "United States", code: "+1" },
  { short: "FR", name: "France", code: "+33" },
  { short: "DE", name: "Germany", code: "+49" },
  { short: "JP", name: "Japan", code: "+81" },
  { short: "CN", name: "China", code: "+86" },
  { short: "IN", name: "India", code: "+91" },
  { short: "AU", name: "Australia", code: "+61" },
  { short: "MX", name: "Mexico", code: "+52" },
  { short: "RU", name: "Russia", code: "+7" },
];

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

export default function Hero({ imgSrc }) {
  const [address, setAddress] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [countryCode, setCountryCode] = useState("+1");
  const [countryShort, setCountryShort] = useState("CA");

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
      const { countryCode, phone, ...otherData } = data;

      const cleanedPhone = phone.replace(/\D/g, "");

      const fullPhoneNumber = `${countryCode}${cleanedPhone}`;

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

      <div className="min-h-[650px] mb-16 relative">
        <img
          src={imgSrc}
          className="absolute top-0 md:left-[10%] object-cover md:w-[980px] h-[800px] z-0"
          alt="Chef chopping vegetables"
        />{" "}
        <div className="container relative mx-auto px-10 pt-6 pb-20 z-10">
          <div className="flex flex-col w-full mt-6 lg:flex-row lg:items-start lg:justify-end">
            <div className="lg:w-1/2"></div>
            <div className="w-full lg:w-5/12 bg-white p-6 md:p-8 rounded-md shadow-lg">
              <h1 className="text-xl font-semibold text-gray-700 mb-4">
                {t.heroSection.title}
              </h1>
              <form
                className="pb-12"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
              >
                <div className="space-y-4 md:space-y-8">
                  <div className="flex flex-col">
                    <input
                      name="businessName"
                      {...register("businessName")}
                      placeholder={t.form.businessNamePlaceholder}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <div className="flex flex-col">
                      <select
                        name="businessType"
                        {...register("businessType")}
                        className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 w-full"
                      >
                        <option value="">
                          {t.form.businessTypePlaceholder}
                        </option>
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
                        className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 w-full"
                      >
                        <option value="">{t.form.locationsPlaceholder}</option>
                        <option value="1-5">1-5</option>
                        <option value="6-10">6-10</option>
                        <option value="11-24">11-24</option>
                        <option value="25-50">25-50</option>
                        <option value="50+">Over 50</option>
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
                  <div className="flex flex-col relative">
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
                          <div className="bg-white rounded-md mt-1 absolute top-10 shadow-lg">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <div className="flex flex-col">
                      <input
                        name="firstName"
                        {...register("firstName")}
                        placeholder={t.form.firstNamePlaceholder}
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
                        placeholder={t.form.lastNamePlaceholder}
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
                  <div className="flex flex-col space-y-4">
                    <input
                      name="email"
                      {...register("email")}
                      type="email"
                      placeholder={t.form.emailPlaceholder}
                      className="p-3 border border-gray-300 rounded-md w-full"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {language === "fr"
                          ? "Email invalide"
                          : errors.email.message}
                      </p>
                    )}
                    <div className="grid grid-cols-[0.5fr,2fr] gap-2">
                      <Select
                        defaultValue="CA"
                        name="countryCode"
                        {...register("countryCode")}
                        className="p-3 border border-gray-300 bg-white rounded-md text-gray-700 w-full"
                        onValueChange={(value) => {
                          setCountryCode(
                            countryOptions.find((c) => c.short === value).code,
                          );
                          setCountryShort(value);
                        }}
                      >
                        <SelectTrigger className="w-full h-full">
                          <SelectValue>{countryShort}</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {countryOptions.map((c) => (
                            <SelectItem key={c.short} value={c.short}>
                              {`${c.short} — ${c.name} (${c.code})`}
                            </SelectItem>
                          ))}{" "}
                        </SelectContent>
                      </Select>
                      <input
                        name="phone"
                        {...register("phone")}
                        type="tel"
                        placeholder={countryCode}
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
                </div>
                <button
                  type="submit"
                  className="w-1/2 mx-auto mt-10 flex justify-center bg-blue-800 text-white p-3 rounded-md hover:bg-blue-700"
                >
                  {t.form.submitButton}
                </button>
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
