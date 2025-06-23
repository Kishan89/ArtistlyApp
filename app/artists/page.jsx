"use client";

import { useState, useEffect } from "react";
import styles from "../../styles/ArtistPage.module.css";
import ArtistCard from "../../components/ArtistCard";
import FilterBlock from "../../components/FilterBlock";
import defaultData from "../../data/artists.json";

export default function ArtistsPage() {
  const [allArtists, setAllArtists] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const localArtists = JSON.parse(
      localStorage.getItem("addedArtists") || "[]"
    );
    const combined = [...defaultData, ...localArtists];
    setAllArtists(combined);
    setFiltered(combined);
  }, []);

  const handleFilter = (category) => {
    if (!category) return setFiltered(allArtists);
    setFiltered(allArtists.filter((artist) => artist.category === category));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Explore Artists</h1>
      <FilterBlock onFilter={handleFilter} />
      <div className={styles.grid}>
        {filtered.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
}
