const { spawnSync } = require("child_process")

const command = process.argv[2]
const port = process.env.PORT || "8000"

const commands = {
  build: ["next", ["build"]],
  start: ["next", ["start", "-p", port]],
}

const selected = commands[command]

if (!selected) {
  console.error(`Unsupported launcher command: ${command || "(none)"}`)
  process.exit(1)
}

const [bin, args] = selected
const result = spawnSync(bin, args, {
  stdio: "inherit",
  shell: process.platform === "win32",
})

process.exit(result.status ?? 1)
