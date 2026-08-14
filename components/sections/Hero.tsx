'use client'

import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let points: Point[] = [];

    function resize(): void {
      const ratio = window.devicePixelRatio || 1;
      
      // FIX: Added early return if canvas is somehow null during resize
      if (!canvas || !ctx) return; 

      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const pointCount = Math.min(56, Math.floor(width / 18));
      points = Array.from({ length: pointCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: 1.4 + Math.random() * 2.8
      }));
    }

    function draw(): void {
      // Need null checks for draw function as well to be completely safe
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);

      points.forEach((p: Point, i: number) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        for (let j = i + 1; j < points.length; j++) {
          const q = points[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 145) {
            ctx.strokeStyle = `rgba(126, 48, 225, ${0.13 * (1 - distance / 145)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = i % 3 === 0 ? 'rgba(25,199,179,.7)' : 'rgba(126,48,225,.55)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --background: #F3F8FF;
          --primary: #7E30E1;
          --primary-dark: #49108B;
          --accent: #E26EE5;
          --ink: #1b0f35;
          --teal: #19c7b3;
          --sky: #4aa8ff;
          --lime: #b9f56a;
          --white: #ffffff;
          --line: rgba(126, 48, 225, .13);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          margin: 0;
          background: var(--background);
          color: var(--primary-dark);
          font-family: Inter, system-ui, -apple-system, BaMacSystemFont, "Segoe UI", sans-serif;
        }

        .page {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 12%, rgba(25, 199, 179, .18), transparent 30%),
            radial-gradient(circle at 85% 18%, rgba(226, 110, 229, .18), transparent 28%),
            linear-gradient(135deg, #f7fbff 0%, #eef7ff 47%, #f8f3ff 100%);
        }

        .hero {
          position: relative;
          min-height: 92vh;
          display: grid;
          align-items: center;
          padding: 24px clamp(20px, 5vw, 72px) 56px;
          isolation: isolate;
        }

        #mesh {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: -3;
        }

        .grid-glow {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, .8), transparent 88%);
          opacity: .55;
        }

        .nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px clamp(20px, 5vw, 72px);
          z-index: 5;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--primary-dark);
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 0;
          text-decoration: none;
        }

        .brand-mark {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          color: white;
          background: linear-gradient(135deg, var(--primary), var(--teal));
          box-shadow: 0 16px 38px rgba(126, 48, 225, .25);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-a {
          color: rgba(73, 16, 139, .78);
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        .nav-cta,
        .primary-cta,
        .secondary-cta {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 8px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }

        .nav-cta {
          padding: 0 18px;
          color: white;
          background: var(--primary-dark);
          box-shadow: 0 14px 30px rgba(73, 16, 139, .22);
        }

        .hero-inner {
          width: min(1160px, 100%);
          margin: 64px auto 0;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(340px, .92fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border: 1px solid rgba(126, 48, 225, .14);
          border-radius: 999px;
          background: rgba(255, 255, 255, .72);
          color: rgba(73, 16, 139, .88);
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 16px 34px rgba(73, 16, 139, .08);
          backdrop-filter: blur(16px);
          animation: rise .7s ease both;
        }

        .live-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 0 8px rgba(25, 199, 179, .13);
        }

        h1 {
          margin: 22px 0 0;
          color: var(--ink);
          font-size: clamp(46px, 7.2vw, 92px);
          line-height: .92;
          letter-spacing: 0;
          text-wrap: balance;
          animation: rise .7s .08s ease both;
        }

        h1 span {
          color: var(--primary);
          text-shadow: 0 16px 42px rgba(126, 48, 225, .16);
        }

        .subtitle {
          max-width: 650px;
          margin: 24px 0 0;
          color: rgba(27, 15, 53, .73);
          font-size: clamp(17px, 1.8vw, 22px);
          line-height: 1.65;
          text-wrap: balance;
          animation: rise .7s .16s ease both;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
          animation: rise .7s .24s ease both;
        }

        .primary-cta {
          padding: 0 22px;
          color: white;
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          box-shadow: 0 18px 42px rgba(126, 48, 225, .26);
        }

        .secondary-cta {
          padding: 0 20px;
          color: var(--primary-dark);
          border: 1px solid rgba(73, 16, 139, .16);
          background: rgba(255, 255, 255, .68);
          backdrop-filter: blur(14px);
        }

        .primary-cta:hover,
        .secondary-cta:hover,
        .nav-cta:hover {
          transform: translateY(-2px);
        }

        .proof-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 36px;
          animation: rise .7s .32s ease both;
        }

        .proof {
          min-width: 132px;
          padding: 0 18px 0 0;
          border-right: 1px solid rgba(73, 16, 139, .14);
        }

        .proof:last-child {
          border-right: 0;
        }

        .proof strong {
          display: block;
          color: var(--ink);
          font-size: 26px;
          line-height: 1;
        }

        .proof span {
          display: block;
          margin-top: 7px;
          color: rgba(73, 16, 139, .68);
          font-size: 13px;
          font-weight: 700;
        }

        .showcase {
          position: relative;
          min-height: 520px;
          animation: floatIn .9s .18s ease both;
        }

        .orbit {
          position: absolute;
          inset: 26px 0 8px;
          border: 1px solid rgba(126, 48, 225, .14);
          border-radius: 999px;
          transform: rotate(-11deg);
          animation: orbit 18s linear infinite;
        }

        .orbit:nth-child(2) {
          inset: 86px 28px 54px;
          border-color: rgba(25, 199, 179, .24);
          transform: rotate(18deg);
          animation-duration: 24s;
          animation-direction: reverse;
        }

        .dashboard {
          position: absolute;
          inset: 78px 18px 34px;
          border: 1px solid rgba(255, 255, 255, .8);
          border-radius: 22px;
          background: rgba(255, 255, 255, .78);
          box-shadow: 0 34px 80px rgba(73, 16, 139, .16);
          backdrop-filter: blur(22px);
          overflow: hidden;
        }

        .dash-top {
          height: 58px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 18px;
          border-bottom: 1px solid rgba(126, 48, 225, .11);
          background: rgba(255, 255, 255, .62);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent);
        }

        .dot:nth-child(2) {
          background: var(--teal);
        }

        .dot:nth-child(3) {
          background: var(--lime);
        }

        .dash-body {
          display: grid;
          grid-template-columns: .78fr 1fr;
          gap: 18px;
          padding: 22px;
          height: calc(100% - 58px);
        }

        .side-panel,
        .chart-panel,
        .task-panel {
          border: 1px solid rgba(126, 48, 225, .1);
          border-radius: 12px;
          background: rgba(255, 255, 255, .7);
        }

        .side-panel {
          padding: 16px;
        }

        .mini-title {
          height: 10px;
          width: 78%;
          border-radius: 999px;
          background: rgba(73, 16, 139, .16);
        }

        .mini-line {
          height: 8px;
          margin-top: 14px;
          border-radius: 999px;
          background: rgba(73, 16, 139, .09);
        }

        .mini-line:nth-child(3) {
          width: 72%;
        }

        .mini-line:nth-child(4) {
          width: 54%;
        }

        .metric {
          margin-top: 26px;
          padding: 14px;
          border-radius: 10px;
          color: white;
          background: linear-gradient(135deg, var(--primary), var(--sky));
          box-shadow: 0 16px 36px rgba(74, 168, 255, .24);
        }

        .metric b {
          display: block;
          font-size: 31px;
          line-height: 1;
        }

        .metric small {
          display: block;
          margin-top: 8px;
          font-weight: 800;
          opacity: .84;
        }

        .right-stack {
          display: grid;
          gap: 18px;
          grid-template-rows: 1fr .72fr;
        }

        .chart-panel {
          position: relative;
          padding: 18px;
          overflow: hidden;
        }

        .bar {
          position: absolute;
          bottom: 20px;
          width: 13%;
          border-radius: 999px 999px 0 0;
          background: linear-gradient(to top, var(--primary), var(--accent));
          transform-origin: bottom;
          animation: grow 2.4s ease-in-out infinite;
        }

        .bar:nth-child(1) { left: 18%; height: 36%; animation-delay: .1s; }
        .bar:nth-child(2) { left: 36%; height: 64%; animation-delay: .3s; background: linear-gradient(to top, var(--teal), var(--sky)); }
        .bar:nth-child(3) { left: 54%; height: 47%; animation-delay: .5s; }
        .bar:nth-child(4) { left: 72%; height: 78%; animation-delay: .7s; background: linear-gradient(to top, var(--primary-dark), var(--primary)); }

        .task-panel {
          padding: 16px;
        }

        .task {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 34px;
          color: rgba(27, 15, 53, .72);
          font-size: 13px;
          font-weight: 800;
        }

        .check {
          width: 18px;
          height: 18px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: white;
          background: var(--teal);
          font-size: 12px;
        }

        .floating-chip {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 44px;
          padding: 0 14px;
          border: 1px solid rgba(255, 255, 255, .8);
          border-radius: 999px;
          background: rgba(255, 255, 255, .78);
          box-shadow: 0 20px 48px rgba(73, 16, 139, .16);
          color: var(--primary-dark);
          font-size: 13px;
          font-weight: 900;
          backdrop-filter: blur(18px);
          animation: drift 5.2s ease-in-out infinite;
        }

        .floating-chip svg {
          width: 18px;
          height: 18px;
          color: var(--primary);
        }

        .chip-one {
          top: 34px;
          right: 26px;
        }

        .chip-two {
          left: -4px;
          bottom: 88px;
          animation-delay: -2.1s;
        }

        .chip-three {
          right: 0;
          bottom: 10px;
          animation-delay: -3.2s;
        }

        .services-preview {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          background: rgba(126, 48, 225, .12);
          border-top: 1px solid rgba(126, 48, 225, .12);
        }

        .service {
          padding: 26px clamp(20px, 4vw, 54px);
          background: rgba(255, 255, 255, .64);
          min-height: 132px;
        }

        .service strong {
          display: block;
          color: var(--ink);
          font-size: 18px;
        }

        .service span {
          display: block;
          margin-top: 10px;
          color: rgba(73, 16, 139, .7);
          line-height: 1.5;
          font-size: 14px;
          font-weight: 600;
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatIn {
          from { opacity: 0; transform: translateY(22px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes drift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }

        @keyframes orbit {
          to { transform: rotate(349deg); }
        }

        @keyframes grow {
          0%, 100% { transform: scaleY(.78); }
          50% { transform: scaleY(1); }
        }

        @media (max-width: 920px) {
          .hero {
            min-height: auto;
            padding-top: 96px;
          }

          .nav {
            padding: 18px 20px;
          }

          .nav-a {
            display: none;
          }

          .hero-inner {
            grid-template-columns: 1fr;
            margin-top: 0;
          }

          .showcase {
            min-height: 430px;
          }

          .dashboard {
            inset: 54px 0 24px;
          }

          .services-preview {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .brand {
            font-size: 18px;
          }

          .nav-cta {
            min-height: 40px;
            padding: 0 12px;
            font-size: 13px;
          }

          h1 {
            font-size: clamp(42px, 13vw, 58px);
          }

          .subtitle {
            font-size: 16px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .primary-cta,
          .secondary-cta {
            width: 100%;
          }

          .proof {
            min-width: 118px;
          }

          .showcase {
            min-height: 370px;
          }

          .dash-body {
            grid-template-columns: 1fr;
            padding: 14px;
          }

          .side-panel {
            display: none;
          }

          .floating-chip {
            font-size: 12px;
          }

          .chip-two {
            left: 8px;
            bottom: 50px;
          }
        }
      `}</style>
      <main className="page">
        <section className="hero" aria-label="WebNirmit hero">
          <canvas 
            id="mesh" 
            ref={canvasRef}
            aria-hidden="true"
          />
          <div className="grid-glow" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="live-dot"></span> 
                Startup MVPs aur business tech support
              </div>
              <h1>
                WebNirmit builds <span>SaaS apps</span> that launch fast.
              </h1>
              <p className="subtitle">
                Startups ke liye production-ready SaaS applications, 14 days me MVP launch plan,
                aur non-tech companies ke liye reliable tech support. Idea se working product tak,
                team WebNirmit handles the build.
              </p>

              <div className="hero-actions">
                <a className="primary-cta" href="#contact">
                  Start Your MVP
                  <span aria-hidden="true">→</span>
                </a>
                <a className="secondary-cta" href="#services">
                  Explore Services
                </a>
              </div>

              <div className="proof-row" aria-label="Highlights">
                <div className="proof">
                  <strong>14 Days</strong>
                  <span>MVP ready app</span>
                </div>
                <div className="proof">
                  <strong>SaaS</strong>
                  <span>Startup-focused builds</span>
                </div>
                <div className="proof">
                  <strong>Support</strong>
                  <span>For non-tech teams</span>
                </div>
              </div>
            </div>

            <div className="showcase" aria-hidden="true">
              <div className="orbit"></div>
              <div className="orbit"></div>
              <div className="dashboard">
                <div className="dash-top">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="dash-body">
                  <div className="side-panel">
                    <div className="mini-title"></div>
                    <div className="mini-line"></div>
                    <div className="mini-line"></div>
                    <div className="mini-line"></div>
                    <div className="metric">
                      <b>14d</b>
                      <small>MVP sprint</small>
                    </div>
                  </div>
                  <div className="right-stack">
                    <div className="chart-panel">
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </div>
                    <div className="task-panel">
                      <div className="task">
                        <span className="check">✓</span> Auth, dashboard, billing flows
                      </div>
                      <div className="task">
                        <span className="check">✓</span> Founder-ready MVP scope
                      </div>
                      <div className="task">
                        <span className="check">✓</span> Ongoing support desk
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-chip chip-one">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 3v18M3 12h18" />
                  <path d="m18 6-12 12" />
                </svg>
                SaaS Architecture
              </div>
              <div className="floating-chip chip-two">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 19V5" />
                  <path d="M4 19h16" />
                  <path d="m7 15 4-4 3 3 5-7" />
                </svg>
                Fast MVP Delivery
              </div>
              <div className="floating-chip chip-three">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                Tech Support
              </div>
            </div>
          </div>
        </section>

        <section className="services-preview" id="services" aria-label="Service highlights">
          <div className="service">
            <strong>SaaS App Build</strong>
            <span>Dashboards, auth, payments, admin panels, APIs, and scalable product foundations.</span>
          </div>
          <div className="service">
            <strong>14-Day MVP Sprint</strong>
            <span>Sharp scope, rapid build, clean launch assets, and a product you can demo confidently.</span>
          </div>
          <div className="service">
            <strong>Tech Support</strong>
            <span>For non-tech companies that need dependable engineering help without hiring a full team.</span>
          </div>
        </section>
      </main>
    </>
  );
};

