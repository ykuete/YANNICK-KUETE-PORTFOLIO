const STROKE = "var(--color-cyan)";
const DIM = "var(--color-line)";
const AMBER = "var(--color-amber)";

function Frame({ children }) {
  return (
    <svg viewBox="0 0 300 170" className="w-full h-full">
      <rect x="0.5" y="0.5" width="299" height="169" rx="8" fill="var(--color-bg)" stroke={DIM} />
      <g opacity="0.5">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 42 + 15} y1="0" x2={i * 42 + 15} y2="170" stroke={DIM} strokeWidth="0.5" />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 42 + 15} x2="300" y2={i * 42 + 15} stroke={DIM} strokeWidth="0.5" />
        ))}
      </g>
      {children}
    </svg>
  );
}

export function DatabaseArt() {
  const tables = [
    { x: 24, y: 32, w: 74, h: 46, label: "materials" },
    { x: 130, y: 20, w: 74, h: 40, label: "properties" },
    { x: 130, y: 96, w: 74, h: 40, label: "suppliers" },
    { x: 210, y: 55, w: 66, h: 40, label: "selections" },
  ];
  return (
    <Frame>
      <line x1="98" y1="55" x2="130" y2="40" stroke={STROKE} strokeWidth="1.2" opacity="0.8" />
      <line x1="98" y1="70" x2="130" y2="116" stroke={STROKE} strokeWidth="1.2" opacity="0.8" />
      <line x1="204" y1="40" x2="210" y2="70" stroke={STROKE} strokeWidth="1.2" opacity="0.8" />
      <line x1="204" y1="116" x2="210" y2="85" stroke={STROKE} strokeWidth="1.2" opacity="0.8" />
      {tables.map((t) => (
        <g key={t.label}>
          <rect x={t.x} y={t.y} width={t.w} height={t.h} rx="3" fill="var(--color-bg-panel)" stroke={STROKE} strokeWidth="1.1" />
          <rect x={t.x} y={t.y} width={t.w} height="12" rx="3" fill={STROKE} opacity="0.18" />
          <text x={t.x + 6} y={t.y + 9} fontFamily="IBM Plex Mono" fontSize="6.5" fill={STROKE}>
            {t.label}
          </text>
          <line x1={t.x + 4} y1={t.y + 20} x2={t.x + t.w - 4} y2={t.y + 20} stroke={DIM} strokeWidth="0.6" />
          <line x1={t.x + 4} y1={t.y + 29} x2={t.x + t.w - 4} y2={t.y + 29} stroke={DIM} strokeWidth="0.6" />
          <circle cx={t.x + 8} cy={t.y + 24.5} r="1.4" fill={AMBER} />
        </g>
      ))}
    </Frame>
  );
}

export function NetworkArt() {
  return (
    <Frame>
      <rect x="26" y="60" width="58" height="50" rx="4" fill="var(--color-bg-panel)" stroke={STROKE} strokeWidth="1.1" />
      <text x="55" y="88" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="7" fill={STROKE}>
        client
      </text>
      <rect x="216" y="60" width="58" height="50" rx="4" fill="var(--color-bg-panel)" stroke={STROKE} strokeWidth="1.1" />
      <text x="245" y="88" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="7" fill={STROKE}>
        server
      </text>
      <line x1="84" y1="76" x2="216" y2="76" stroke={STROKE} strokeWidth="1.1" strokeDasharray="4 3" opacity="0.85" />
      <line x1="84" y1="96" x2="216" y2="96" stroke={AMBER} strokeWidth="1.1" strokeDasharray="4 3" opacity="0.85" />
      <text x="150" y="70" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="6.5" fill={STROKE}>
        TCP
      </text>
      <text x="150" y="112" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="6.5" fill={AMBER}>
        UDP
      </text>
      <rect x="130" y="70" width="10" height="7" rx="1.5" fill={STROKE} opacity="0.7" />
      <rect x="170" y="90" width="10" height="7" rx="1.5" fill={AMBER} opacity="0.7" />
    </Frame>
  );
}

export function TetrisArt() {
  const cells = [
    [0, 3, STROKE], [1, 3, STROKE], [1, 2, STROKE], [2, 2, STROKE],
    [4, 3, AMBER], [4, 2, AMBER], [5, 2, AMBER], [5, 1, AMBER],
    [7, 3, STROKE], [7, 2, STROKE], [7, 1, STROKE], [7, 0, STROKE],
  ];
  const S = 18, OX = 60, OY = 20;
  return (
    <Frame>
      <rect x={OX - 4} y={OY - 4} width={9 * S + 8} height={4 * S + 8} fill="none" stroke={DIM} />
      {cells.map(([cx, cy, color], i) => (
        <rect
          key={i}
          x={OX + cx * S}
          y={OY + cy * S}
          width={S - 2}
          height={S - 2}
          rx="2"
          fill={color}
          opacity="0.22"
          stroke={color}
          strokeWidth="1.1"
        />
      ))}
    </Frame>
  );
}

export function WheelArt() {
  const spokes = Array.from({ length: 8 });
  return (
    <Frame>
      <circle cx="150" cy="85" r="55" fill="none" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="150" cy="85" r="6" fill={AMBER} />
      {spokes.map((_, i) => {
        const a = (i / spokes.length) * Math.PI * 2;
        const x2 = 150 + Math.cos(a) * 55;
        const y2 = 85 + Math.sin(a) * 55;
        return <line key={i} x1="150" y1="85" x2={x2} y2={y2} stroke={DIM} strokeWidth="1" />;
      })}
      <line x1="150" y1="85" x2="150" y2="32" stroke={AMBER} strokeWidth="1.6" />
      <polygon points="150,24 145,34 155,34" fill={AMBER} />
      <circle cx="150" cy="85" r="55" fill="none" stroke={STROKE} strokeWidth="0.5" strokeDasharray="1 5" />
    </Frame>
  );
}

export const ART = {
  database: DatabaseArt,
  network: NetworkArt,
  tetris: TetrisArt,
  wheel: WheelArt,
};
