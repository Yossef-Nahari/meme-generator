'use strict'

let gMeme
let gTextLine
let gTextFont
let gTextColor = 'black'
let gTextSize = 20
let gTextBold = ''
let gTextDirection = 'left'
let gItalicText = ''

function setMeme(imgSrc) {
    gMeme = imgSrc
}

function getMeme() {
    return gMeme
}

function setLineText(text) {
    gTextLine = text
}

function getText() {
    if (!gTextLine) return ''
    return gTextLine
}

function setFont(fontType) {
    gTextFont = fontType
}

function setColor(fontColor) {
    gTextColor = fontColor
}

function getColor() {
    return gTextColor
}

function getFontType() {
    return gTextFont
}

function setTextSize(action) {
    gTextSize += action
}

function getTextSize() {
    return gTextSize + 'px'
}

function setBoldText() {
    if (gTextBold === '') gTextBold = 'bold'
    else gTextBold = ''
}

function getBoldText() {
    return gTextBold
}

function setTextDirection(direction) {
    gTextDirection = direction
}

function getTextDirection(direction) {
    return gTextDirection
}

function setItalicText() {
    if (gItalicText === '') gItalicText = 'italic'
    else gItalicText = ''
}

function getItalicText() {
    return gItalicText
}