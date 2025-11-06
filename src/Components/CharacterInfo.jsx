export const CharacterInfo = ({ character }) => {
  console.log(character);
  return (
    <div className="max-w-xs bg-zinc-900 border border-green-500/40 rounded-xl shadow-[0_0_20px_rgba(0,255,170,0.4)] overflow-hidden m-4">
      <img
        className="w-full h-56 object-cover border-b border-green-500/30 shadow-[0_0_15px_rgba(0,255,170,0.5)]"
        src={character.portrait_path}
        alt={character.name}
      />

      <div className="p-6 text-green-300">
        <h3 className="text-3xl font-extrabold text-emerald-300 drop-shadow-[0_0_4px_rgba(16,185,129,0.4)] mb-4 tracking-wide uppercase">
          {character.name}
        </h3>

        <p className="text-lg text-emerald-200">
          <span className="font-bold text-green-400">Edad:</span>{" "}
          {character.age}
        </p>

        <p className="text-lg text-emerald-200">
          <span className="font-bold text-green-400">Ocupación:</span>{" "}
          {character.occupation}
        </p>
      </div>
    </div>
  );
};
