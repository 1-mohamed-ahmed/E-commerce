import { Link } from "react-router-dom";
import { Mail, MapPinHouse, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-footer-color w-full overflow-hidden p-3 pt-5 sm:p-10 h-full">
      <div className="max-w-full mx-auto">
        {/* TOP Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-y-10 text-footer-text-color">
          {/* First */}
          <div className="w-full sm:w-60 md:w-50 ">
            {/* Logo */}
            <Link to="/">
              <div className="flex items-center mb-4">
                <span className="bg-primary flex w-8 h-8 mr-2 rounded-[9px] text-[18px] text-white justify-center items-center">
                  N
                </span>

                <span className="font-bold text-2xl text-white">Nova</span>

                <span className="text-primary text-2xl font-bold">SHOP</span>
              </div>
            </Link>

            <p className="leading-6 mb-4">
              Curated products for modern living. Quality you can trust,
              delivered to your door.
            </p>

            {/* Social */}
            <div className="flex">
              {["T", "I", "F", "Y"].map((letter, index) => {
                return (
                  <div
                    key={index}
                    className="mr-5 flex justify-center text-[18px] font-bold items-center w-9 h-9 bg-[#1D293D] text-footer-text-color rounded-[10px] hover:bg-primary transition-all duration-300 hover:text-white"
                  >
                    <h1>{letter}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Second */}
          <div className="w-full sm:w-40">
            <h1 className="text-[16px] font-bold mb-5">SHOP</h1>

            {[
              "All Products",
              "Best Sellers",
              "Gift Cards",
              "Sale Items",
              "New Arrivals",
            ].map((item, index) => {
              return (
                <p key={index} className="mb-2">
                  {item}
                </p>
              );
            })}
          </div>

          {/* Third */}
          <div className="w-full sm:w-40 sm:mr-15">
            <h1 className="text-[18px] font-bold mb-5">Help</h1>

            {[
              "FAQ",
              "Shipping Info",
              "Returns & Exchanges",
              "Track Order",
              "Contact Us",
            ].map((item, index) => {
              return (
                <p key={index} className="mb-2">
                  {item}
                </p>
              );
            })}
          </div>

          {/* Fourth */}
          <div className="w-full sm:w-60 sm:mr-15">
            <h1 className="mb-5 font-bold text-[18px]">Contact</h1>

            {/* Address */}
            <div className="flex gap-5 mb-3">
              <MapPinHouse className="shrink-0" />

              <p>The shop address</p>
            </div>

            {/* Email */}
            <div className="flex gap-5 mb-3">
              <Mail className="shrink-0" />

              <p>hello@novashop.com</p>
            </div>

            {/* Phone */}
            <div className="flex gap-5 mb-2">
              <Phone className="shrink-0" />

              <p>+20 010********</p>
            </div>
          </div>
        </div>

        {/* BOTTOM Footer */}
        <div className="mt-10 pt-5 border-t border-gray-700">
          <p className="text-center text-footer-text-color text-sm">
            © 2026 Nova SHOP. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
