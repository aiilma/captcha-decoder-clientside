async function ready() {
    let currUrl = window.location.href;

    let imageURL = document.getElementById("adcopy-puzzle-image-image");

    // setTimeout(async function () {
    //     let res = await getAndEncode(imageURL.src);
    //     console.log(res);
    // }, 5000);
    if (isImgExists()) {
        let res = await getAndEncode(imageURL.src);
        console.log(res);
    } else {
        console.log('aa');
    }
}


function makeImage(uri) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.crossOrigin = 'Anonymous';
        image.onerror = reject;
        image.src = uri;
    });
}

function getAndEncode(url) {
    return makeImage(url)
        .then(img => {
            let canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            // Copy the image contents to the canvas
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            return canvas.toDataURL();
        });
}

// 2. The extension will check to see if the image link is available.
function isImgExists() {
    let smImg = document.getElementById("adcopy-puzzle-image-image-profit");
    return (smImg !== null) ? true : false;
}

window.onload = ready;