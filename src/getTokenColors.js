const {
    orange,
    background,
    foreground,
    comment,
    red
} = require("./sharedPalette")

module.exports = (palette, useItalics) => {
    const {
        stringsAndVars,
        keywordsAndTokens,
        propertiesAndMisc,
        componentsAndDeclarations,
        functionsAndTypes
    } = palette
    return [
        {
            name: "Global settings",
            settings: {
                background: background,
                foreground: foreground
            }
        },
        {
            name: "Comment",
            scope: "comment",
            settings: {
                foreground: comment
            }
        },
        {
            name: "String",
            scope: "string",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "String Quoted",
            scope: "string.quoted",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Support Constant Math",
            scope: "support.constant.math",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Number",
            scope: ["constant.numeric", "constant.character.numeric"],
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Built-in constant",
            scope: [
                "constant.language",
                "punctuation.definition.constant",
                "variable.other.constant"
            ],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "User-defined constant",
            scope: ["constant.character", "constant.other"],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Constant Character Escape",
            scope: "constant.character.escape",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "RegExp String",
            scope: ["string.regexp", "string.regexp keyword.other"],
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Comma in functions",
            scope: "meta.function punctuation.separator.comma",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "Variable",
            scope: "variable",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Keyword",
            scope: ["punctuation.accessor", "keyword"],
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Storage",
            scope: "storage",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Storage type",
            scope: [
                "storage.type",
                "meta.var.expr storage.type",
                "meta.class meta.method.declaration meta.var.expr storage.type.js"
            ],
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Class name",
            scope: ["entity.name.class", "meta.class entity.name.type.class"],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Inherited class",
            scope: "entity.other.inherited-class",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Function name",
            scope: "entity.name.function",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Function Parameters",
            scope: "variable.parameter",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Meta Tag",
            scope: ["punctuation.definition.tag", "meta.tag"],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "HTML Tag names",
            scope: [
                "support.class.component",
                "meta.tag.other.html",
                "meta.tag.other.js",
                "meta.tag.other.tsx",
                "meta.tag.tsx",
                "meta.tag.html"
            ],
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "HTML Tag names",
            scope: [
                "entity.name.tag.tsx",
                "entity.name.tag.js",
                "entity.name.tag"
            ],
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Tag attribute",
            scope: "entity.other.attribute-name",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Entity Name Tag Custom",
            scope: "entity.name.tag.custom",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Library (function & constant)",
            scope: ["support.function", "support.constant"],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Support Constant Property Value meta",
            scope: "support.constant.meta.property-value",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Library class/type",
            scope: ["support.type", "support.class"],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Support Variable DOM",
            scope: "support.variable.dom",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Invalid",
            scope: "invalid",
            settings: {
                background: red,
                foreground: foreground
            }
        },
        {
            name: "Invalid deprecated",
            scope: "invalid.deprecated",
            settings: {
                foreground: foreground,
                background: red
            }
        },
        {
            name: "Keyword Operator",
            scope: "keyword.operator",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Keyword Operator Relational",
            scope: "keyword.operator.relational",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Keyword Operator Assignment",
            scope: "keyword.operator.assignment",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Double-Slashed Comment",
            scope: "comment.line.double-slash",
            settings: {
                foreground: comment
            }
        },
        {
            name: "Null",
            scope: "constant.language.null",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Meta Brace",
            scope: "meta.brace",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "Meta Delimiter Period",
            scope: "meta.delimiter.period",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Boolean",
            scope: "constant.language.boolean",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Object Comma",
            scope: "object.comma",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "Variable Parameter Function",
            scope: "variable.parameter.function",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Support Type Property Name & entity name tags",
            scope: [
                "support.type.vendocomponentsAndDeclarations.property-name",
                "support.constant.vendocomponentsAndDeclarations.property-value",
                "support.type.property-name",
                "meta.property-list entity.name.tag"
            ],
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Entity Name tag reference in stylesheets",
            scope: "meta.property-list entity.name.tag.reference",
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Constant Other Color RGB Value Punctuation Definition Constant",
            scope: "constant.other.color.rgb-value punctuation.definition.constant",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Constant Other Color",
            scope: "constant.other.color",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Keyword Other Unit",
            scope: "keyword.other.unit",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Meta Selector",
            scope: "meta.selector",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Entity Other Attribute Name Id",
            scope: "entity.other.attribute-name.id",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Meta Property Name",
            scope: "meta.property-name",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Doctypes",
            scope: ["entity.name.tag.doctype", "meta.tag.sgml.doctype"],
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Punctuation Definition Parameters",
            scope: "punctuation.definition.parameters",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "Keyword Control Operator",
            scope: "keyword.control.operator",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Keyword Operator Logical",
            scope: "keyword.operator.logical",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Variable Instances",
            scope: [
                "variable.instance",
                "variable.other.instance",
                "variable.reaedwrite.instance",
                "variable.other.readwrite.instance"
            ],
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Variable Property Other",
            scope: [
                "variable.other.property",
                "variable.other.object.property"
            ],
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Entity Name Function",
            scope: "entity.name.function",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Keyword Operator Comparison",
            scope: "keyword.operator.comparison",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Support Constant, `new` keyword, Special Method Keyword",
            scope: [
                "support.constant",
                "keyword.other.special-method",
                "keyword.other.new"
            ],
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Support Function",
            scope: "support.function",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Invalid Broken",
            scope: "invalid.broken",
            settings: {
                background: red,
                foreground: background
            }
        },
        {
            name: "Invalid Unimplemented",
            scope: "invalid.unimplemented",
            settings: {
                background: orange,
                foreground: foreground
            }
        },
        {
            name: "Invalid Illegal",
            scope: "invalid.illegal",
            settings: {
                foreground: foreground,
                background: red
            }
        },
        {
            name: "Language Variable",
            scope: "variable.language",
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Support Variable Property",
            scope: "support.variable.property",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Variable Function",
            scope: "variable.function",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Variable Interpolation",
            scope: "variable.interpolation",
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Meta Function Call",
            scope: "meta.function-call",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Punctuation Section Embedded",
            scope: "punctuation.section.embedded",
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Template Strings",
            scope: "string.template meta.template.expression",
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Italics",
            scope: "italic",
            settings: {
                foreground: keywordsAndTokens,
                fontStyle: "italic"
            }
        },
        {
            name: "Bold",
            scope: "bold",
            settings: {
                foreground: functionsAndTypes,
                fontStyle: "bold"
            }
        },
        {
            name: "Quote",
            scope: "quote",
            settings: {
                foreground: stringsAndVars,
                fontStyle: "italic"
            }
        },
        {
            name: "Raw Code",
            scope: "raw",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "CoffeScript Variable Assignment",
            scope: "variable.assignment.coffee",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "CoffeScript Parameter Function",
            scope: "variable.parameter.function.coffee",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "CoffeeScript Assignments",
            scope: "variable.assignment.coffee",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "C# Readwrite Variables",
            scope: "variable.other.readwrite.cs",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "C# Classes & Storage types",
            scope: ["entity.name.type.class.cs", "storage.type.cs"],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "C# Namespaces",
            scope: "entity.name.type.namespace.cs",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Tag names in Stylesheets",
            scope: [
                "entity.name.tag.css",
                "entity.name.tag.less",
                "entity.name.tag.custom.css"
            ],
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Wildcard(*) selector in Stylesheets",
            scope: [
                "entity.name.tag.wildcard.css",
                "entity.name.tag.wildcard.less",
                "entity.name.tag.wildcard.scss",
                "entity.name.tag.wildcard.sass"
            ],
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "CSS Keyword Other Unit",
            scope: "keyword.other.unit.css",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Attribute Name for CSS",
            scope: "meta.attribute-selector.css entity.other.attribute-name.attribute",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Elixir Classes",
            scope: [
                "source.elixir support.type.elixir",
                "source.elixir meta.module.elixir entity.name.class.elixir"
            ],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Elixir Functions",
            scope: "source.elixir entity.name.function",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Elixir Constants",
            scope: [
                "source.elixir constant.other.symbol.elixir",
                "source.elixir constant.other.keywords.elixir"
            ],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Elixir String Punctuations",
            scope: "source.elixir punctuation.definition.string",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Elixir",
            scope: [
                "source.elixir variable.other.readwrite.module.elixir",
                "source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir"
            ],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Elixir Binary Punctuations",
            scope: "source.elixir .punctuation.binary.elixir",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Go Function Calls",
            scope: "source.go meta.function-call.go",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "ID Attribute Name in HTML",
            scope: "entity.other.attribute-name.id.html",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "HTML Punctuation Definition Tag",
            scope: "punctuation.definition.tag.html",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "HTML Doctype",
            scope: "meta.tag.sgml.doctype.html",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "JavaScript Classes",
            scope: "meta.class entity.name.type.class.js",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "JavaScript Method Declaration e.g. `constructor`",
            scope: "meta.method.declaration storage.type.js",
            settings: {
                foreground: functionsAndTypes,
                fontStyle: "normal"
            }
        },
        {
            name: "JavaScript Terminator",
            scope: "terminator.js",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "JavaScript Meta Punctuation Definition",
            scope: "meta.js punctuation.definition.js",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "Entity Names in Code Documentations",
            scope: [
                "entity.name.type.instance.jsdoc",
                "entity.name.type.instance.phpdoc"
            ],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "Other Variables in Code Documentations",
            scope: ["variable.other.jsdoc", "variable.other.phpdoc"],
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "JavaScript module import",
            scope: [
                "variable.other.meta.import.js",
                "meta.import.js variable.other"
            ],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "JavaScript Variable Parameter Function",
            scope: "variable.parameter.function.js",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "JavaScript Variable Other ReadWrite",
            scope: "variable.other.readwrite.js",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "JavaScript[React] Variable Other Object",
            scope: [
                "variable.other.object.js",
                "variable.other.object.jsx",
                "variable.object.property.js",
                "variable.object.property.jsx"
            ],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "JavaScript Variables",
            scope: ["variable.js", "variable.other.js"],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "JavaScript Entity Name Type",
            scope: ["entity.name.type.js", "entity.name.type.module.js"],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "JavaScript Support Classes",
            scope: "support.class.js",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "JSON Property Names",
            scope: "support.type.property-name.json",
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "JSON Support Constants",
            scope: "support.constant.json",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "JSON Property values (string)",
            scope: "meta.structure.dictionary.value.json string.quoted.double",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Strings in JSON values",
            scope: "string.quoted.double.json punctuation.definition.string.json",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Specific JSON Property values like null",
            scope: "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Ruby Variables",
            scope: "variable.other.ruby",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "Ruby Hashkeys",
            scope: "constant.language.symbol.hashkey.ruby",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "LESS Tag names",
            scope: "entity.name.tag.less",
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "LESS Keyword Other Unit",
            scope: "keyword.other.unit.css",
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "Attribute Name for LESS",
            scope: "meta.attribute-selector.less entity.other.attribute-name.attribute",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Markdown Headings",
            scope: "markup.heading.markdown",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Markdown Italics",
            scope: "markup.italic.markdown",
            settings: {
                foreground: keywordsAndTokens,
                fontStyle: "italic"
            }
        },
        {
            name: "Markdown Bold",
            scope: "markup.bold.markdown",
            settings: {
                foreground: functionsAndTypes,
                fontStyle: "bold"
            }
        },
        {
            name: "Markdown Quote + others",
            scope: "markup.quote.markdown",
            settings: {
                foreground: stringsAndVars,
                fontStyle: "italic"
            }
        },
        {
            name: "Markdown Raw Code + others",
            scope: "markup.inline.raw.markdown",
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Markdown Links",
            scope: [
                "markup.underline.link.markdown",
                "markup.underline.link.image.markdown"
            ],
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Markdown Link Title and Description",
            scope: [
                "string.other.link.title.markdown",
                "string.other.link.description.markdown"
            ],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "Markdown Punctuation",
            scope: [
                "punctuation.definition.string.markdown",
                "punctuation.definition.string.begin.markdown",
                "punctuation.definition.string.end.markdown",
                "meta.link.inline.markdown punctuation.definition.string"
            ],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Markdown MetaData Punctuation",
            scope: ["punctuation.definition.metadata.markdown"],
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "Markdown List Punctuation",
            scope: ["beginning.punctuation.definition.list.markdown"],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Support Classes in PHP",
            scope: "support.class.php",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Punctuations in PHP function calls",
            scope: "meta.function-call.php punctuation",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "PHP Global Variables",
            scope: "variable.other.global.php",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Declaration Punctuation in PHP Global Variables",
            scope: "variable.other.global.php punctuation.definition.variable",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Language Constants in Python",
            scope: "constant.language.python",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Python Function Parameter and Arguments",
            scope: [
                "variable.parameter.function.python",
                "meta.function-call.arguments.python"
            ],
            settings: {
                foreground: stringsAndVars
            }
        },
        {
            name: "Punctuations in Python",
            scope: "punctuation.python",
            settings: {
                foreground: foreground
            }
        },
        {
            name: "Decorator Functions in Python",
            scope: "entity.name.function.decorator.python",
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Variables in SASS At-Rules",
            scope: [
                "source.css.scss meta.at-rule variable",
                "source.css.sass meta.at-rule variable"
            ],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "Attribute Name for SASS",
            scope: [
                "meta.attribute-selector.scss entity.other.attribute-name.attribute",
                "meta.attribute-selector.sass entity.other.attribute-name.attribute"
            ],
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Tag names in SASS",
            scope: ["entity.name.tag.scss", "entity.name.tag.sass"],
            settings: {
                foreground: componentsAndDeclarations
            }
        },
        {
            name: "SASS Keyword Other Unit",
            scope: ["keyword.other.unit.scss", "keyword.other.unit.sass"],
            settings: {
                foreground: keywordsAndTokens
            }
        },
        {
            name: "TypeScript[React] Variables and Object Properties",
            scope: [
                "variable.other.readwrite.alias.ts",
                "variable.other.readwrite.alias.tsx",
                "variable.other.readwrite.ts",
                "variable.other.readwrite.tsx",
                "variable.other.object.ts",
                "variable.other.object.tsx",
                "variable.object.property.ts",
                "variable.object.property.tsx",
                "variable.other.ts",
                "variable.other.tsx",
                "variable.tsx",
                "variable.ts"
            ],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "TypeScript[React] Entity Name Types",
            scope: ["entity.name.type.ts", "entity.name.type.tsx"],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "TypeScript[React] Node Classes",
            scope: ["support.class.node.ts", "support.class.node.tsx"],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "TypeScript[React] Entity Name Types as Parameters",
            scope: [
                "meta.type.parameters.ts entity.name.type",
                "meta.type.parameters.tsx entity.name.type"
            ],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "TypeScript[React] Import Punctuations",
            scope: [
                "meta.import.ts punctuation.definition.block",
                "meta.import.tsx punctuation.definition.block"
            ],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "TypeScript[React] Punctuation Decorators",
            scope: [
                "meta.decorator punctuation.decorator.ts",
                "meta.decorator punctuation.decorator.tsx"
            ],
            settings: {
                foreground: functionsAndTypes
            }
        },
        {
            name: "TypeScript[React] Punctuation Decorators",
            scope: [
                "meta.jsx.children.tsx",
                "meta.tag.js meta.jsx.children.tsx"
            ],
            settings: {
                foreground: foreground
            }
        },
        {
            name: "YAML Entity Name Tags",
            scope: "entity.name.tag.yaml",
            settings: {
                foreground: propertiesAndMisc
            }
        },
        {
            name: "Normalize font style of certain Components",
            scope: [
                "meta.property-list.css meta.property-value.css variable.other.less",
                "meta.property-list.scss variable.scss",
                "meta.property-list.sass variable.sass",
                "keyword.operator.logical",
                "keyword.operator.arithmetic",
                "keyword.operator.bitwise",
                "keyword.operator.increment",
                "keyword.operator.ternary",
                "keyword.operator.comparison",
                "keyword.operator.assignment",
                "keyword.operator.operator",
                "keyword.operator.or.regexp",
                "punctuation.definintion.string",
                "punctuation"
            ],
            settings: {
                fontStyle: "normal"
            }
        },
        {
            name: "Italicsify certain tokens",
            scope: [
                "meta.import.ts meta.block.ts variable.other.readwrite.alias.ts",
                "meta.import.tsx meta.block.tsx variable.other.readwrite.alias.tsx",
                "meta.import.js variable.other",
                "entity.name.function.ts",
                "entity.name.function.tsx",
                "support.type.primitive",
                "entity.name.tag.yaml",
                "meta.tag.sgml.doctype.html",
                "entity.name.tag.doctype",
                "meta.tag.sgml.doctype",
                "entity.other.attribute-name",
                "entity.name.tag.custom",
                "source.js.jsx keyword.control.flow.js",
                "support.type.property.css",
                "support.function.basic_functions",
                "variable.assignment.coffee",
                "support.function.basic_functions",
                "keyword.operator.expression.typeof",
                "keyword.operator.type.annotation",
                "assignment.coffee",
                "entity.name.type.ts",
                "support.constant.math",
                "meta.object-literal.key",
                "meta.var.expr storage.type",
                "parameter",
                "string",
                "italic",
                "quote",
                "keyword",
                "storage",
                "language",
                "type .function",
                "type.function",
                "storage.type.class",
                "type.var",
                "meta.parameter",
                "variable.parameter",
                "meta.parameters",
                "keyword.control",
                "modifier",
                "this",
                "comment"
            ],
            settings: {
                fontStyle: useItalics ? "italic" : "normal"
            }
        }
    ]
}
