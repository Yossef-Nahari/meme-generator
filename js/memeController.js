'use strict'

let gCanvas
let gCtx

function renderMeme() {
    gCanvas = document.querySelector('#canvas')
    gCtx = gCanvas.getContext('2d')
    const img = new Image()
    img.src = getMeme()
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xEnd,yEnd
    // To-do: add a line of text on top
    // gCtx.font = "30px Arial";
    gCtx.fillText(getText(), 10, 50);
}

function onKeyUpText() {
    setTimeout(() => {
        const textStr = document.querySelector('.text-line').value
        setLineText(textStr)
        renderMeme()
    }, 500);
}