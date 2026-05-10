# EX442 Visual Guide — Red Hat Certified Specialist in Performance Tuning

> An interactive, deep-dive study guide for the **EX442 — Red Hat Certified Specialist in Linux Performance Tuning** exam. Built with React + Vite + Tailwind CSS.

🌐 **Live Site**: [https://prashanthgl.github.io/ex442-visual-guide/](https://prashanthgl.github.io/ex442-visual-guide/)

---

## What's Inside

This guide covers all EX442 exam objectives with deep Linux internals explanations, practical examples, and copy-ready commands:

| Topic | Coverage |
|-------|----------|
| **System Analysis Tools** | vmstat, iostat, mpstat, sar, top, powertop, perf — with /proc internals |
| **Performance Co-Pilot (PCP)** | pmcd, pmlogger, pmstat, pmrep, PMNS, custom PMDAs |
| **Hardware Profiling** | dmesg ring buffer, dmidecode SMBIOS tables, sosreport |
| **Kernel Behavior** | /proc/sys, sysctl.d, /sys sysfs, module parameters |
| **App Performance** | ps states, Valgrind suite, SystemTap, eBPF/bpftrace |
| **Tuning Running Systems** | nice/chrt, tuned profiles, cgroups v2, systemd constraints |
| **Memory Tuning** | Huge Pages (static + THP), overcommit, swappiness, NUMA, SYSV shmem |
| **Disk & File Systems** | I/O schedulers (mq-deadline/bfq/kyber), dirty writeback, mount options |
| **Network Performance** | BDP calculation, TCP/UDP buffer tuning, congestion control |
| **Quick Reference** | All commands + persistence methods cheat sheet |

---

## Running Locally

### Prerequisites
- Node.js 18+ and npm

### Development

```bash
# Clone the repo
git clone https://github.com/prashanthgl/ex442-visual-guide.git
cd ex442-visual-guide

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173/ex442-visual-guide/](http://localhost:5173/ex442-visual-guide/)

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` first (via `predeploy`), then pushes the `dist/` directory to the `gh-pages` branch.

**One-time GitHub setup**: In your repository Settings → Pages → set Source to `gh-pages` branch.

---

## Tech Stack

- **React 18** + TypeScript
- **Vite 5** — build tool
- **React Router DOM v6** with HashRouter (required for GitHub Pages)
- **Tailwind CSS v3** — utility-first styling
- **react-syntax-highlighter** — code blocks with VSCode Dark+ theme
- **lucide-react** — icons
- **recharts** — data visualizations
- **gh-pages** — one-command deployment

---

## Exam Reference

The EX442 exam is **performance-based** — you must configure a live RHEL system. Key rules:

1. ✅ **All changes must persist after reboot** — no partial credit for runtime-only changes
2. ✅ Use `/etc/sysctl.d/` for kernel parameter persistence
3. ✅ Use udev rules for device settings (I/O scheduler)
4. ✅ Use `tuned-adm profile` for system profiles
5. ✅ Use systemd unit properties for service resource limits

---

## Contributing

Found an error or want to add content? PRs welcome!

---

*Not affiliated with Red Hat. Content based on publicly available exam objectives.*
