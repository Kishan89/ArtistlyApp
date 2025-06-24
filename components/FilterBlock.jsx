export default function FilterBlock({ filters, setFilters }) {
  const categories = ["Singer", "Dancer", "DJ", "Speaker"];
  const languages = ["English", "Hindi", "Marathi", "Punjabi", "Tamil"];

  const handleCheckboxChange = (e, type) => {
    const value = e.target.value;
    const checked = e.target.checked;

    const updated = checked
      ? [...filters[type], value]
      : filters[type].filter((item) => item !== value);

    setFilters({ ...filters, [type]: updated });
  };

  return (
    <div className="mb-10 flex flex-wrap gap-6 justify-center">
      <div>
        <p className="font-semibold text-base text-center mb-2">Category</p>
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                value={cat}
                checked={filters.category.includes(cat)}
                onChange={(e) => handleCheckboxChange(e, "category")}
                className="accent-purple-600"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold text-base text-center mb-2">Languages</p>
        <div className="flex gap-4 flex-wrap">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                value={lang}
                checked={filters.language.includes(lang)}
                onChange={(e) => handleCheckboxChange(e, "language")}
                className="accent-purple-600"
              />
              {lang}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
