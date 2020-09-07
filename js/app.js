function byId(id){
    return document.getElementById(id);
}

/**
 * 
 * @param {*} fileInput input type file
 * @param {*} callback 
 */
function toBase64(fileInput, callback){
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
function toBase64Multiple(file, callback){
	const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {
    	alert("Error Loading File");
    }
}