import { execSync } from "child_process"
import { name, version } from "./package.json"

const vsix = `${name}-${version}.vsix`

const commands = [
    "npm run build",
    "npx vsce package",
    `code --install-extension ${vsix}`
]

commands.map((command) => execSync(command, { stdio: "inherit" }))
