import { useNavigate } from "react-router";

export const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("isLogged");

    if (onLogout) onLogout();

    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center bg-black border-b border-green-500/30 px-6 py-4 shadow-[0_0_20px_rgba(0,255,170,0.3)]">
      <h2 className="text-2xl font-extrabold text-green-400 tracking-widest drop-shadow-[0_0_6px_rgba(0,255,170,0.8)] uppercase">
        Los Simpsons API
      </h2>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/home")}
          className="px-4 py-2 rounded-lg font-bold bg-green-500 text-black shadow-[0_0_12px_rgba(0,255,170,0.6)] hover:bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,170,1)] transition-all duration-300"
        >
          Home
        </button>

        <button
          onClick={handleLogoutClick}
          className="px-4 py-2 rounded-lg font-bold bg-red-600 text-black shadow-[0_0_12px_rgba(255,0,0,0.6)] hover:bg-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,1)] transition-all duration-300"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};
    