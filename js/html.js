 
/**
 * 
 * @param styleObject
 * @returns string of ';' joined style items
 */
function stringifyStyleObject(styleObject){
	const keyValueArrays = new Array();
	
	for(key in styleObject){
		const keyValue  = key+":"+styleObject[key];
		keyValueArrays.push(keyValue);
	}
	return keyValueArrays.join(';');
}

/**
 * 
 * @param {Object} object
 * @returns {HTMLElement} htmlElement
 */
function createHtmlTag(object){
	if(null == object){
		object = { tagName: 'span', innerHTML: 'invalid DOM info', style:{color: 'red'}};
	} 
	const tag = document.createElement(object.tagName);
	tag.innerHTML = object["innerHTML"] ? object["innerHTML"] : "";
	
	for(let key in object){
		if(key == 'innerHTML' || key == 'tagName'){
			continue;
		}  
		const value = object[key];
		const isNotNull = object[key] != null;
		const isStyle = key == "style";
		const isObject = isNotNull && typeof(value) ==  "object";
		const isHtmlElement = isNotNull && value instanceof HTMLElement;
		const isFunction = isNotNull && typeof(value) ==  "function";
		const isArray = isNotNull && Array.isArray(value);
		
		if(isHtmlElement){
			tag.appendChild(value);
//		}else if(isArray){
//			for (var i = 0; i < value.length; i++) {
//				const htmlTag = createHtmlTag(value[i]);
//				tag.appendChild(htmlTag);
//			}
		}else if(isObject && !isFunction){
			if(isStyle){
				tag.setAttribute(key, stringifyStyleObject(value));
			}else{ // Html DOM
			//	console.debug("will create HTML DOM of :", key);
				const htmlObject = value;

				if(key.indexOf("tag_") == 0){ //starts with
					htmlObject.tagName = key.replace("tag_", "");
				}

				const htmlTag = createHtmlTag(htmlObject);
				tag.appendChild(htmlTag);
			}
		}else if(isFunction){
			 
			tag[key] = function(e){ value(e) };
			 
		}else{
			if(key == "className"){
				key = "class";
			}
			tag.setAttribute(key, value);
		}
	}
	tag.setAttribute("dynamictag", object.tagName);
	return tag;
}


function domToString(dom){
	tempComponent.innerHTML = "";
	tempComponent.appendChild(dom);
	
	return tempComponent.innerHTML;
}
