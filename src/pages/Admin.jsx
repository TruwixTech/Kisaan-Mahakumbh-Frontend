import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Backend_URL = "https://kisaan-mahakumbh-backend.vercel.app";


const Role = [
  "VISITOR",
  "SPONSOR",
  "ENTREPRENEUR",
  "VOLUNTEER",
  "DELEGATE",
  "USER",
];

const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("VISITOR");
  const token = localStorage.getItem("token");

  const handleSignOut = () => {
    localStorage.removeItem("token");
    toast.success("Sign out Successfully!");
    navigate("/admin-login"); // Redirect to login page
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, selectedCategory);
    XLSX.writeFile(workbook, `${selectedCategory}.xlsx`);
  };

  useEffect(() => {
    if (token === null) {
      navigate("/admin-login");
    }

    const fetchData = async () => {
      try {
        const lowerCaseCategory = selectedCategory.toLowerCase();
        let res;
        if (lowerCaseCategory === "user") {
          res = await axios.post(
            `${Backend_URL}/api/v1/user/list`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
        } else {
          res = await axios.post(
            `${Backend_URL}/api/v1/user/list`,
            { filters: { role: lowerCaseCategory } },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
        }
        setData(res.data.data.userList);
        console.log("data is: ", data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-lg">
        <h1 className="text-lg font-bold">Welcome Admin</h1>
        <button
          onClick={handleSignOut}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer"
        >
          Sign Out
        </button>
      </nav>

      <div className="flex flex-grow p-4">
        {/* Sidebar */}
        <div className="w-1/6 bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4">Role</h2>
          <ul>
            {Role.map((category) => (
              <li
                key={category}
                className={`cursor-pointer p-2 rounded-md mb-2 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Data Table */}
        <div className="flex-1 bg-white p-6 mx-4 rounded-lg shadow-lg relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{selectedCategory} Data</h2>
            <button
              onClick={handleDownload}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 cursor-pointer"
            >
              Download Excel
            </button>
          </div>

          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Designation</th>
                <th className="border p-2">Role</th>
                
                <th className="border p-2">Industry</th>
                <th className="border p-2">Company</th>
                <th className="border p-2">Company Type</th>
                {selectedCategory.toLowerCase()==="user" || selectedCategory.toLowerCase()==="sponsor" ? <th className="border p-2">Sponsorship Type</th> : ""}
                {selectedCategory.toLowerCase() ==="entrepreneur" || selectedCategory.toLowerCase() ==="user"? <th className="border p-2">Stall Size</th> :""}
                <th className="border p-2">Address</th>
                {selectedCategory.toLowerCase() ==="entrepreneur" || selectedCategory.toLowerCase() ==="user" ? <th className="border p-2">Payment Status</th> :""}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center border-t">
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">{item.phone}</td>
                  <td className="border p-2">{item.designation}</td>
                  <td className="border p-2">{item.role}</td>
                  <td className="border p-2">
                    {item.industry === "custom"
                      ? item.customIndustry
                      : item.industry}
                  </td>
                  <td className="border p-2">{item.companyName}</td>
                  <td className="border p-2">{item.companyType}</td>
                  {selectedCategory.toLowerCase()==="user" || item.role === "sponsor" ? <td className="border p-2">{item.sponsorshipType}</td> : ""}
                  {item.role === "entrepreneur" || selectedCategory.toLowerCase()==="user" ? <td className="border p-2">{item.stallSize}</td> :""}
                  <td className="border p-2">
                    {item.address + ", " + item.city}
                  </td>
                  {item.role === "entrepreneur" || selectedCategory.toLowerCase()==="user" ? <td className="border p-2">{item.paymentStatus}</td> :""}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
