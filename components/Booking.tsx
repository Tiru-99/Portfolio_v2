"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BookCall() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meeting" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="meeting"
      data-cal-link="aayush-tirmanwar-9cbcx9/meeting"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="group inline-flex items-center gap-4 p-2 pr-6 bg-black/40 border border-white/10 rounded-full hover:cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
        <Image
          src="/assets/profile.jpeg"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-start gap-0.5">
        <span className="text-gray-100 text-base font-medium group-hover:text-white transition-colors">
          Book a call
        </span>
        <span className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors">
          30 min meeting
        </span>
      </div>

      <div className="pl-3 pr-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
        <ArrowRight size={16} className="text-gray-400 group-hover:text-white" />
      </div>
    </button>
  );
}
