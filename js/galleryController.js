'use strict'

function renderGallery() {
    const gallery = getGallery()
    var galleryStrHTML = gallery.map(img =>
        `<img src="${img.src}" data-info="${img.info}" title="${img.info}" onClick="onImgSelect(this.src)">`
    )
    document.querySelector('.gallery-section').innerHTML = galleryStrHTML.join('')
}

function onImgSelect(imgSrc) {
    activeCategory()
    setImg(imgSrc)
    renderMeme()
    MemeModal()
    hideSearchBar()
    setGFilterBy()
    document.querySelector('.search-menu').value = ''

}

function onKeyUpSearch() {
    setTimeout(() => {
        const searchStr = document.querySelector('.search-menu').value
        setMemeFilter(searchStr)
        renderGallery()
    }, 500)
}


