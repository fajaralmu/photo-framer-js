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
    reader.onload = function()  { callback(reader.result); }
    reader.onerror = function(error) {
        alert("Error Loading File");
    }
}

function clearRect(ctx, w, h){
    ctx.fillStyle = "white";
    ctx.clearRect(0,0,w,h);
  }

function toBase64v2(fileInput) {
    return new Promise(function(resolve, reject){
        try{
            const reader = new FileReader();
            reader.readAsDataURL(fileInput.files[0]);
            reader.onload = function() { resolve(reader.result); }
            reader.onerror = function(error) {
                reject(error);
            }
        }catch(e){
            reject(e);
        }
    });
   
}

/**
 * 
 * @param {*} file file from iput file
 * @param {*} callback 
 */
function toBase64Multiple(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() { callback(reader.result); }
    reader.onerror = function(error) {
        alert("Error Loading File");
    }
}

/**
 * WIDTH & HEIGHT must be set
 * @param {Image} img 
 */
function caliberateImageSize(img) {
    const dimension = { width: WIDTH,  height: HEIGHT,  adjustedSide: null };
    const adjust = img.width != img.height;

    if (!adjust) {
        return dimension;
    }
    const imageWidth = img.width;
    const imageHeight = img.height;

    var adjustedSide = null;
    var finalWidth = WIDTH;
    var finalHeight = HEIGHT;
    if (imageWidth > imageHeight) {
        var multiplier = 1;
        if (imageHeight <= HEIGHT) {
            multiplier = HEIGHT / imageHeight;
        } else if (imageHeight > HEIGHT) {
            multiplier = HEIGHT / imageHeight;
        }
        finalWidth = imageWidth * multiplier;
        finalHeight = imageHeight * multiplier;

        adjustedSide = "w";
    } else {
        var multiplier = 1;
        if (imageWidth <= WIDTH) {
            multiplier = WIDTH / imageWidth;
        } else if (imageWidth > WIDTH) {
            multiplier = WIDTH / imageWidth;
        }
        finalWidth = imageWidth * multiplier;
        finalHeight = imageHeight * multiplier;

        adjustedSide = "h";
    }
    dimension.height = Math.round(finalHeight);
    dimension.width = Math.round(finalWidth);
    dimension.adjustedSide = adjustedSide;
    return dimension;
}

///source: https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML(elmnt) {
    return new Promise(function(res, rej){
        let file, xhttp; 
    
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText; }
                if (this.status == 404) {elmnt.innerHTML = "Page not found:"+file;}

                res(0);
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("include-html");
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        
       
    }
    });
  }