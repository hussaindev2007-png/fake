// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// export default function EditUser() { // Renamed for clarity
//   const [user, setUser] = useState({ name: "", email: "" });
//   const navigate = useNavigate();
//   const { id } = useParams();

//   // Fetch user data once when component mounts
//   useEffect(() => {
//     axios
//       .get(`https://fake-data-2.onrender.com/users/${id}`)
//       .then((res) => setUser(res.data))
//       .catch((err) => {
//         console.error(err);
//         toast.error("Error fetching user data");
//       });
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.put(`https://fake-data-2.onrender.com/users/${id}`, user);

//       if (res.status !== 200) {
//         throw new Error("Network response was not ok");
//       }

//       toast.success("User updated successfully!");

//       setTimeout(() => {
//         navigate("/"); // redirect after 2 seconds
//       }, 2000);

//     } catch (err) {
//       console.error(err);
//       toast.error("Error updating user");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
//       <ToastContainer position="top-right" autoClose={1000} />
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Edit User</h2>

//         <form className="space-y-5" onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
//               value={user.name}
//               onChange={(e) => setUser({ ...user, name: e.target.value })}
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all shadow-md"
//           >
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }








// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function EditUser() {
//   const [user, setUser] = useState({ name: "", email: "" });
//   const navigate = useNavigate();
//   const { id } = useParams();

//   // Fetch Single User (GET)
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(`http://localhost:3000/users/${id}`);

//         if (!res.ok) throw new Error("Failed to load user");

//         const data = await res.json();
//         setUser(data);
//       } catch (err) {
//         console.error(err);
//         toast.error("Error fetching user data");
//       }
//     };

//     fetchUser();
//   }, [id]);

//   // Update User (PUT)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch(`http://localhost:3000/users/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       if (!res.ok) throw new Error("Failed to update user");

//       toast.success("User updated successfully!");

//       setTimeout(() => {
//         navigate("/");
//       }, 1000);
//     } catch (err) {
//       console.error(err);
//       toast.error("Error updating user");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
//       <ToastContainer position="top-right" autoClose={1000} />
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Edit User</h2>

//         <form className="space-y-5" onSubmit={handleSubmit}>
          
//           {/* Name Field */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1">Name</label>
//             <input
//               type="text"
//               placeholder="Enter name"
//               className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
//               value={user.name}
//               onChange={(e) => setUser({ ...user, name: e.target.value })}
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div className="flex flex-col">
//             <label className="text-sm font-semibold mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter email"
//               className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all shadow-md"
//           >
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }










import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditUser() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  // GET USER
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

  // UPDATE USER
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

          {/* NAME */}
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

          {/* EMAIL */}
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

          {/* BUTTON */}
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

