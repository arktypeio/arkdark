const { writeFileSync, rmSync, mkdirSync } = require("fs")
const getColors = require("./getColors")
const getTokenColors = require("./getTokenColors")
const sharedPalette = require("./sharedPalette")

rmSync("./themes", { recursive: true, force: true })
mkdirSync("./themes")

const getContent = (palette, useItalics) => {
    const colors = getColors(palette)
    const tokenColors = getTokenColors(palette, useItalics)
    const content = {
        colors,
        tokenColors
    }
    return JSON.stringify(content, null, 4)
}

const arkDarkPalette = {
    variables: "#80cff8",
    keywordsAndTokens: "#eb9f2e",
    primitives: "#f5cf8f",
    types: "#009eff",
    functions: "#80cff8"
}

const arkDarkStarkPalette = {
    variables: sharedPalette.purple,
    keywordsAndTokens: sharedPalette.green,
    primitives: sharedPalette.orange,
    types: sharedPalette.blue,
    functions: sharedPalette.yellow
}

const writeTheme = (key) => {
    const palette =
        key === "arkDarkStark" ? arkDarkStarkPalette : arkDarkPalette
    const normal = getContent(palette, false)
    writeFileSync(`./themes/${key}.json`, normal)
    // const italic = getContent(palette, true)
    // writeFileSync(`./themes/${key}Italic.json`, italic)
}

writeTheme("arkDark")
writeTheme("arkDarkStark")
