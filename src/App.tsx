import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SystemAnalysis from './pages/SystemAnalysis'
import PerformanceCoPilot from './pages/PerformanceCoPilot'
import HardwareProfiling from './pages/HardwareProfiling'
import KernelBehavior from './pages/KernelBehavior'
import AppPerformance from './pages/AppPerformance'
import TuningRunning from './pages/TuningRunning'
import MemoryTuning from './pages/MemoryTuning'
import DiskFileSystems from './pages/DiskFileSystems'
import NetworkPerformance from './pages/NetworkPerformance'
import QuickReference from './pages/QuickReference'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="system-analysis" element={<SystemAnalysis />} />
          <Route path="pcp" element={<PerformanceCoPilot />} />
          <Route path="hardware-profiling" element={<HardwareProfiling />} />
          <Route path="kernel-behavior" element={<KernelBehavior />} />
          <Route path="app-performance" element={<AppPerformance />} />
          <Route path="tuning-running" element={<TuningRunning />} />
          <Route path="memory-tuning" element={<MemoryTuning />} />
          <Route path="disk-filesystems" element={<DiskFileSystems />} />
          <Route path="network-performance" element={<NetworkPerformance />} />
          <Route path="quick-reference" element={<QuickReference />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
