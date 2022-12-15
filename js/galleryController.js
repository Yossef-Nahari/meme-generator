'use strict'

function renderGallery() {
    const gallery = getGallery()
    var galleryStrHTML = gallery.map(img =>
        `<img src="${img.src}" data-info="${img.info}" title="${img.info}" onClick="onImgSelect(this.src)">`
    )
    document.querySelector('.gallery-section').innerHTML = galleryStrHTML.join('')
}

function onImgSelect(imgSrc) {
    setImg(imgSrc)
    renderMeme()
    MemeModal()
}