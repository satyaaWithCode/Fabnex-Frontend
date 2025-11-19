import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyOtp } from "../api/auth";

export default function VerifyOtp() {
  const [params] = useSearchParams();
  const email = params.get("email");

  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (!code) return alert("Enter OTP");

    try {
      const { data } = await verifyOtp(email, code);
      alert("Login successful");

      // redirect to account page
      navigate("/account");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid or expired OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-xl shadow-md text-center">

        <h1 className="text-2xl font-bold tracking-wide mb-1">FABNEX</h1>
        <p className="text-gray-600 mb-6">Enter code sent to {email}</p>

        <input
          type="text"
          maxLength="6"
          placeholder="6-digit OTP"
          className="w-full border px-4 py-3 rounded-md text-sm mb-4 text-center tracking-[6px] 
                     focus:ring-2 focus:ring-black outline-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          onClick={handleVerify}
          className="w-full bg-black text-white py-3 rounded-md font-semibold 
                     hover:bg-gray-800 transition"
        >
          Verify Code
        </button>

        {/* Link to Login */}
        <p
          onClick={() => navigate("/login")}
          className="mt-5 text-sm text-blue-600 cursor-pointer hover:underline"
        >
          Use a different email
        </p>

      </div>
    </div>
  );
}
