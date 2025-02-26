import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Adminlogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // console.log("password: ", formData.password)
    }


  const handleSubmit = async() => {
    try {
        const response = await axios.post(`http://localhost:8080/api/v1/admin/login`,{
            email: formData.email,
            password: formData.password
        })
        toast.success("Signin successfully !")
        localStorage.setItem("token", response.data.data.admin.token)
        navigate('/admin')
    } catch (error) {
        console.log("Error: ", error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Admin Sign In</h2>
          <div className="pb-2">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e)=>{handleChange(e)}}
            />
          </div>
          <div className="pb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e)=>{handleChange(e)}}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
            onClick={handleSubmit}
          >
            Sign In
          </button>
      </div>
    </div>
  );
};

export default Adminlogin;
