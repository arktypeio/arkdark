const shadeColor = require("./helpers/shadeColor")

module.exports = ({
    background,
    blue,
    comment,
    foreground,
    green,
    orange,
    red,
    secondary,
    selection,
    yellow,
    purple
}) => ({
    contrastActiveBorder: null,
    contrastBorder: background,
    focusBorder: background,
    foreground: foreground,
    "selection.background": null,
    errorForeground: red,
    "button.background": foreground,
    "button.foreground": background,
    "button.hoverBackground": foreground,
    "dropdown.background": background,
    "dropdown.border": secondary,
    "dropdown.foreground": foreground,
    "input.background": null,
    "input.border": comment,
    "input.foreground": foreground,
    "input.placeholderForeground": foreground,
    "inputOption.activeBorder": foreground,
    "inputValidation.errorBackground": red,
    "inputValidation.errorBorder": red,
    "inputValidation.infoBackground": blue,
    "inputValidation.infoBorder": blue,
    "inputValidation.warningBackground": orange,
    "inputValidation.warningBorder": orange,
    "scrollbar.shadow": null,
    "scrollbarSlider.activeBackground": secondary,
    "scrollbarSlider.background": `${secondary}80`,
    "scrollbarSlider.hoverBackground": secondary,
    "badge.background": background,
    "badge.foreground": foreground,
    "progressBar.background": blue,
    "list.activeSelectionBackground": secondary,
    "list.activeSelectionForeground": foreground,
    "list.dropBackground": null,
    "list.errorForeground": orange,
    "list.warningForeground": red,
    "list.focusBackground": shadeColor(secondary, 10),
    "list.focusForeground": foreground,
    "list.highlightForeground": foreground,
    "list.hoverBackground": shadeColor(secondary, 10),
    "list.hoverForeground": foreground,
    "list.inactiveSelectionBackground": secondary,
    "list.inactiveSelectionForeground": foreground,
    "activityBar.background": background,
    "activityBar.dropBackground": blue,
    "activityBar.foreground": shadeColor(secondary, 20),
    "activityBar.border": background,
    "activityBarBadge.background": blue,
    "activityBarBadge.foreground": background,
    "sideBar.background": shadeColor(background, -7.5),
    "sideBar.foreground": foreground,
    "sideBar.border": background,
    "sideBarTitle.foreground": foreground,
    "sideBarSectionHeader.background": secondary,
    "sideBarSectionHeader.foreground": foreground,
    "editorGroup.background": null,
    "editorGroup.border": null,
    "editorGroup.dropBackground": null,
    "editorGroupHeader.noTabsBackground": null,
    "editorGroupHeader.tabsBackground": background,
    "editorGroupHeader.tabsBorder": background,
    "tab.activeBackground": shadeColor(background, 5),
    "tab.activeForeground": foreground,
    "tab.border": background,
    "tab.activeBorder": comment,
    "tab.unfocusedActiveBorder": background,
    "tab.inactiveBackground": background,
    "tab.inactiveForeground": comment,
    "tab.unfocusedActiveForeground": null,
    "tab.unfocusedInactiveForeground": null,
    "editor.background": background,
    "editor.foreground": foreground,
    "editorLineNumber.foreground": comment,
    "editorCursor.foreground": blue,
    "editor.selectionBackground": selection,
    "editor.selectionHighlightBackground": selection,
    "editor.inactiveSelectionBackground": shadeColor(selection, -10),
    "editor.wordHighlightBackground": selection,
    "editor.wordHighlightStrongBackground": selection,
    "editor.findMatchBackground": null,
    "editor.findMatchHighlightBackground": selection,
    "editor.findRangeHighlightBackground": selection,
    "editor.hoverHighlightBackground": selection,
    "editor.lineHighlightBackground": selection,
    "editor.lineHighlightBorder": selection,
    "editorLink.activeForeground": shadeColor(blue, 30),
    "editor.rangeHighlightBackground": selection,
    "editorWhitespace.foreground": null,
    "editorIndentGuide.activeBackground": comment,
    "editorIndentGuide.background": secondary,
    "editorRuler.foreground": comment,
    "editorCodeLens.foreground": null,
    "editorBracketMatch.background": null,
    "editorBracketMatch.border": null,
    "editorOverviewRuler.currentContentForeground": blue,
    "editorOverviewRuler.incomingContentForeground": blue,
    "editorOverviewRuler.commonContentForeground": blue,
    "editorOverviewRuler.addedForeground": green,
    "editorOverviewRuler.deletedForeground": red,
    "editorOverviewRuler.errorForeground": red,
    "editorOverviewRuler.modifiedForeground": yellow,
    "editorOverviewRuler.warningForeground": orange,
    "editorError.foreground": red,
    "editorError.border": null,
    "editorWarning.foreground": green,
    "editorWarning.border": null,
    "editorGutter.background": null,
    "editorGutter.modifiedBackground": yellow,
    "editorGutter.addedBackground": green,
    "editorGutter.deletedBackground": red,
    "diffEditor.insertedTextBackground": `${green}25`,
    "diffEditor.insertedTextBorder": `${green}25`,
    "diffEditor.removedTextBackground": `${red}25`,
    "diffEditor.removedTextBorder": `${red}25`,
    "editorWidget.background": background,
    "editorWidget.border": null,
    "editorSuggestWidget.background": null,
    "editorSuggestWidget.border": null,
    "editorSuggestWidget.foreground": null,
    "editorSuggestWidget.highlightForeground": null,
    "editorSuggestWidget.selectedBackground": null,
    "editorHoverWidget.background": background,
    "editorHoverWidget.border": blue,
    "debugExceptionWidget.background": background,
    "debugExceptionWidget.border": blue,
    "editorMarkerNavigation.background": background,
    "editorMarkerNavigationError.background": red,
    "editorMarkerNavigationWarning.background": orange,
    "peekView.border": blue,
    "peekViewEditor.background": null,
    "peekViewEditor.matchHighlightBackground": selection,
    "peekViewResult.background": null,
    "peekViewResult.fileForeground": foreground,
    "peekViewResult.lineForeground": foreground,
    "peekViewResult.matchHighlightBackground": selection,
    "peekViewResult.selectionBackground": null,
    "peekViewResult.selectionForeground": foreground,
    "peekViewTitle.background": background,
    "peekViewTitleDescription.foreground": null,
    "peekViewTitleLabel.foreground": foreground,
    "merge.currentHeaderBackground": blue,
    "merge.currentContentBackground": null,
    "merge.incomingHeaderBackground": blue,
    "merge.incomingContentBackground": null,
    "merge.border": null,
    "panel.background": background,
    "panel.border": secondary,
    "panelTitle.activeBorder": blue,
    "panelTitle.activeForeground": foreground,
    "panelTitle.inactiveForeground": null,
    "statusBar.background": background,
    "statusBar.foreground": comment,
    "statusBar.border": background,
    "statusBar.debuggingBackground": null,
    "statusBar.debuggingForeground": null,
    "statusBar.debuggingBorder": null,
    "statusBar.noFolderForeground": null,
    "statusBar.noFolderBackground": background,
    "statusBar.noFolderBorder": null,
    "statusBarItem.activeBackground": null,
    "statusBarItem.hoverBackground": null,
    "statusBarItem.prominentBackground": null,
    "statusBarItem.prominentHoverBackground": null,
    "titleBar.activeBackground": null,
    "titleBar.activeForeground": foreground,
    "titleBar.inactiveBackground": null,
    "titleBar.inactiveForeground": null,
    "notification.background": background,
    "notification.foreground": foreground,
    "notification.buttonForeground": background,
    "notification.infoBackground": blue,
    "notification.infoForeground": background,
    "notification.warningBackground": orange,
    "notification.warningForeground": background,
    "notification.errorBackground": red,
    "notification.errorForeground": background,
    "extensionButton.prominentForeground": background,
    "extensionButton.prominentBackground": foreground,
    "extensionButton.prominentHoverBackground": foreground,
    "pickerGroup.foreground": blue,
    "pickerGroup.border": null,
    "terminal.ansiWhite": foreground,
    "terminal.ansiBlack": shadeColor(comment, 25),
    "terminal.ansiBlue": blue,
    "terminal.ansiCyan": blue,
    "terminal.ansiGreen": green,
    "terminal.ansiMagenta": red,
    "terminal.ansiRed": red,
    "terminal.ansiYellow": yellow,
    "terminal.ansiBrightWhite": foreground,
    "terminal.ansiBrightBlack": shadeColor(comment, 25),
    "terminal.ansiBrightBlue": blue,
    "terminal.ansiBrightCyan": blue,
    "terminal.ansiBrightGreen": green,
    "terminal.ansiBrightMagenta": green,
    "terminal.ansiBrightRed": red,
    "terminal.ansiBrightYellow": yellow,
    "debugToolBar.background": background,
    "welcomePage.buttonBackground": null,
    "welcomePage.buttonHoverBackground": null,
    "walkThrough.embeddedEditorBackground": null,
    "textLink.foreground": blue,
    "textLink.activeForeground": shadeColor(blue, 30),
    "gitDecoration.modifiedResourceForeground": yellow,
    "gitDecoration.deletedResourceForeground": red,
    "gitDecoration.untrackedResourceForeground": green,
    "textPreformat.foreground": yellow,
    "editorBracketHighlight.foreground1": purple,
    "editorBracketHighlight.foreground2": green,
    "editorBracketHighlight.foreground3": yellow,
    "editorBracketHighlight.unexpectedBracket.foreground": red
})
