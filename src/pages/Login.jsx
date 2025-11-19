import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../api/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) return alert("Enter email");

    try {
      setLoading(true);
      await sendOtp(email);
      navigate(`/verify-otp?email=${email}`);
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-xl shadow-md text-center">

        <h1 className="text-2xl font-bold tracking-wide mb-1">FABNEX</h1>
        <p className="text-gray-600 mb-6">Sign in</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-3 rounded-md text-sm mb-4 focus:ring-2 focus:ring-black outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSendOtp}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          {loading ? "Sending OTP..." : "Continue"}
        </button>

        <p className="text-xs text-gray-500 mt-6">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </div>
  );
}
