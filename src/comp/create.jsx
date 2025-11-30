
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function Create() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://fake-3-nfop.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) throw new Error("Failed to create user");

      toast.success("User created successfully!");

      setTimeout(() => navigate("/"), 1000);

      setUser({ name: "", email: "" });
    } catch (err) {
      console.error(err);
      toast.error("Error creating user");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center p-5">
      <ToastContainer position="top-right" autoClose={500} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold text-white mb-6 text-center tracking-wide"
        >
          Add User
        </motion.h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <label className="text-sm font-semibold text-gray-200 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="border-none rounded-xl px-4 py-3 bg-white/20 text-white placeholder-gray-300 backdrop-blur-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col"
          >
            <label className="text-sm font-semibold text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="border-none rounded-xl px-4 py-3 bg-white/20 text-white placeholder-gray-300 backdrop-blur-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </motion.div>

       
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full bg-blue-600/80 text-white py-3 rounded-xl text-lg font-semibold 
            hover:bg-blue-700 transition-all shadow-xl backdrop-blur-lg"
            type="submit"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}


