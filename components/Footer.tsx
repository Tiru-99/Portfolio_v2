"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import axios from "axios";

export default function Footer() {
  const [visitors, setVisitors] = useState<number>(0);
  useEffect(() => {
    axios.get("/api/visitors")
      .then((res) => {
        console.log("The response is ", res.data);
        setVisitors(res.data.uniqueVisitors);
      })
      .catch((err) => {
        console.log("Something went wrong while fetching count", err);
      });
  }, []);

  return (
    <footer className="w-full py-8 px-4 border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Made by Tiru</span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span>All rights reserved.</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-400">Visitor #{visitors.toLocaleString()}</span>
        </div>
      </div>
    </footer>
  );
}