// 'use client'

// import React, { useEffect, useRef } from 'react';

// interface Point {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   r: number;
// }

// export const Hero: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number>(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let width = 0;
//     let height = 0;
//     let points: Point[] = [];

//     function resize(): void {
//       const ratio = window.devicePixelRatio || 1;
//       // width = canvas.offsetWidth;
//       width = canvas!.offsetWidth;
//       height = canvas.offsetHeight;
//       canvas.width = width * ratio;
//       canvas.height = height * ratio;
//       ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      
//       const pointCount = Math.min(56, Math.floor(width / 18));
//       points = Array.from({ length: pointCount }, () => ({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: (Math.random() - 0.5) * 0.32,
//         vy: (Math.random() - 0.5) * 0.32,
//         r: 1.4 + Math.random() * 2.8
//       }));
//     }

//     function draw(): void {
//       ctx.clearRect(0, 0, width, height);
      
//       points.forEach((p: Point, i: number) => {
//         p.x += p.vx;
//         p.y += p.vy;
        
//         if (p.x < -20) p.x = width + 20;
//         if (p.x > width + 20) p.x = -20;
//         if (p.y < -20) p.y = height + 20;
//         if (p.y > height + 20) p.y = -20;
        
//         for (let j = i + 1; j < points.length; j++) {
//           const q = points[j];
//           const dx = p.x - q.x;
//           const dy = p.y - q.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < 145) {
//             ctx.strokeStyle = `rgba(126, 48, 225, ${0.13 * (1 - distance / 145)})`;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(q.x, q.y);
//             ctx.stroke();
//           }
//         }
        
