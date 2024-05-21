import React from "react";
import { toast } from "react-hot-toast";
import { subscribeToNewsletter } from "../../actions/subscribeToNewsletter";
import { useFormStatus } from "react-dom";

export default function NewsletterForm() {
  return (
    <form
      action={async (formData) => {
        const { data, error } = await subscribeToNewsletter(formData);
        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Subscribed to newsletter! 💌");
      }}
    >
      <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-zinc-100 rounded-lg p-2">
        <div className="w-full">
          <label htmlFor="hero-input" className="sr-only">
            Search
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-zinc-100"
            placeholder="Enter your email"
          />
        </div>
        <button
          className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#4761ab] text-zinc-100 hover:bg-[#3e5bab] disabled:opacity-50 disabled:pointer-events-none"
          type="submit"
        >
          Subscribe
        </button>
      </div>
      <p className="text-xs text-zinc-100 mt-2">Only blog updates, no fuss.</p>
    </form>
  );
}
