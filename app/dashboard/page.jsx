"use client";

import { useEffect, useState } from "react";
import styles from "../../styles/DashboardPage.module.css";
import staticData from "../../data/artists.json";

export default function DashboardPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const localArtists = JSON.parse(localStorage.getItem("addedArtists")) || [];
    setArtists([...staticData, ...localArtists]);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Manager Dashboard</h1>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist, idx) => (
              <tr key={idx}>
                <td>{artist.name}</td>
                <td>{artist.category}</td>
                <td>{artist.location}</td>
                <td>{artist.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
