"use client";

import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import categories from "../../data/categories.json";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.string().required("Select a category"),
  language: yup
    .array()
    .min(1, "Select at least one language")
    .required("Languages are required"),
  location: yup.string().required("Location is required"),
  fee: yup.string().required("Fee is required"),
  image: yup
    .string()
    .url("Must be a valid image URL")
    .required("Image URL is required"),
});

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const formatted = {
      ...data,
      language: Array.isArray(data.language)
        ? data.language.filter(Boolean)
        : [data.language].filter(Boolean),
    };

    const existing = JSON.parse(localStorage.getItem("addedArtists") || "[]");
    const updated = [...existing, formatted];
    localStorage.setItem("addedArtists", JSON.stringify(updated));

    alert("Artist onboarded!");
    reset();
  };

  return (
    <>
      <Head>
        <title>Onboard Artist | Artistly</title>
        <meta
          name="description"
          content="Submit artist profile to be listed on Artistly platform"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[linear-gradient(135deg,#e0c3fc_0%,#8ec5fc_100%)] px-10 py-14 max-md:px-6 max-md:py-10">
        <h1 className="text-3xl font-bold text-center text-[#222] mb-8 max-md:text-2xl max-sm:text-xl">
          Onboard Artist
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[500px] w-full mx-auto bg-white p-8 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.1)] max-md:p-6"
        >
          <input
            placeholder="Name"
            {...register("name")}
            className="w-full text-base p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6a11cb] transition"
          />
          <p className="text-sm text-red-500 mb-2">{errors.name?.message}</p>

          <textarea
            placeholder="Bio"
            {...register("bio")}
            className="w-full text-base p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6a11cb] transition"
          />
          <p className="text-sm text-red-500 mb-2">{errors.bio?.message}</p>

          <label className="block font-semibold mb-1">Category</label>
          <select
            {...register("category")}
            className="w-full text-base p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6a11cb] transition"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          <p className="text-sm text-red-500 mb-2">
            {errors.category?.message}
          </p>

          <label className="block font-semibold mb-1">Languages Spoken</label>
          <div className="flex flex-wrap gap-3 mb-2">
            {["English", "Hindi", "Marathi", "Punjabi", "Tamil"].map((lang) => (
              <label key={lang} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={lang}
                  {...register("language")}
                  className="accent-purple-600"
                />
                <span>{lang}</span>
              </label>
            ))}
          </div>
          <p className="text-sm text-red-500 mb-2">
            {errors.language?.message}
          </p>

          <input
            placeholder="Location"
            {...register("location")}
            className="w-full text-base p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6a11cb] transition"
          />
          <p className="text-sm text-red-500 mb-2">
            {errors.location?.message}
          </p>

          <select
            {...register("fee")}
            className="w-full text-base p-3 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6a11cb] transition"
          >
            <option value="">Select Fee Range</option>
            <option value="₹5k–₹15k">₹5k–₹15k</option>
            <option value="₹15k–₹50k">₹15k–₹50k</option>
            <option value="₹50k+">₹50k+</option>
          </select>
          <p className="text-sm text-red-500 mb-2">{errors.fee?.message}</p>

          <input
            placeholder="Image URL"
            {...register("image")}
            className="w-full text-base p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6a11cb] transition"
          />
          <p className="text-sm text-red-500 mb-4">{errors.image?.message}</p>

          <button
            type="submit"
            className="w-full text-base font-semibold py-3 px-6 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white rounded-full hover:from-[#2575fc] hover:to-[#6a11cb] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
