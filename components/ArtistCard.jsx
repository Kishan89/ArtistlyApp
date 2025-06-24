export default function ArtistCard({ artist }) {
  const getImageUrl = () =>
    artist?.image?.trim() ||
    `https://source.unsplash.com/400x300/?${encodeURIComponent(
      artist?.category || "artist"
    )}`;

  const languageArray = artist.language || artist.languages || [];

  const languageDisplay = Array.isArray(languageArray)
    ? languageArray.join(", ")
    : languageArray || "Not specified";

  return (
    <div className="max-w-sm w-full bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full">
      <img
        src={getImageUrl()}
        alt={`Photo of ${artist?.name}`}
        className="w-full h-56 object-cover rounded-t-2xl"
        loading="lazy"
      />
      <div className="bg-white flex-grow p-6 text-center flex flex-col justify-between rounded-b-2xl">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {artist?.name}
          </h3>
          <p className="text-sm text-gray-600 mb-1">{artist?.category}</p>
          <p className="text-sm text-gray-600 mb-1">{artist?.location}</p>
          <p className="text-sm text-gray-600 mb-1">{languageDisplay}</p>
          <p className="text-sm text-gray-600">{artist?.fee}</p>
        </div>
        <button className="mt-4 px-5 py-2 w-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-indigo-600 hover:to-pink-500 hover:-translate-y-0.5">
          Ask for Quote
        </button>
      </div>
    </div>
  );
}
