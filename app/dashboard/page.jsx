"use client";

import { useEffect, useState } from "react";
import staticData from "../../data/artists.json";

export default function DashboardPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const localArtists = JSON.parse(localStorage.getItem("addedArtists")) || [];
    setArtists([...staticData, ...localArtists]);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#e0c3fc_0%,#8ec5fc_100%)] px-6 py-10 sm:px-10 sm:py-14">
      <h1 className="text-2xl sm:text-3xl md:text-[2.4rem] font-bold text-center text-[#2d2d2d] mb-8 sm:mb-10">
        Manager Dashboard
      </h1>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
        <table className="w-full min-w-[700px] border-collapse bg-white rounded-xl overflow-hidden">
          <thead>
            <tr>
              {["Name", "Category", "Location", "Languages", "Fee"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="bg-[linear-gradient(135deg,#667eea,#764ba2)] text-white text-left font-semibold px-4 py-4 text-base whitespace-nowrap"
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {artists.map((artist, idx) => {
              const languages = Array.isArray(
                artist.language || artist.languages
              )
                ? (artist.language || artist.languages).join(", ")
                : artist.language || artist.languages || "—";

              return (
                <tr
                  key={idx}
                  className="hover:bg-[#f9f9ff] transition-colors duration-200"
                >
                  <td className="px-4 py-4 text-[#333] text-[0.95rem] border-b border-[#eee] whitespace-nowrap">
                    {artist.name}
                  </td>
                  <td className="px-4 py-4 text-[#333] text-[0.95rem] border-b border-[#eee] whitespace-nowrap">
                    {artist.category}
                  </td>
                  <td className="px-4 py-4 text-[#333] text-[0.95rem] border-b border-[#eee] whitespace-nowrap">
                    {artist.location}
                  </td>
                  <td className="px-4 py-4 text-[#333] text-[0.95rem] border-b border-[#eee] whitespace-nowrap">
                    {languages}
                  </td>
                  <td className="px-4 py-4 text-[#333] text-[0.95rem] border-b border-[#eee] whitespace-nowrap">
                    {artist.fee}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block sm:hidden space-y-6">
        {artists.map((artist, idx) => {
          const languages = Array.isArray(artist.language || artist.languages)
            ? (artist.language || artist.languages).join(", ")
            : artist.language || artist.languages || "—";

          return (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
            >
              <p className="text-sm font-semibold text-gray-700 mb-1">
                <span className="text-gray-500">Name: </span>
                {artist.name}
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                <span className="text-gray-500">Category: </span>
                {artist.category}
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                <span className="text-gray-500">Location: </span>
                {artist.location}
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                <span className="text-gray-500">Languages: </span>
                {languages}
              </p>
              <p className="text-sm font-semibold text-gray-700">
                <span className="text-gray-500">Fee: </span>
                {artist.fee}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
