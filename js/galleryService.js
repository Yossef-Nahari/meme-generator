'use strict'

let gImgs
const gImgInfo = ['Trump', 'dogs', 'baby and dog', 'cat', 'boy', 'man in a suite', 'black boy',
    'man with an hat', 'scary boy', 'obama', 'players', 'famous people', 'leonardo',
    'black man with sunglasses', 'man with long hair', 'star wars', 'putin', 'toy story']

function createImgs() {
    const imgs = []
    for (let i = 0; i < 18; i++) {
        let obj = { src: `img/${i + 1}.jpg`, info: gImgInfo[i] }
        imgs.push(obj)
    }
    gImgs = imgs
}

function getGallery() {
    return gImgs
}

function setImg(img) {
    setMeme(img)
}