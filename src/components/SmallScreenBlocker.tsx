import { useEffect, useState } from "react";

export default function SmallScreenBlocker() {
  const [isTooSmall, setIsTooSmall] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsTooSmall(window.innerWidth < 768); // Tailwind's `md`
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    if (isTooSmall) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isTooSmall]);

  if (!isTooSmall) return null;

  return (
    <div className="w-full h-full fixed inset-0 z-[9999] bg-gradient-to-r from-[#84b1f6] to-[#ecc2e6] flex items-center justify-center">
      <div className="bg-white rounded-[8px] px-[24px] py-[20px] max-w-[360px] w-full text-center shadow-xl">
        <h2 className="text-[16px] font-semibold text-[#111] mb-[8px]">
          Screen too small
        </h2>
        <p className="text-[14px] text-[#444]">
          Please open this application on a larger screen (tablet or desktop)
          for the best experience.
        </p>
      </div>
    </div>
  );

}
