'use strict'

let gElCanvas
let gCtx

function renderMeme() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    const img = new Image()
    img.src = getMeme()
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
    hideGallery()
    showCanvasEditor()
    gCtx.font = `${getItalicText()} ${getBoldText()} ${getTextSize()} ${getFontType()}`
    gCtx.fillStyle = getColor()
    gCtx.textAlign = getTextDirection()

    if (getTextShowTemp()) {
        const { text, x, y } = getTextShowTemp()
        gCtx.fillText(text, x, y)
    }

    const lines = getTextShow()
    if (!lines) return
    if (lines.length === 1) {
        const { text, x, y } = lines[0]
        gCtx.fillText(text, x, y)
    } else {
        lines.forEach(line => {
            const { text, x, y } = line
            gCtx.fillText(text, x, y)
        })
    }
}

function onKeyUpText(ev, newLine) {
    setTimeout(() => {
        const textStr = document.querySelector('.text-line').value
        if (ev.key == 'Enter' || newLine) {
            setLineText(textStr, true)
            document.querySelector('.text-line').value = ''
        } else {
            setLineText(textStr, false)
        }
        renderMeme()
    }, 500);
}

function onSwithLine() {
    // To-do: Complete this func
    for (let i = 0; i < gTextLine.length; i++) {
        document.querySelector('.text-line').value = gTextLine[i].text
        gCtx.fillText(document.querySelector('.text-line').value, gTextLine[i].x, gTextLine[i].y)
    }
}

function onSetFont() {
    const fontType = document.querySelector('.select-font').value
    setFont(fontType)
    renderMeme()
}

function onChangeColor() {
    const fontColor = document.querySelector('.select-color').value
    setColor(fontColor)
    renderMeme()
}

function onDelete() {
    document.querySelector('.text-line').value = ''
    setLineText('')
    renderMeme()
}

function onTextSize(action) {
    setTextSize(action)
    renderMeme()
}

function onBoldText() {
    setBoldText()
    renderMeme()
}

function onTextDirection(direction) {
    setTextDirection(direction)
    renderMeme()
}

function onItalicText() {
    setItalicText()
    renderMeme()
}

function showCanvasEditor() {
    const elCanvas = document.querySelector('.canvas')
    elCanvas.classList.remove('hidden')
    const elEditor = document.querySelector('.editor-section')
    elEditor.classList.remove('hidden')
}

function hideCanvasEditor() {
    const elCanvas = document.querySelector('.canvas')
    elCanvas.classList.add('hidden')
    const elEditor = document.querySelector('.editor-section')
    elEditor.classList.add('hidden')
}

function onSaveMeme() {
    // To-do: Complete this func
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    setImgIntoMyMemes(imgContent)
}

function onDownloadMeme(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function onUploadMeme() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

function renderMyMemes() {
    const myMemes = getMyMemes()
    var myMemesStrHTML = myMemes.map(meme =>
        `<img src="${meme.src}" data-info="${meme.info}" title="${meme.info}" onClick="onImgSelect(this.src)">`
    )
    document.querySelector('.my-memes-section').innerHTML = myMemesStrHTML.join('')
}

function resetLineTextValue() {
    document.querySelector('.text-line').value = ''
}