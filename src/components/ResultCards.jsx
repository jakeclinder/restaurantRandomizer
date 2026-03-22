import { CUISINES } from '../data/cuisines';

const cuisineMap = Object.fromEntries(CUISINES.map((c) => [c.id, c.label]));

const PRICE_COLORS = { '$': '#27ae60', '$$': '#f39c12', '$$$': '#e67e22', '$$$$': '#c0392b' };
const DIFF_COLORS = { easy: '#27ae60', medium: '#f39c12', hard: '#c0392b' };

export default function ResultCards({ picks, mode, winner, onRemove, onRandomize }) {
  if (winner) {
    return (
      <div className="results">
        <div className="winner-banner">
          <p>We have a winner!</p>
          <WinnerCard item={winner} mode={mode} />
        </div>
      </div>
    );
  }

  if (picks.length === 0) {
    return (
      <div className="results">
        <div className="no-picks">
          <p>All options removed. <button className="link-btn" onClick={onRandomize}>Randomize again?</button></p>
        </div>
      </div>
    );
  }

  return (
    <div className="results">
      <p className="results-hint">
        Remove options you don&apos;t want until one remains.
        {picks.length > 1 && <span> ({picks.length} left)</span>}
      </p>
      <div className="cards-grid">
        {picks.map((item) => (
          <Card key={item.id} item={item} mode={mode} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
}

function Card({ item, mode, onRemove }) {
  return (
    <div className="card">
      <button className="card-remove" onClick={() => onRemove(item.id)} title="Remove this option">
        ✕
      </button>
      <div className="card-body">
        <h3 className="card-name">{item.name}</h3>

        {mode === 'out' && (
          <>
            <div className="card-meta">
              {item.neighborhood && <span className="meta-neighborhood">📍 {item.neighborhood}</span>}
              {item.priceRange && (
                <span className="meta-price" style={{ color: PRICE_COLORS[item.priceRange] || '#666' }}>
                  {item.priceRange}
                </span>
              )}
              {item.rating && <span className="meta-rating">⭐ {item.rating}</span>}
            </div>
          </>
        )}

        {mode === 'home' && (
          <div className="card-meta">
            {item.difficulty && (
              <span className="meta-difficulty" style={{ color: DIFF_COLORS[item.difficulty] || '#666' }}>
                {item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}
              </span>
            )}
            {item.time && <span className="meta-time">⏱ {item.time}</span>}
          </div>
        )}

        {item.notes && <p className="card-notes">{item.notes}</p>}

        <div className="card-tags">
          {item.cuisines.map((cid) => (
            <span key={cid} className="tag">{cuisineMap[cid] || cid}</span>
          ))}
        </div>

        {item.url && (
          <a className="card-link" href={item.url} target="_blank" rel="noreferrer">
            Visit website →
          </a>
        )}
      </div>
    </div>
  );
}

function WinnerCard({ item, mode }) {
  return (
    <div className="card card--winner">
      <div className="card-body">
        <h3 className="card-name">{item.name}</h3>
        {mode === 'out' && (
          <div className="card-meta">
            {item.neighborhood && <span className="meta-neighborhood">📍 {item.neighborhood}</span>}
            {item.priceRange && <span className="meta-price">{item.priceRange}</span>}
            {item.rating && <span className="meta-rating">⭐ {item.rating}</span>}
          </div>
        )}
        {mode === 'home' && (
          <div className="card-meta">
            {item.difficulty && <span className="meta-difficulty">{item.difficulty}</span>}
            {item.time && <span className="meta-time">⏱ {item.time}</span>}
          </div>
        )}
        {item.notes && <p className="card-notes">{item.notes}</p>}
        <div className="card-tags">
          {item.cuisines.map((cid) => (
            <span key={cid} className="tag">{cuisineMap[cid] || cid}</span>
          ))}
        </div>
        {item.url && (
          <a className="card-link" href={item.url} target="_blank" rel="noreferrer">
            Visit website →
          </a>
        )}
      </div>
    </div>
  );
}
