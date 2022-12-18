'use strict'

function init() {
    hideMyMemes()
    hideCanvasEditor()
    hideAbout()
    createImgs()
    renderGallery()
    popMsg('Hola and welcome to my app!', 'blue')
}

function activeCategory(currentCategory) {
    const elCategories = document.querySelectorAll('.category')
    for (let i = 0; i < elCategories.length; i++) {
        elCategories[i].classList.remove('active')
    }
    if (currentCategory) currentCategory.classList.add('active')
}

function onGallerySelect(currentCategory) {
    const elGallery = document.querySelector('.gallery-section')
    elGallery.classList.remove('hidden')
    const elSearch = document.querySelector('.menu.search')
    elSearch.classList.remove('hidden')
    activeCategory(currentCategory)
    hideMyMemes()
    hideAbout()
    hideCanvasEditor()
    renderGallery()
    resetCanvasLines()
    popMsg('Ok, let\'s start playing! 🤡', 'green')
}

function hideGallery() {
    const elGallery = document.querySelector('.gallery-section')
    elGallery.classList.add('hidden')
}

function onAboutSelect(currentCategory) {
    const elAbout = document.querySelector('.about-section')
    elAbout.classList.remove('hidden')
    activeCategory(currentCategory)
    hideSearchBar()
    hideMyMemes()
    hideGallery()
    hideCanvasEditor()
    resetCanvasLines()
    popMsg('A little bit about the app! 🧑🏻‍💻', 'green')
}

function hideAbout() {
    const elAbout = document.querySelector('.about-section')
    elAbout.classList.add('hidden')
}

function popMsg(msg, color) {
    const elPopMsg = document.querySelector('.user-msg')
    elPopMsg.innerText = msg
    elPopMsg.style.backgroundColor = `${color}`
    elPopMsg.classList.add('show')
    setTimeout(() => {
        elPopMsg.classList.remove('show')
    }, 3000)
}

function onMyMemesSelect(currentCategory) {
    const elMyMemes = document.querySelector('.my-memes-section')
    elMyMemes.classList.remove('hidden')
    activeCategory(currentCategory)
    hideSearchBar()
    hideAbout()
    hideGallery()
    hideCanvasEditor()
    renderMyMemes()
    resetCanvasLines()
    popMsg('Ok, what we have here?! 😂', 'green')
}

function hideMyMemes() {
    const elMyMemes = document.querySelector('.my-memes-section')
    elMyMemes.classList.add('hidden')
}

function MemeModal() {
    const elMemeModal = document.querySelector('.meme-modal')
    elMemeModal.classList.add('shown')
    const elMemeImg = document.querySelector('.curr-meme-img')
    elMemeImg.src = getMeme()
    setTimeout(() => {
        elMemeModal.classList.remove('shown')
    }, 6000)
}

function onCloseModal() {
    const elMemeModal = document.querySelector('.meme-modal')
    elMemeModal.classList.remove('shown')
}

function hideSearchBar() {
    const elSearch = document.querySelector('.menu.search')
    elSearch.classList.add('hidden')
}