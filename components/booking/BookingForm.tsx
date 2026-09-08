"use client";

import { FormEvent, useMemo, useState } from "react";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { getPhoneDisplay, getTelUrl } from "@/lib/phone";
import { Button } from "@/components/ui/Button";

const tripTypes = [
  "One Way",
  "Round Trip",
  "Local Sightseeing",
  "Braj Darshan",
  "Multi-City",
  "Customized Tour",
  "Airport Transfer",
  "Railway Station Transfer",
];

const tripTypesNeedingReturnDate = new Set([
  "Round Trip",
  "Multi-City",
  "Customized Tour",
]);

interface FormState {
  tripType: string;
  pickup: string;
  destination: string;
  travelDate: string;
  returnDate: string;
  passengers: string;
  name: string;
  mobile: string;
  whatsapp: string;
  requirements: string;
}

const initialState: FormState = {
  tripType: "One Way",
  pickup: "",
  destination: "",
  travelDate: "",
  returnDate: "",
  passengers: "",
  name: "",
  mobile: "",
  whatsapp: "",
  requirements: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export function BookingForm({ defaultTripType }: { defaultTripType?: string }) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    tripType: defaultTripType ?? initialState.tripType,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const showReturnDate = tripTypesNeedingReturnDate.has(form.tripType);

  const mobilePattern = useMemo(() => /^[6-9]\d{9}$/, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!mobilePattern.test(form.mobile.trim()))
      next.mobile = "Enter a valid 10-digit mobile number.";
    if (!form.pickup.trim()) next.pickup = "Please enter a pickup location.";
    if (!form.destination.trim())
      next.destination = "Please enter a destination.";
    if (!form.travelDate) next.travelDate = "Please select a travel date.";
    if (showReturnDate && !form.returnDate)
      next.returnDate = "Please select a return date.";
    if (!form.passengers.trim())
      next.passengers = "Please enter the number of passengers.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  const whatsappUrl = createWhatsAppUrl({
    tripType: form.tripType,
    pickup: form.pickup,
    destination: form.destination,
    travelDate: form.travelDate,
    returnDate: showReturnDate ? form.returnDate : undefined,
    passengers: form.passengers,
    name: form.name,
    mobile: form.mobile,
    whatsapp: form.whatsapp || undefined,
    requirements: form.requirements || undefined,
  });

  if (submitted) {
    return (
      <div className="rounded-lg border border-navy-100 bg-sand-50 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-navy-800">
          Thanks! Your trip enquiry has been received.
        </h3>
        <p className="mt-2 text-navy-600">
          We will contact you on call or WhatsApp to confirm availability and
          fare. To speed things up, you can also send this enquiry to us on
          WhatsApp directly.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-navy-700 px-5 py-3 text-[15px] font-medium text-white hover:bg-navy-800"
          >
            Send via WhatsApp
          </a>
          <a
            href={getTelUrl()}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-navy-300 px-5 py-3 text-[15px] font-medium text-navy-700 hover:bg-white"
          >
            Call {getPhoneDisplay()}
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-4 text-sm font-medium text-navy-500 underline hover:text-navy-700"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-lg border border-navy-100 bg-white p-6 sm:p-8"
    >
      <div>
        <label htmlFor="tripType" className="block text-sm font-medium text-navy-700">
          Trip Type
        </label>
        <select
          id="tripType"
          value={form.tripType}
          onChange={(e) => update("tripType", e.target.value)}
          className="mt-1.5 block w-full rounded-md border border-navy-200 bg-white px-3 py-2.5 text-navy-800"
        >
          {tripTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pickup" className="block text-sm font-medium text-navy-700">
            Pickup Location
          </label>
          <input
            id="pickup"
            type="text"
            value={form.pickup}
            onChange={(e) => update("pickup", e.target.value)}
            placeholder="e.g. Govardhan, Mathura"
            aria-invalid={!!errors.pickup}
            aria-describedby={errors.pickup ? "pickup-error" : undefined}
            className="mt-1.5 block w-full rounded-md border border-navy-200 px-3 py-2.5 text-navy-800 placeholder:text-navy-300"
          />
          {errors.pickup && (
            <p id="pickup-error" className="mt-1 text-sm text-red-600">
              {errors.pickup}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-navy-700">
            Destination
          </label>
          <input
            id="destination"
            type="text"
            value={form.destination}
            onChange={(e) => update("destination", e.target.value)}
            placeholder="Any city, airport or station in India"
            aria-invalid={!!errors.destination}
            aria-describedby={errors.destination ? "destination-error" : undefined}
            className="mt-1.5 block w-full rounded-md border border-navy-200 px-3 py-2.5 text-navy-800 placeholder:text-navy-300"
          />
          {errors.destination && (
            <p id="destination-error" className="mt-1 text-sm text-red-600">
              {errors.destination}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="travelDate" className="block text-sm font-medium text-navy-700">
            Travel Date
          </label>
          <input
            id="travelDate"
            type="date"
            value={form.travelDate}
            onChange={(e) => update("travelDate", e.target.value)}
            aria-invalid={!!errors.travelDate}
            aria-describedby={errors.travelDate ? "travelDate-error" : undefined}
            className="mt-1.5 block w-full rounded-md border border-navy-200 px-3 py-2.5 text-navy-800"
          />
          {errors.travelDate && (
            <p id="travelDate-error" className="mt-1 text-sm text-red-600">
              {errors.travelDate}
            </p>
          )}
        </div>

        {showReturnDate && (
          <div>
            <label htmlFor="returnDate" className="block text-sm font-medium text-navy-700">
              Return Date
            </label>
            <input
              id="returnDate"
              type="date"
              value={form.returnDate}
              onChange={(e) => update("returnDate", e.target.value)}
              aria-invalid={!!errors.returnDate}
              aria-describedby={errors.returnDate ? "returnDate-error" : undefined}
              className="mt-1.5 block w-full rounded-md border border-navy-200 px-3 py-2.5 text-navy-800"
            />
            {errors.returnDate && (
              <p id="returnDate-error" className="mt-1 text-sm text-red-600">
                {errors.returnDate}
              </p>
            )}
          </div>
        )}

        <div>
          <label htmlFor="passengers" className="block text-sm font-medium text-navy-700">
            Passengers
          </label>
          <input
            id="passengers"
            type="number"
            min={1}
            max={6}
            value={form.passengers}
            onChange={(e) => update("passengers", e.target.value)}
            placeholder="e.g. 4"
            aria-invalid={!!errors.passengers}
            aria-describedby={errors.passengers ? "passengers-error" : undefined}
            className="mt-1.5 block w-full rounded-md border border-navy-200 px-3 py-2.5 text-navy-800 placeholder:text-navy-300"
          />
          {errors.passengers && (
            <p id="passengers-error" className="mt-1 text-sm text-red-600">
              {errors.passengers}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1.5 block w-full rounded-md border border-navy-200 px-3 py-2.5 text-navy-800 placeholder:text-navy-300"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-navy-700">
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            inputMode="numeric"
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.mobile}
            aria-describedby={errors.mobile ? "mobile-error" : undefined}
            className="mt-1.5 block w-full rounded-md border border-navy-200 px-3 py-2.5 text-navy-800 placeholder:text-navy-300"
          />
          {errors.mobile && (
            <p id="mobile-error" className="mt-1 text-sm text-red-600">
              {errors.mobile}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-navy-700">
          WhatsApp Number{" "}
          <span className="font-normal text-navy-400">(if different)</span>
        </label>
        <input
          id="whatsapp"
          type="tel"
          inputMode="numeric"
          value={form.whatsapp}
          onChange={(e) => update("whatsapp", e.target.value)}
          placeholder="Optional"
          className="mt-1.5 block w-full rounded-md border border-navy-200 px-3 py-2.5 text-navy-800 placeholder:text-navy-300"
        />
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-navy-700">
          Additional Requirements
        </label>
        <textarea
          id="requirements"
          rows={3}
          value={form.requirements}
          onChange={(e) => update("requirements", e.target.value)}
          placeholder="Anything else we should know — stops, timing, luggage, etc."
          className="mt-1.5 block w-full rounded-md border border-navy-200 px-3 py-2.5 text-navy-800 placeholder:text-navy-300"
        />
      </div>

      <p className="text-sm text-navy-400">
        Fare depends on route, dates, trip type and vehicle availability.
      </p>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Request Fare Estimate
      </Button>
    </form>
  );
}
