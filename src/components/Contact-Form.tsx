import React from "react";
import { toast } from "react-hot-toast";
import { sendEmail } from "../../actions/sendEmail";
import Link from "next/link";
import { useFormStatus } from "react-dom";

export default function ContactForm() {
    const { pending } = useFormStatus();

    return (
        <form
            className="bg-zinc-100 rounded px-8 pt-8 pb-8 max-w-3xl"
            action={async (formData) => {
                const { data, error } = await sendEmail(formData);
                if (error) {
                    toast.error(error);
                    return;
                }
                toast.success("Thank you, We will get back to you soon!");
            }}
        >
            <div className="mb-4">
                <label
                    className="block text-zinc-700 text-sm font-semibold mb-1"
                    htmlFor="fullname"
                >
                    Full Name
                </label>
                <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="Full Name"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-zinc-700 text-sm font-semibold mb-1"
                    htmlFor="phone"
                >
                    Phone Number
                </label>
                <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                />
            </div>
            <div className="mb-4">
                <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="whatsapp"
                    name="whatsapp"
                />
                <label className="text-sm" htmlFor="whatsapp">
                    Get important information on WhatsApp
                </label>
            </div>
            <div className="mb-4">
                <label
                    className="block text-zinc-700 text-sm font-semibold mb-1"
                    htmlFor="email"
                >
                    Email ID
                </label>
                <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email ID"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-zinc-700 text-sm font-semibold mb-1"
                    htmlFor="city"
                >
                    City
                </label>
                <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-zinc-700 text-sm font-semibold mb-1"
                    htmlFor="destination"
                >
                    Preferred Study Destinations
                </label>
                <div className="text-sm">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-500"
                            name="destination"
                            value="Canada"
                        />
                        <span className="ml-2">Canada</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-500"
                            name="destination"
                            value="United Kingdom"
                        />
                        <span className="ml-2">United Kingdom</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-500"
                            name="destination"
                            value="United States of America"
                        />
                        <span className="ml-2">United States of America</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4"
                            name="destination"
                            value="Australia"
                        />
                        <span className="ml-2">Australia</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-500"
                            name="destination"
                            value="New Zealand"
                        />
                        <span className="ml-2">New Zealand</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-500"
                            name="destination"
                            value="Germany"
                        />
                        <span className="ml-2">Germany</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-500"
                            name="destination"
                            value="France"
                        />
                        <span className="ml-2">France</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-500"
                            name="destination"
                            value="Dubai"
                        />
                        <span className="ml-2">Dubai</span>
                    </label>
                </div>
            </div>
            <div className="mb-4">
                <label
                    className="block text-zinc-700 text-sm font-semibold mb-1"
                    htmlFor="intake"
                >
                    Which intake do you plan to study?
                </label>
                <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    id="intake"
                    name="intake"
                    type="text"
                    placeholder="Intake Plan"
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-zinc-700 text-sm font-semibold mb-1"
                    htmlFor="contacttime"
                >
                    Preferred Contact Time
                </label>
                <input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    id="contacttime"
                    name="contacttime"
                    type="time"
                    min={9}
                    max={18}
                />
            </div>
            <div className="mb-10">
                <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    id="terms"
                    name="terms"
                />
                <label className="text-sm" htmlFor="terms">
                    I agree to the{" "}
                    <Link
                        href="/terms"
                        className="text-blue-800 hover:underline"
                    >
                        Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy-policy"
                        className="text-blue-800 hover:underline"
                    >
                        Privacy Policy
                    </Link>
                </label>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="w-full bg-[#4761ab] hover:bg-[#3e5bab] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    {pending ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    ) : (
                        <>Submit</>
                    )}
                </button>
            </div>
        </form>
    );
}
