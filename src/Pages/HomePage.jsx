import { useFetch } from "../Hooks/useFetch.js";
import { Loading } from "../Components/Loading";
import { CharacterInfo } from "../Components/CharacterInfo";
import { useCounter } from "../Hooks/useCounter.js";

export const HomePage = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://thesimpsonsapi.com/api/characters/${count}`
  );

  const baseButtonClass =
  "py-2 px-4 rounded-lg font-bold text-black bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/40 animate-pulse-fast";

  const disabledButtonClass = "disabled:opacity-20 disabled:cursor-not-allowed";

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col justify-between items-center py-6 overflow-hidden">
      {/* Títulos */}
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl font-extrabold mb-1 text-emerald-300 drop-shadow-[0_0_4px_rgba(16,185,129,0.4)] tracking-widest uppercase animate-glow-soft">
          Los Simpsons API - by Diego Garcia
        </h1>

        <h2 className="text-xl font-bold text-emerald-200 drop-shadow-[0_0_3px_rgba(16,185,129,0.3)] animate-slide-down">
          Personajes: 
        </h2>
      </div>

      {/* Contenido principal */}
      <div className="w-full max-w-xs flex justify-center animate-float">
        {isLoading ? <Loading /> : <CharacterInfo character={data} />}
      </div>

      {/* Botones */}
      <div className="flex justify-between w-full max-w-xs gap-4 animate-slide-up">
        <button
          onClick={() => handleDecrement(1)}
          disabled={count === 1 || isLoading}
          className={`${baseButtonClass} ${disabledButtonClass}`}
        >
          Anterior
        </button>

        <button
          onClick={() => handleIncrement(1)}
          disabled={isLoading}
          className={`${baseButtonClass} ${disabledButtonClass}`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
