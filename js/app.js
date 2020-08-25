function _id(id){
    return document.getElementById(id);
}

function toBase64(fileInput, callback){
	const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {
    	alert("Error Loading File");
    }
}