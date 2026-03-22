import { useState, useMemo } from 'react';
import { CUISINES } from './data/cuisines';
import { RESTAURANTS } from './data/restaurants';
import { RECIPES } from './data/recipes';
import CuisineFilters from './components/CuisineFilters';
import ResultCards from './components/ResultCards';
import './App.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PICK_COUNT = 5;

export default function App() {
  const [mode, setMode] = useState('out'); // 'out' | 'home'
  const [enabledCuisines, setEnabledCuisines] = useState(
    () => new Set(CUISINES.map((c) => c.id))
  );
  const [picks, setPicks] = useState([]);
  const [hasRandomized, setHasRandomized] = useState(false);

  const pool = useMemo(() => {
    const source = mode === 'out' ? RESTAURANTS : RECIPES;
    return source.filter((item) =>
      item.cuisines.some((c) => enabledCuisines.has(c))
    );
  }, [mode, enabledCuisines]);

  function randomize() {
    const selected = shuffle(pool).slice(0, PICK_COUNT);
    setPicks(selected);
    setHasRandomized(true);
  }

  function removePick(id) {
    setPicks((prev) => prev.filter((p) => p.id !== id));
  }

  function toggleCuisine(id) {
    setEnabledCuisines((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
    setPicks([]);
    setHasRandomized(false);
  }

  function toggleAll(enable) {
    setEnabledCuisines(enable ? new Set(CUISINES.map((c) => c.id)) : new Set());
    setPicks([]);
    setHasRandomized(false);
  }

  function switchMode(newMode) {
    setMode(newMode);
    setPicks([]);
    setHasRandomized(false);
  }

  const winner = picks.length === 1 ? picks[0] : null;

  return (
    <div className="app">
      <header className="app-header">
        <h1>What Should We Eat?</h1>
        <p className="subtitle">The indecision ender</p>

        <div className="mode-toggle">
          <button
            className={mode === 'out' ? 'active' : ''}
            onClick={() => switchMode('out')}
          >
            🍽 Eat Out
          </button>
          <button
            className={mode === 'home' ? 'active' : ''}
            onClick={() => switchMode('home')}
          >
            🏠 Make at Home
          </button>
        </div>
      </header>

      <CuisineFilters
        cuisines={CUISINES}
        enabled={enabledCuisines}
        onToggle={toggleCuisine}
        onToggleAll={toggleAll}
        poolSize={pool.length}
      />

      <div className="randomize-section">
        <button
          className="randomize-btn"
          onClick={randomize}
          disabled={pool.length === 0}
        >
          {hasRandomized ? 'Randomize Again' : 'Randomize!'}
        </button>
        {pool.length === 0 && (
          <p className="pool-warn">No options match — enable at least one cuisine above.</p>
        )}
        {pool.length > 0 && (
          <p className="pool-count">{pool.length} {mode === 'out' ? 'restaurants' : 'recipes'} in the mix</p>
        )}
      </div>

      {hasRandomized && (
        <ResultCards
          picks={picks}
          mode={mode}
          winner={winner}
          onRemove={removePick}
          onRandomize={randomize}
        />
      )}
    </div>
  );
}
