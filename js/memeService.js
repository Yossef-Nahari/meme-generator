'use strict'

let gMeme
let gFilterBy = ''
let gTextLine = []
let gTextShow
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

function setLineText(text, isFinal) {
    if (isFinal) {
        if (!gTextLine[0]) gTextLine[0] = { text, x: 50, y: 70 }
        else if (!gTextLine[1]) gTextLine[1] = { text: text, x: 50, y: 350 }
        else if (!gTextLine[2]) gTextLine[2] = { text: text, x: 50, y: 210 }
        else return
        gTextShow = gTextLine
    }
    // } else if (!gTextLine[0]) gTextShow = { text, x: 50, y: 70 }
    // else if (gTextLine[0] && !gTextLine[1]) gTextShow = { text, x: 50, y: 350 }
    // else gTextShow = { text, x: 50, y: 210 }
}

function getTextShow() {
    if (!gTextShow) return ''
    else return gTextShow
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

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)
    console.log('formData:', formData)
    // Send a post req with the image to the server
    fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
        .then(res => res.text())
        .then(url => {
            console.log('url:', url)
            onSuccess(url)
        })
}

function setMemeFilter(searchStr) {
    gFilterBy = searchStr
}

function setGFilterBy() {
    gFilterBy = ''
}