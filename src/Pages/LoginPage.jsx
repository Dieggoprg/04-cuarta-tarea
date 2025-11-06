import { useForm } from "../Hooks/useForm.js";
import { useNavigate } from "react-router";

export const LoginPage = ({ onLogin }) => {
  const { form, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form.username);
    handleReset();
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-10 rounded-2xl shadow-[0_0_25px_rgba(0,255,170,0.4)] w-full max-w-sm border border-green-500/30"
      >
        <h2 className="text-3xl font-extrabold text-center text-green-400 mb-8 tracking-wide drop-shadow-[0_0_8px_rgba(0,255,170,0.6)]">
          Iniciar Sesión
        </h2>

        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-sm font-bold text-green-300 mb-2 uppercase"
          >
            Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="tu-usuario"
            className="w-full px-4 py-3 border border-green-500/40 rounded-lg bg-zinc-800 text-green-200 focus:outline-none focus:ring-4 focus:ring-green-500/40 transition-all shadow-[0_0_8px_rgba(0,255,170,0.25)]"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className="block text-sm font-bold text-green-300 mb-2 uppercase"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="******"
            className="w-full px-4 py-3 border border-green-500/40 rounded-lg bg-zinc-800 text-green-200 focus:outline-none focus:ring-4 focus:ring-green-500/40 transition-all shadow-[0_0_8px_rgba(0,255,170,0.25)]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-black py-3 rounded-lg font-extrabold tracking-wide shadow-[0_0_15px_rgba(0,255,170,0.8)] hover:bg-green-400 hover:shadow-[0_0_25px_rgba(0,255,170,1)] focus:outline-none focus:ring-4 focus:ring-green-400/50 transition-all"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
