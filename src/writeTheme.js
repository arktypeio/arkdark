const { writeFileSync, rmSync, mkdirSync } = require("fs")
const getColors = require("./getColors")
const getTokenColors = require("./getTokenColors")

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

const writeTheme = (key) => {
    const palette = arkDarkPalette
    const normal = getContent(palette, false)
    writeFileSync(`./themes/${key}.json`, normal)
    // const italic = getContent(palette, true)
    // writeFileSync(`./themes/${key}Italic.json`, italic)
}

writeTheme("arkDark")
