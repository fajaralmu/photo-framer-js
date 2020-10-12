function byId(id) {
    return document.getElementById(id);
}

/**
 * 
 * @param {*} fileInput input type file
 * @param {*} callback 
 */
function toBase64(fileInput, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {
        alert("Error Loading File");
    }
}

/**
 * 
 * @param {*} file file from iput file
 * @param {*} callback 
 */
function toBase64Multiple(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {
        alert("Error Loading File");
    }
}

/**
 * 
 * @param {Image} img 
 */
function caliberateImageSize(img) {
    const dimension = {
        width: WIDTH,
        height: HEIGHT,
        adjustedSide: null
    };
    const adjust = img.width != img.height;

    if (!adjust) {
        return dimension;
    }
    const w = img.width;
    const h = img.height;

    var adjustedSide = null;
    var finalWidth = WIDTH;
    var finalHeight = HEIGHT;
    if (w > h) {
        var multiplier = 1;
        if (h <= HEIGHT) {
            multiplier = HEIGHT / h;
        } else if (h > HEIGHT) {
            multiplier = HEIGHT / h;
        }
        finalWidth = w * multiplier;
        finalHeight = h * multiplier;

        adjustedSide = "w";
    } else {
        var multiplier = 1;
        if (w <= WIDTH) {
            multiplier = WIDTH / w;
        } else if (w > WIDTH) {
            multiplier = WIDTH / w;
        }
        finalWidth = w * multiplier;
        finalHeight = h * multiplier;

        adjustedSide = "h";
    }
    dimension.height = Math.round(finalHeight);
    dimension.width = Math.round(finalWidth);
    dimension.adjustedSide = adjustedSide;
    return dimension;
}