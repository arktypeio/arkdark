const { writeFileSync, rmSync, mkdirSync } = require("fs")
const getColors = require("./getColors")
const getTokenColors = require("./getTokenColors")
const sharedPalette = require("./sharedPalette")

rmSync("./themes", { recursive: true, force: true })
mkdirSync("./themes")

const getContent = (palette, useItalics) => {
    const colors = getColors()
    const tokenColors = getTokenColors(palette, useItalics)
    const content = {
        colors,
        tokenColors
    }
    return JSON.stringify(content, null, 4)
}

const arkPalette = {
    stringsAndVars: "#002147",
    keywordsAndTokens: "#E3AB57",
    propertiesAndMisc: "#ff7518",
    componentsAndDeclarations: "#f51423",
    functionsAndTypes: "#ffc40c"
}

const rainbowPalette = {
    stringsAndVars: sharedPalette.blue,
    keywordsAndTokens: sharedPalette.green,
    propertiesAndMisc: sharedPalette.orange,
    componentsAndDeclarations: sharedPalette.red,
    functionsAndTypes: sharedPalette.yellow
}

const writeTheme = (key) => {
    const palette = key === "rainbow" ? rainbowPalette : arkPalette
    const normal = getContent(palette, false)
    const italic = getContent(palette, true)
    writeFileSync(`./themes/${key}.json`, normal)
    writeFileSync(`./themes/${key}Italic.json`, italic)
}

writeTheme("rainbow")
writeTheme("ark")
