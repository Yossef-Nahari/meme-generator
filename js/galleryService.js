'use strict'

let gImgs

function createImgs() {
    const imgs = []
    for (let i = 0; i < 18; i++) {
        imgs.push(`img/${i + 1}.jpg`)
    }
    gImgs = imgs
}

function getGallery() {
    return gImgs
}