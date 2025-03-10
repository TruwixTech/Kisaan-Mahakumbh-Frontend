import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Backend_URL = "https://kisaan-mahakumbh-backend.vercel.app";
// const Backend_URL = "http://localhost:8080";

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
  const [allData, setAllData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("VISITOR");
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const token = localStorage.getItem("token");

  const handleSignOut = () => {
    localStorage.removeItem("token");
    toast.success("Sign out Successfully!");
    navigate("/admin-login");
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(allData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, selectedCategory);
    XLSX.writeFile(workbook, `${selectedCategory}.xlsx`);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${Backend_URL}/api/v1/user/list`,
        {
          filters: selectedCategory !== "USER" ? { role: selectedCategory.toLowerCase() } : {},
          pageNum,
          pageSize,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setData(res.data.data.userList);
      setTotalPages(Math.ceil(res.data.data.userCount / pageSize));
    } catch (error) {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
    } else {
      fetchData();
    }
  }, [selectedCategory, pageNum]);

  const fetchAllData = async () => {
    try {
      const res = await axios.post(
        `${Backend_URL}/api/v1/user/list`,
        {
          filters: selectedCategory !== "USER" ? { role: selectedCategory.toLowerCase() } : {},
          pageNum:1,
          pageSize:10000000
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setAllData(res.data.data.userList)
      console.log("all data : ",res.data.data.userList)
    } catch (error) {
      toast.error("Failed to fetch data");
    }
  };
  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
    } else {
      fetchAllData();
    }
  }, [selectedCategory]);


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
        <div className="w-1/6 bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-bold mb-4">Role</h2>
          <ul>
            {Role.map((category) => (
              <li
                key={category}
                className={`cursor-pointer p-2 rounded-md mb-2 ${selectedCategory === category ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                  }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setPageNum(1);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

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

          {loading ? (
            <p className="text-center text-lg">Loading...</p>
          ) : (
            <>
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
                {selectedCategory.toLowerCase() === "user" ||
                selectedCategory.toLowerCase() === "sponsor" ? (
                  <th className="border p-2">Sponsorship Type</th>
                ) : (
                  ""
                )}
                {selectedCategory.toLowerCase() === "entrepreneur" ||
                selectedCategory.toLowerCase() === "user" ? (
                  <th className="border p-2">Stall Size</th>
                ) : (
                  ""
                )}
                <th className="border p-2">Address</th>
                {selectedCategory.toLowerCase() === "entrepreneur" ||
                selectedCategory.toLowerCase() === "user" ? (
                  <th className="border p-2">Payment Amount</th>
                ) : (
                  ""
                )}
                {selectedCategory.toLowerCase() === "entrepreneur" ||
                selectedCategory.toLowerCase() === "user" ? (
                  <th className="border p-2">Payment Status</th>
                ) : (
                  ""
                )}
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
                  {selectedCategory.toLowerCase() === "user" ||
                  item.role === "sponsor" ? (
                    <td className="border p-2">{item.sponsorshipType}</td>
                  ) : (
                    ""
                  )}
                  {item.role === "entrepreneur" ||
                  selectedCategory.toLowerCase() === "user" ? (
                    <td className="border p-2">{item.stallSize}</td>
                  ) : (
                    ""
                  )}
                  <td className="border p-2">
                    {item.address + ", " + item.city}
                  </td>
                  {item.role === "entrepreneur" ||
                  selectedCategory.toLowerCase() === "user" ? (
                    <td className="border p-2">
                      {item.paymentAmount === 0 ? "NA" : item.paymentAmount}
                    </td>
                  ) : (
                    ""
                  )}
                  {item.role === "entrepreneur" ||
                  selectedCategory.toLowerCase() === "user" ? (
                    <td className="border p-2">{item.paymentStatus}</td>
                  ) : (
                    ""
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center mt-4 space-x-2">
                <button onClick={() => setPageNum(1)} className="px-4 py-2 text-lg rounded-lg bg-gray-300 hover:bg-gray-400">1</button>
                {pageNum > 4 && <span>...</span>}
                {[...Array(5)].map((_, i) => {
                  const page = pageNum - 2 + i;
                  return (
                    page > 1 && page < totalPages && (
                      <button
                        key={page}
                        onClick={() => setPageNum(page)}
                        className={`px-4 py-2 text-lg rounded-lg ${pageNum === page ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
                      >
                        {page}
                      </button>
                    )
                  );
                })}
                {pageNum < totalPages - 4 && <span>...</span>}
                <button onClick={() => setPageNum(totalPages)} className="px-4 py-2 text-lg rounded-lg bg-gray-300 hover:bg-gray-400">{totalPages}</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;



{/* <td className="border p-2">{item.companyName}</td>
                  <td className="border p-2">{item.companyType}</td>
                 
                </tr> */}