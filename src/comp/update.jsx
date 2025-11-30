
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function EditUser() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://fake-3-nfop.onrender.com/users/${id}`);

        if (!res.ok) throw new Error("Failed to load user");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        toast.error("Error fetching user data");
      }
    };

    fetchUser();
  }, [id]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://fake-3-nfop.onrender.com/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!res.ok) throw new Error("Failed to update user");

      toast.success(" Changes Save");

      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      toast.error("Error updating user");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">

      <ToastContainer position="top-center" autoClose={1000} />

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md
                      animate-[fadeIn_0.5s_ease]">

        <h2 className="text-3xl font-bold text-white text-center mb-8 tracking-wide">
          Edit User
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>

 
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-medium">Name</label>
            <input
              type="text"
              className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 
                         text-white backdrop-blur-md placeholder-gray-300
                         focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              placeholder="Enter name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>

      
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-medium">Email</label>
            <input
              type="email"
              className="px-4 py-3 rounded-xl bg-white/20 border border-white/30 
                         text-white backdrop-blur-md placeholder-gray-300
                         focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>

 
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold
                       shadow-lg transform transition-all hover:scale-[1.02] active:scale-95"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}


