"use client";

import { useState, useEffect } from "react";
import ArtistCard from "../../components/ArtistCard";
import FilterBlock from "../../components/FilterBlock";
import defaultData from "../../data/artists.json";

export default function ArtistsPage() {
  const [allArtists, setAllArtists] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [filters, setFilters] = useState({
    category: [],
    language: [],
  });

  useEffect(() => {
    const localArtists = JSON.parse(
      localStorage.getItem("addedArtists") || "[]"
    );
    const combined = [...defaultData, ...localArtists];
    setAllArtists(combined);
    setFiltered(combined);
  }, []);

  useEffect(() => {
    const result = allArtists.filter((artist) => {
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(artist.category);

      const languageMatch =
        filters.language.length === 0 ||
        (Array.isArray(artist.languages)
          ? filters.language.some((lang) => artist.languages.includes(lang))
          : false);

      return categoryMatch && languageMatch;
    });

    setFiltered(result);
  }, [filters, allArtists]);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#e0c3fc_0%,#8ec5fc_100%)] px-8 py-12 max-md:px-4 max-md:py-8">
      <h1 className="text-4xl sm:text-3xl font-bold text-center text-gray-800 mb-10 tracking-wide">
        Explore Artists
      </h1>

      <FilterBlock filters={filters} setFilters={setFilters} />

      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2">
        {filtered.length > 0 ? (
          filtered.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No matching artists found.
          </p>
        )}
      </div>
    </div>
  );
}
