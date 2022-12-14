'use strict'

let gMeme
let gTextLine
let gTextFont
let gTextColor

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