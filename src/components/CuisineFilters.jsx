export default function CuisineFilters({ cuisines, enabled, onToggle, onToggleAll, poolSize }) {
  const allOn = cuisines.every((c) => enabled.has(c.id));
  const allOff = cuisines.every((c) => !enabled.has(c.id));

  return (
    <section className="cuisine-filters">
      <div className="filters-header">
        <h2>Cuisines</h2>
        <div className="bulk-actions">
          <button onClick={() => onToggleAll(true)} disabled={allOn}>Select All</button>
          <button onClick={() => onToggleAll(false)} disabled={allOff}>Clear All</button>
        </div>
      </div>
      <div className="cuisine-grid">
        {cuisines.map((c) => (
          <label key={c.id} className={`cuisine-chip ${enabled.has(c.id) ? 'on' : 'off'}`}>
            <input
              type="checkbox"
              checked={enabled.has(c.id)}
              onChange={() => onToggle(c.id)}
            />
            {c.label}
          </label>
        ))}
      </div>
    </section>
  );
}