//         ctx.fillStyle = i % 3 === 0 ? 'rgba(25,199,179,.7)' : 'rgba(126,48,225,.55)';
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fill();
//       });
      
//       rafRef.current = requestAnimationFrame(draw);
//     }

//     resize();
//     draw();
    
//     window.addEventListener('resize', resize);
    
//     return () => {
//       window.removeEventListener('resize', resize);
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         :root {
//           --background: #F3F8FF;
//           --primary: #7E30E1;
//           --primary-dark: #49108B;
//           --accent: #E26EE5;
//           --ink: #1b0f35;
//           --teal: #19c7b3;
//           --sky: #4aa8ff;
//           --lime: #b9f56a;
//           --white: #ffffff;
//           --line: rgba(126, 48, 225, .13);
//         }

//         * {
//           box-sizing: border-box;
//         }

//         html {
//           scroll-behavior: smooth;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }

//         body {
//           margin: 0;
//           background: var(--background);
//           color: var(--primary-dark);
//           font-family: Inter, system-ui, -apple-system, BaMacSystemFont, "Segoe UI", sans-serif;
//         }

//         .page {
//           min-height: 100vh;
//           overflow: hidden;
//           background:
//             radial-gradient(circle at 18% 12%, rgba(25, 199, 179, .18), transparent 30%),
//             radial-gradient(circle at 85% 18%, rgba(226, 110, 229, .18), transparent 28%),
//             linear-gradient(135deg, #f7fbff 0%, #eef7ff 47%, #f8f3ff 100%);
//         }

//         .hero {
//           position: relative;
//           min-height: 92vh;
//           display: grid;
//           align-items: center;
//           padding: 24px clamp(20px, 5vw, 72px) 56px;
//           isolation: isolate;
//         }

//         #mesh {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           z-index: -3;
//         }

//         .grid-glow {
//           position: absolute;
//           inset: 0;
//           z-index: -2;
//           background-image:
//             linear-gradient(var(--line) 1px, transparent 1px),
//             linear-gradient(90deg, var(--line) 1px, transparent 1px);
//           background-size: 56px 56px;
//           mask-image: linear-gradient(to bottom, rgba(0, 0, 0, .8), transparent 88%);
//           opacity: .55;
//         }

//         .nav {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 22px clamp(20px, 5vw, 72px);
//           z-index: 5;
//         }

//         .brand {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           color: var(--primary-dark);
//           font-size: 20px;
//           font-weight: 800;
//           letter-spacing: 0;
//           text-decoration: none;
//         }

//         .brand-mark {
//           width: 34px;
//           height: 34px;
//           display: grid;
//           place-items: center;
//           border-radius: 10px;
//           color: white;
//           background: linear-gradient(135deg, var(--primary), var(--teal));
//           box-shadow: 0 16px 38px rgba(126, 48, 225, .25);
//         }

//         .nav-actions {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .nav-a {
//           color: rgba(73, 16, 139, .78);
//           font-size: 14px;
//           font-weight: 700;
//           text-decoration: none;
//         }

//         .nav-cta,
//         .primary-cta,
//         .secondary-cta {
//           display: inline-flex;
//           min-height: 46px;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           border-radius: 8px;
//           font-weight: 800;
//           text-decoration: none;
//           white-space: nowrap;
//           transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
//         }

//         .nav-cta {
//           padding: 0 18px;
//           color: white;
//           background: var(--primary-dark);
//           box-shadow: 0 14px 30px rgba(73, 16, 139, .22);
//         }

//         .hero-inner {
//           width: min(1160px, 100%);
//           margin: 64px auto 0;
//           display: grid;
//           grid-template-columns: minmax(0, 1.08fr) minmax(340px, .92fr);
//           gap: clamp(32px, 5vw, 72px);
//           align-items: center;
//         }

//         .eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 8px 12px;
//           border: 1px solid rgba(126, 48, 225, .14);
//           border-radius: 999px;
//           background: rgba(255, 255, 255, .72);
//           color: rgba(73, 16, 139, .88);
//           font-size: 13px;
//           font-weight: 800;
//           box-shadow: 0 16px 34px rgba(73, 16, 139, .08);
//           backdrop-filter: blur(16px);
//           animation: rise .7s ease both;
//         }

//         .live-dot {
//           width: 9px;
//           height: 9px;
//           border-radius: 50%;
//           background: var(--teal);
//           box-shadow: 0 0 0 8px rgba(25, 199, 179, .13);
//         }

//         h1 {
//           margin: 22px 0 0;
//           color: var(--ink);
//           font-size: clamp(46px, 7.2vw, 92px);
//           line-height: .92;
//           letter-spacing: 0;
//           text-wrap: balance;
//           animation: rise .7s .08s ease both;
//         }

//         h1 span {
//           color: var(--primary);
//           text-shadow: 0 16px 42px rgba(126, 48, 225, .16);
//         }

//         .subtitle {
//           max-width: 650px;
//           margin: 24px 0 0;
//           color: rgba(27, 15, 53, .73);
//           font-size: clamp(17px, 1.8vw, 22px);
//           line-height: 1.65;
//           text-wrap: balance;
//           animation: rise .7s .16s ease both;
//         }

//         .hero-actions {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 14px;
//           margin-top: 34px;
//           animation: rise .7s .24s ease both;
//         }

//         .primary-cta {
//           padding: 0 22px;
//           color: white;
//           background: linear-gradient(135deg, var(--primary-dark), var(--primary));
//           box-shadow: 0 18px 42px rgba(126, 48, 225, .26);
//         }

//         .secondary-cta {
//           padding: 0 20px;
//           color: var(--primary-dark);
//           border: 1px solid rgba(73, 16, 139, .16);
//           background: rgba(255, 255, 255, .68);
//           backdrop-filter: blur(14px);
//         }

//         .primary-cta:hover,
//         .secondary-cta:hover,
//         .nav-cta:hover {
//           transform: translateY(-2px);
//         }

//         .proof-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 16px;
//           margin-top: 36px;
//           animation: rise .7s .32s ease both;
//         }

//         .proof {
//           min-width: 132px;
//           padding: 0 18px 0 0;
//           border-right: 1px solid rgba(73, 16, 139, .14);
//         }

//         .proof:last-child {
//           border-right: 0;
//         }

//         .proof strong {
//           display: block;
//           color: var(--ink);
//           font-size: 26px;
//           line-height: 1;
//         }

//         .proof span {
//           display: block;
//           margin-top: 7px;
//           color: rgba(73, 16, 139, .68);
//           font-size: 13px;
//           font-weight: 700;
//         }

//         .showcase {
//           position: relative;
//           min-height: 520px;
//           animation: floatIn .9s .18s ease both;
//         }

//         .orbit {
//           position: absolute;
//           inset: 26px 0 8px;
//           border: 1px solid rgba(126, 48, 225, .14);
//           border-radius: 999px;
//           transform: rotate(-11deg);
//           animation: orbit 18s linear infinite;
//         }

//         .orbit:nth-child(2) {
//           inset: 86px 28px 54px;
//           border-color: rgba(25, 199, 179, .24);
//           transform: rotate(18deg);
//           animation-duration: 24s;
//           animation-direction: reverse;
//         }

//         .dashboard {
//           position: absolute;
//           inset: 78px 18px 34px;
//           border: 1px solid rgba(255, 255, 255, .8);
//           border-radius: 22px;
//           background: rgba(255, 255, 255, .78);
//           box-shadow: 0 34px 80px rgba(73, 16, 139, .16);
//           backdrop-filter: blur(22px);
//           overflow: hidden;
//         }

//         .dash-top {
//           height: 58px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 0 18px;
//           border-bottom: 1px solid rgba(126, 48, 225, .11);
//           background: rgba(255, 255, 255, .62);
//         }

//         .dot {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background: var(--accent);
//         }

//         .dot:nth-child(2) {
//           background: var(--teal);
//         }

//         .dot:nth-child(3) {
//           background: var(--lime);
//         }

//         .dash-body {
//           display: grid;
//           grid-template-columns: .78fr 1fr;
//           gap: 18px;
//           padding: 22px;
//           height: calc(100% - 58px);
//         }

//         .side-panel,
//         .chart-panel,
//         .task-panel {
//           border: 1px solid rgba(126, 48, 225, .1);
//           border-radius: 12px;
//           background: rgba(255, 255, 255, .7);
//         }

//         .side-panel {
//           padding: 16px;
//         }

//         .mini-title {
//           height: 10px;
//           width: 78%;
//           border-radius: 999px;
//           background: rgba(73, 16, 139, .16);
//         }

//         .mini-line {
//           height: 8px;
//           margin-top: 14px;
//           border-radius: 999px;
//           background: rgba(73, 16, 139, .09);
//         }

//         .mini-line:nth-child(3) {
//           width: 72%;
//         }

//         .mini-line:nth-child(4) {
//           width: 54%;
//         }

//         .metric {
//           margin-top: 26px;
//           padding: 14px;
//           border-radius: 10px;
//           color: white;
//           background: linear-gradient(135deg, var(--primary), var(--sky));
//           box-shadow: 0 16px 36px rgba(74, 168, 255, .24);
//         }

//         .metric b {
//           display: block;
//           font-size: 31px;
//           line-height: 1;
//         }

//         .metric small {
//           display: block;
//           margin-top: 8px;
//           font-weight: 800;
//           opacity: .84;
//         }

//         .right-stack {
//           display: grid;
//           gap: 18px;
//           grid-template-rows: 1fr .72fr;
//         }

//         .chart-panel {
//           position: relative;
//           padding: 18px;
//           overflow: hidden;
//         }

//         .bar {
//           position: absolute;
//           bottom: 20px;
//           width: 13%;
//           border-radius: 999px 999px 0 0;
//           background: linear-gradient(to top, var(--primary), var(--accent));
//           transform-origin: bottom;
//           animation: grow 2.4s ease-in-out infinite;
//         }

//         .bar:nth-child(1) { left: 18%; height: 36%; animation-delay: .1s; }
//         .bar:nth-child(2) { left: 36%; height: 64%; animation-delay: .3s; background: linear-gradient(to top, var(--teal), var(--sky)); }
//         .bar:nth-child(3) { left: 54%; height: 47%; animation-delay: .5s; }
//         .bar:nth-child(4) { left: 72%; height: 78%; animation-delay: .7s; background: linear-gradient(to top, var(--primary-dark), var(--primary)); }

//         .task-panel {
//           padding: 16px;
//         }

//         .task {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           min-height: 34px;
//           color: rgba(27, 15, 53, .72);
//           font-size: 13px;
//           font-weight: 800;
//         }

//         .check {
//           width: 18px;
//           height: 18px;
//           display: grid;
//           place-items: center;
//           border-radius: 50%;
//           color: white;
//           background: var(--teal);
//           font-size: 12px;
//         }

//         .floating-chip {
//           position: absolute;
//           display: inline-flex;
//           align-items: center;
//           gap: 9px;
//           min-height: 44px;
//           padding: 0 14px;
//           border: 1px solid rgba(255, 255, 255, .8);
//           border-radius: 999px;
//           background: rgba(255, 255, 255, .78);
//           box-shadow: 0 20px 48px rgba(73, 16, 139, .16);
//           color: var(--primary-dark);
//           font-size: 13px;
//           font-weight: 900;
//           backdrop-filter: blur(18px);
//           animation: drift 5.2s ease-in-out infinite;
//         }

//         .floating-chip svg {
//           width: 18px;
//           height: 18px;
//           color: var(--primary);
//         }

//         .chip-one {
//           top: 34px;
//           right: 26px;
//         }

//         .chip-two {
//           left: -4px;
//           bottom: 88px;
//           animation-delay: -2.1s;
//         }

//         .chip-three {
//           right: 0;
//           bottom: 10px;
//           animation-delay: -3.2s;
//         }

//         .services-preview {
//           display: grid;
//           grid-template-columns: repeat(3, minmax(0, 1fr));
//           gap: 1px;
//           background: rgba(126, 48, 225, .12);
//           border-top: 1px solid rgba(126, 48, 225, .12);
//         }

//         .service {
//           padding: 26px clamp(20px, 4vw, 54px);
//           background: rgba(255, 255, 255, .64);
//           min-height: 132px;
//         }

//         .service strong {
//           display: block;
//           color: var(--ink);
//           font-size: 18px;
//         }

//         .service span {
//           display: block;
//           margin-top: 10px;
//           color: rgba(73, 16, 139, .7);
//           line-height: 1.5;
//           font-size: 14px;
//           font-weight: 600;
//         }

//         @keyframes rise {
//           from { opacity: 0; transform: translateY(18px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes floatIn {
//           from { opacity: 0; transform: translateY(22px) scale(.98); }
//           to { opacity: 1; transform: translateY(0) scale(1); }
//         }

//         @keyframes drift {
//           0%, 100% { transform: translate3d(0, 0, 0); }
//           50% { transform: translate3d(0, -12px, 0); }
//         }

//         @keyframes orbit {
//           to { transform: rotate(349deg); }
//         }

//         @keyframes grow {
//           0%, 100% { transform: scaleY(.78); }
//           50% { transform: scaleY(1); }
//         }

//         @media (max-width: 920px) {
//           .hero {
//             min-height: auto;
//             padding-top: 96px;
//           }

//           .nav {
//             padding: 18px 20px;
//           }

//           .nav-a {
//             display: none;
//           }

//           .hero-inner {
//             grid-template-columns: 1fr;
//             margin-top: 0;
//           }

//           .showcase {
//             min-height: 430px;
//           }

//           .dashboard {
//             inset: 54px 0 24px;
//           }

//           .services-preview {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 560px) {
//           .brand {
//             font-size: 18px;
//           }

//           .nav-cta {
//             min-height: 40px;
//             padding: 0 12px;
//             font-size: 13px;
//           }

//           h1 {
//             font-size: clamp(42px, 13vw, 58px);
//           }

//           .subtitle {
//             font-size: 16px;
//           }

//           .hero-actions {
//             flex-direction: column;
//           }

//           .primary-cta,
//           .secondary-cta {
//             width: 100%;
//           }

//           .proof {
//             min-width: 118px;
//           }

//           .showcase {
//             min-height: 370px;
//           }

//           .dash-body {
//             grid-template-columns: 1fr;
//             padding: 14px;
//           }

//           .side-panel {
//             display: none;
//           }

//           .floating-chip {
//             font-size: 12px;
//           }

//           .chip-two {
//             left: 8px;
//             bottom: 50px;
//           }
//         }
//       `}</style>
//       <main className="page">
//         <section className="hero" aria-label="WebNirmit hero">
//           <canvas 
//             id="mesh" 
//             ref={canvasRef}
//             aria-hidden="true"
//           />
//           <div className="grid-glow" aria-hidden="true" />

//           <div className="hero-inner">
//             <div className="hero-copy">
//               <div className="eyebrow">
//                 <span className="live-dot"></span> 
//                 Startup MVPs aur business tech support
//               </div>
//               <h1>
//                 WebNirmit builds <span>SaaS apps</span> that launch fast.
//               </h1>
//               <p className="subtitle">
//                 Startups ke liye production-ready SaaS applications, 14 days me MVP launch plan,
//                 aur non-tech companies ke liye reliable tech support. Idea se working product tak,
//                 team WebNirmit handles the build.
//               </p>

//               <div className="hero-actions">
//                 <a className="primary-cta" href="#contact">
//                   Start Your MVP
//                   <span aria-hidden="true">→</span>
//                 </a>
//                 <a className="secondary-cta" href="#services">
//                   Explore Services
//                 </a>
//               </div>

//               <div className="proof-row" aria-label="Highlights">
//                 <div className="proof">
//                   <strong>14 Days</strong>
//                   <span>MVP ready app</span>
//                 </div>
//                 <div className="proof">
//                   <strong>SaaS</strong>
//                   <span>Startup-focused builds</span>
//                 </div>
//                 <div className="proof">
//                   <strong>Support</strong>
//                   <span>For non-tech teams</span>
//                 </div>
//               </div>
//             </div>

//             <div className="showcase" aria-hidden="true">
//               <div className="orbit"></div>
//               <div className="orbit"></div>
//               <div className="dashboard">
//                 <div className="dash-top">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//                 <div className="dash-body">
//                   <div className="side-panel">
//                     <div className="mini-title"></div>
//                     <div className="mini-line"></div>
//                     <div className="mini-line"></div>
//                     <div className="mini-line"></div>
//                     <div className="metric">
//                       <b>14d</b>
//                       <small>MVP sprint</small>
//                     </div>
//                   </div>
//                   <div className="right-stack">
//                     <div className="chart-panel">
//                       <span className="bar"></span>
//                       <span className="bar"></span>
//                       <span className="bar"></span>
//                       <span className="bar"></span>
//                     </div>
//                     <div className="task-panel">
//                       <div className="task">
//                         <span className="check">✓</span> Auth, dashboard, billing flows
//                       </div>
//                       <div className="task">
//                         <span className="check">✓</span> Founder-ready MVP scope
//                       </div>
//                       <div className="task">
//                         <span className="check">✓</span> Ongoing support desk
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="floating-chip chip-one">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
//                   <path d="M12 3v18M3 12h18" />
//                   <path d="m18 6-12 12" />
//                 </svg>
//                 SaaS Architecture
//               </div>
//               <div className="floating-chip chip-two">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
//                   <path d="M4 19V5" />
//                   <path d="M4 19h16" />
//                   <path d="m7 15 4-4 3 3 5-7" />
//                 </svg>
//                 Fast MVP Delivery
//               </div>
//               <div className="floating-chip chip-three">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
//                   <path d="M12 6v6l4 2" />
//                   <circle cx="12" cy="12" r="9" />
//                 </svg>
//                 Tech Support
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="services-preview" id="services" aria-label="Service highlights">
//           <div className="service">
//             <strong>SaaS App Build</strong>
//             <span>Dashboards, auth, payments, admin panels, APIs, and scalable product foundations.</span>
//           </div>
//           <div className="service">
//             <strong>14-Day MVP Sprint</strong>
//             <span>Sharp scope, rapid build, clean launch assets, and a product you can demo confidently.</span>
//           </div>
//           <div className="service">
//             <strong>Tech Support</strong>
//             <span>For non-tech companies that need dependable engineering help without hiring a full team.</span>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };