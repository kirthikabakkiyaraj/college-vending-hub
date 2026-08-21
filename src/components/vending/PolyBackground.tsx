export function PolyBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 poly-backdrop">
      <svg
        className="h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="currentColor" className="text-primary-glow">
          <polygon points="0,0 380,0 120,290" opacity="0.35" />
          <polygon points="380,0 760,0 470,240" opacity="0.22" />
          <polygon points="1120,0 1440,0 1440,260" opacity="0.3" />
          <polygon points="1440,300 1440,640 1150,470" opacity="0.18" />
          <polygon points="0,620 300,900 0,900" opacity="0.25" />
          <polygon points="640,900 1000,900 820,660" opacity="0.2" />
        </g>
        <g fill="currentColor" className="text-machine">
          <polygon points="120,290 470,240 300,520" opacity="0.12" />
          <polygon points="1150,470 1440,640 1120,760" opacity="0.14" />
          <polygon points="300,900 640,900 430,640" opacity="0.1" />
          <polygon points="760,0 1120,0 900,220" opacity="0.1" />
        </g>
      </svg>
    </div>
  );
}
