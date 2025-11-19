import { useEffect, useState } from "react";
import { getMe, logout } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loadUser = async () => {
    try {
      const { data } = await getMe();
      setUser(data.user);
    } catch (err) {
      navigate("/login");
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    loadUser();
  }, []);

  if (!user) return <div className="p-10 text-center">Loading Account...</div>;

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4 py-10">
      <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-xl">
        
        <h1 className="text-2xl font-bold mb-2">Account</h1>

        <div className="border rounded-lg p-5 mb-6">
          <p className="text-lg font-semibold capitalize">{user.name || "New User"}</p>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>

        <div className="space-y-3 text-sm">
          <button
            onClick={() => navigate("/orders")}
            className="w-full text-left px-4 py-3 border rounded-md hover:bg-gray-50"
          >
            📦 My Orders
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="w-full text-left px-4 py-3 border rounded-md hover:bg-gray-50"
          >
            👤 Profile
          </button>

          <button
            onClick={() => navigate("/settings")}
            className="w-full text-left px-4 py-3 border rounded-md hover:bg-gray-50"
          >
            ⚙ Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 border rounded-md hover:bg-gray-50 text-red-600"
          >
            🚪 Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
