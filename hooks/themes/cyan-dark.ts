import type { Skin } from '../skin'

const skin: Skin = {
  name: 'cyan-dark',
  label: 'Cyan Dark',
  palette: {
    read: '#a5b4fc',
    write: '#f0abfc',
    run: '#fcd34d',
    search: '#fdba74',
    web: '#93c5fd',
    mcp: '#5eead4',
    other: '#cbd5e1',
    user: '#22d3ee',
    fg: '#e2e8f0',
    muted: '#8b9bb0',
    surface: '#1e2a33',
    zebra: '#18222a',
    ok: '#4ade80',
    err: '#f87171',
    warn: '#fbbf24',
  },
  spinner: ['Glowing', 'Pulsing', 'Scanning', 'Tracing', 'Humming', 'Charging'],
  done: ['Lit', 'Traced', 'Charged', 'Synced'],
}

export default skin
