"use client";

import styles from "../../styles/OnboardPage.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.string().required("Category is required"),
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
    const existing = JSON.parse(localStorage.getItem("artists") || "[]");
    const updated = [...existing, data];
    localStorage.setItem("artists", JSON.stringify(updated));
    alert("Artist onboarded!");
    reset();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Onboard Artist</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input placeholder="Name" {...register("name")} />
        <p>{errors.name?.message}</p>

        <textarea placeholder="Bio" {...register("bio")} />
        <p>{errors.bio?.message}</p>

        <select {...register("category")}>
          <option value="">Select Category</option>
          <option value="Singer">Singer</option>
          <option value="Dancer">Dancer</option>
          <option value="DJ">DJ</option>
          <option value="Speaker">Speaker</option>
        </select>
        <p>{errors.category?.message}</p>

        <input placeholder="Location" {...register("location")} />
        <p>{errors.location?.message}</p>

        <select {...register("fee")}>
          <option value="">Select Fee Range</option>
          <option value="₹5k–₹15k">₹5k–₹15k</option>
          <option value="₹15k–₹50k">₹15k–₹50k</option>
          <option value="₹50k+">₹50k+</option>
        </select>
        <p>{errors.fee?.message}</p>

        <input placeholder="Image URL" {...register("image")} />
        <p>{errors.image?.message}</p>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
