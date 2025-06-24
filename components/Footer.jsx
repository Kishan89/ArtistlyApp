import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,#1c1c2b,#383862)] text-white px-8 py-12 rounded-t-xl shadow-[0_-8px_20px_rgba(0,0,0,0.2)] font-['Segoe_UI',sans-serif]">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start gap-8 text-sm max-md:flex-col max-md:items-center max-md:text-center">
        <div>
          <h2 className="text-[1.8rem] font-bold mb-2 max-md:text-[1.5rem]">
            Artistly
          </h2>
          <p className="text-[#dddddd] text-[0.95rem]">
            Connecting you with top event talent.
          </p>
        </div>

        <div className="flex flex-col gap-2 max-md:items-center">
          <a
            href="/artists"
            className="text-[#f0f0f0] font-medium hover:text-[#ffd700] transition-colors"
          >
            Artists
          </a>
          <a
            href="/onboard"
            className="text-[#f0f0f0] font-medium hover:text-[#ffd700] transition-colors"
          >
            Onboard
          </a>
          <a
            href="/dashboard"
            className="text-[#f0f0f0] font-medium hover:text-[#ffd700] transition-colors"
          >
            Dashboard
          </a>
        </div>

        <div className="flex gap-4 text-[1.2rem] max-md:justify-center">
          <a
            href="#"
            className="hover:text-[#ffd700] transition-transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-[#ffd700] transition-transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-[#ffd700] transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-[#ffd700] transition-transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 text-[0.85rem] text-[#aaaaaa]">
        © 2025 <strong>Artistly.com</strong> | All Rights Reserved
      </div>
    </footer>
  );
}
