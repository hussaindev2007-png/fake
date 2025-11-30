

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Home() {
//   const [post, setPost] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUsers = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/users");
//       if (!res.ok) throw new Error("Network error");

//       const data = await res.json();
//       setPost(data);
//     } catch (error) {
//       toast.error("Failed to load users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Do you want to delete this user?");
//     if (!confirmDelete) return;

//     try {
//       const res = await fetch(`http://localhost:3000/users/${id}`, {
//         method: "DELETE",
//       });

//       if (!res.ok) throw new Error("Delete failed");

//       toast.success("User deleted successfully!");
//       setPost((prev) => prev.filter((u) => u.id !== id));
//     } catch (error) {
//       toast.error("Error deleting user");
//     }
//   };

//   // Loading Animation
//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
//         <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex justify-center">
//       <ToastContainer position="top-right" autoClose={2000} />

//       <div className="backdrop-blur-xl bg-white/10 shadow-2xl rounded-3xl p-8 w-full max-w-4xl border border-white/10 animate-fadeIn">
//         <h1 className="text-3xl font-bold mb-6 text-center tracking-wide">
//           User Dashboard
//         </h1>

//         <Link to="/create">
//           <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-xl hover:scale-105 transition-all duration-300 shadow-xl mb-4">
//             + Create New User
//           </button>
//         </Link>

//         <table className="min-w-full border-collapse rounded-xl overflow-hidden animate-slideUp">
//           <thead>
//             <tr className="bg-white/20 text-white text-left">
//               <th className="py-3 px-4">Name</th>
//               <th className="py-3 px-4">Email</th>
//               <th className="py-3 px-4">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {post.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="3"
//                   className="text-center py-6 text-gray-300 text-lg font-medium"
//                 >
//                   ❌ No User Found
//                 </td>
//               </tr>
//             ) : (
//               post.map((data) => (
//                 <tr
//                   key={data.id}
//                   className="border-b border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.01]"
//                 >
//                   <td className="py-3 px-4 font-semibold text-gray-200">
//                     {data.name}
//                   </td>
//                   <td className="py-3 px-4 text-gray-300">{data.email}</td>
//                   <td className="py-3 px-4 space-x-2">
//                     <Link
//                       to={`/update/${data.id}`}
//                       className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
//                     >
//                       Edit
//                     </Link>

//                     <button
//                       onClick={() => handleDelete(data.id)}
//                       className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 hover:scale-105 transition-all duration-300"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Custom animations */}
//       <style>
//         {`
//         .animate-fadeIn {
//           animation: fadeIn 0.9s ease-out;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: scale(0.95); }
//           to { opacity: 1; transform: scale(1); }
//         }

//         .animate-slideUp {
//           animation: slideUp 0.7s ease-out;
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}
//       </style>
//     </div>
//   );
// }









































import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      setPost(data);
    } catch (error) {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      toast.success("User deleted successfully!");
      setPost((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      toast.error("Error deleting user");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full"
        ></motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <ToastContainer autoClose={1800} />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl rounded-3xl p-10 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-center mb-8 tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          User Details
        </h1>

        {/* Create Button */}
        <div className="flex justify-end">
          <Link to="/create">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-800/40"
            >
              + Create User
            </motion.button>
          </Link>
        </div>

        {/* Table */}
        <motion.table
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mt-6 border-collapse overflow-hidden rounded-2xl"
        >
          <thead>
            <tr className="bg-white/20 border-b border-white/10 text-left text-lg">
              <th className="py-4 px-5 font-medium">Name</th>
              <th className="py-4 px-5 font-medium">Email</th>
              <th className="py-4 px-5 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {post.length === 0 ? (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-10 text-gray-400 text-xl"
                >
                  No user found
                </td>
              </tr>
            ) : (
              post.map((data, index) => (
                <motion.tr
                  key={data.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="border-b border-white/10 hover:bg-white/5 duration-300"
                >
                  <td className="py-4 px-5 text-gray-200 font-semibold tracking-wide">
                    {data.name}
                  </td>
                  <td className="py-4 px-5 text-gray-300">{data.email}</td>
                  <td className="py-4 px-5 space-x-3">
                    <Link
                      to={`/update/${data.id}`}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all shadow-md"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(data.id)}
                      className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-all shadow-md"
                    >
                      Delete
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </motion.table>
      </motion.div>
    </div>
  );
}
