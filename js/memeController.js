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
    gCtx.font = `20px ${getFontType()}`;
    gCtx.fillStyle = `${getColor()} || 'black`;
    gCtx.fillText(getText(), 10, 50);
}

function onKeyUpText() {
    setTimeout(() => {
        const textStr = document.querySelector('.text-line').value
        setLineText(textStr)
        renderMeme()
    }, 500);
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