/**
 * Utility to play a subtle "click" sound using the Web Audio API.
 * This synthesizes the sound on-the-fly, so no external audio files are needed.
 */
 export const playThemeSwitchSound = () => {
   try {
     const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
 
     const duration = 0.015; // 15ms
     const bufferSize = audioCtx.sampleRate * duration;
 
     const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
     const data = buffer.getChannelData(0);
 
     // soft white noise
     for (let i = 0; i < bufferSize; i++) {
       data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
     }
 
     const noise = audioCtx.createBufferSource();
     noise.buffer = buffer;
 
     const filter = audioCtx.createBiquadFilter();
     filter.type = "lowpass";
     filter.frequency.value = 5000; // removes harsh highs
 
     const gain = audioCtx.createGain();
     gain.gain.setValueAtTime(0.07, audioCtx.currentTime);
     gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
 
     noise.connect(filter);
     filter.connect(gain);
     gain.connect(audioCtx.destination);
 
     noise.start();
   } catch (e) {
     console.warn("Audio Context failed", e);
   }
 };

/**
 * Handles the high-end circular theme transition using the View Transitions API.
 * @param event The mouse event to determine the animation's epicenter.
 * @param isLightMode The current theme state.
 * @param toggleState Callback function to update the theme state in the component.
 */
export const performThemeTransition = (
    event: React.MouseEvent,
    isLightMode: boolean,
    toggleState: () => void
) => {
    // Fallback for browsers that don't support View Transitions API
    if (!document.startViewTransition) {
        toggleState();
        playThemeSwitchSound();
        return;
    }

    const x = event.clientX;
    const y = event.clientY;

    // Set the coordinates for the CSS clip-path animation
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);

    // Add temporary classes to trigger the CSS reveal
    document.documentElement.classList.add(isLightMode ? 'theme-transition-dark' : 'theme-transition-light');

    const transition = document.startViewTransition(() => {
        toggleState();
        playThemeSwitchSound();
    });

    // Clean up classes after the transition finishes
    transition.finished.finally(() => {
        document.documentElement.classList.remove('theme-transition-dark', 'theme-transition-light');
    });
};
