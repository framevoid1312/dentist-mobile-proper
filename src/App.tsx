import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Floating Particles Canvas ─── */
function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    interface Particle {
      x: number;
      y: number;
      size: number;
      opacity: number;
      vx: number;
      vy: number;
    }

    let particles: Particle[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      const count = Math.floor(
        (canvas!.width * canvas!.height) / 12000
      );
      particles = [];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          size: 0.5 + Math.random() * 1.5,
          opacity: 0.2 + Math.random() * 0.6,
          vx: Math.cos(angle) * 0.3,
          vy: Math.sin(angle) * 0.3,
        });
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx!.fill();
      }
      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[3]"
    />
  );
}

/* ─── Social Icons (inline SVG, 20×20) ─── */
function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ─── Navigation Bar ─── */
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5">
      {/* Left side: logo + links */}
      <div className="flex items-center gap-4 sm:gap-8">
        <span className="text-lg md:text-xl font-bold text-white tracking-tight">
          veldara
        </span>
        <div className="hidden md:flex items-center gap-4 sm:gap-8">
          <a
            href="#"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Guides
          </a>
          <a
            href="#"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Journal
          </a>
        </div>
      </div>

      {/* Right side: social icons */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
          aria-label="Discord"
        >
          <DiscordIcon />
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero Content ─── */
function HeroContent() {
  return (
    <div className="relative z-[2] flex flex-col h-full">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Content aligned to bottom */}
      <div className="relative flex-1 flex flex-col items-center justify-end pb-24 sm:pb-28 px-4">
        {/* Small label */}
        <p className="text-sm md:text-base text-gray-400 tracking-wide mb-3 sm:mb-4">
          Our Purpose:
        </p>

        {/* Main heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl text-white text-center">
          Instantly craft immersive{" "}
          <span className="relative inline-block">
            <span className="absolute bottom-1 left-0 w-full h-[10px] bg-[#2C5C88] rounded-sm" />
            <span className="relative">3D worlds</span>
          </span>{" "}
          on the web.
        </h1>

        {/* CTA group */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
          {/* Terminal-style install box */}
          <div className="bg-[#1a1a1a] border border-gray-700/50 rounded-lg px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-3">
            <span className="text-[#2C5C88] font-mono text-sm">&gt;</span>
            <code className="text-xs sm:text-sm text-gray-200 font-mono">
              npm i @veldara/core
            </code>
          </div>

          {/* Get Started button */}
          <a
            href="#"
            className="bg-[#2C5C88] hover:bg-[#3a7aad] text-white font-medium rounded-lg px-8 py-3.5 sm:py-4 text-sm transition-colors inline-flex items-center gap-2"
          >
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
      </div>
    </div>
  );
}

/* ─── App ─── */
export default function App() {
  return (
    <>
      <ParticlesCanvas />
      <div className="relative h-screen overflow-hidden">
        {/* Video Background — first child, absolute, z-0 */}
        <div className="absolute inset-0 z-0">
          <video
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/4407/4407-1080.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <NavBar />
        <HeroContent />
      </div>
    </>
  );
}
