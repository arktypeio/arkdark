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
    variables: sharedPalette.blue,
    keywordsAndTokens: "#e3ab57",
    primitives: "#ae741e",
    types: "#47b9ff",
    functions: sharedPalette.blue
}

const arkDarkStarkPalette = {
    variables: sharedPalette.orange,
    keywordsAndTokens: sharedPalette.green,
    primitives: sharedPalette.purple,
    types: sharedPalette.blue,
    functions: sharedPalette.yellow
}

const writeTheme = (key) => {
    const palette =
        key === "arkDarkStark" ? arkDarkStarkPalette : arkDarkPalette
    const normal = getContent(palette, false)
    writeFileSync(`./themes/${key}.json`, normal)
    const italic = getContent(palette, true)
    writeFileSync(`./themes/${key}Italic.json`, italic)
}

writeTheme("arkDark")
writeTheme("arkDarkStark")
