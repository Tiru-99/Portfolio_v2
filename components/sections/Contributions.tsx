"use client";

import dynamic from 'next/dynamic';

const GitHubCalendar = dynamic(() => import('react-github-calendar').then((mod) => mod.GitHubCalendar), { ssr: false });

export default function Contributions() {
  // Custom theme matching the reference image - dark green gradient
  const customTheme = {
    light: [
      '#161b22', 
      '#0e4429', 
      '#006d32', 
      '#26a641', 
      '#39d353', 
    ],
    dark: [
      '#161b22', 
      '#0e4429', 
      '#006d32', 
      '#26a641', 
      '#39d353', 
    ],
  };

  return (
    <section className="flex justify-center items-center py-16 px-8 mt-10">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-4xl font-instrument text-white">
            Contributions <span className="text-white/50">@Tiru-99</span>
          </h2>
        </div>

        <div className="bg-black p-8 rounded-2xl border border-white/15 shadow-2xl">
          {/* GitHub Calendar */}
          <div className="overflow-x-auto">
            <GitHubCalendar
              username="tiru-99"
              theme={customTheme}
              colorScheme="dark"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              showWeekdayLabels={true}
              style={{
                color: '#8b949e',
              }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
