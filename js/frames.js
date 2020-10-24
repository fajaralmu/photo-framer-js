var applicationVersion = 1;
const GROUPED_FRAME_IMAGES = [
    {
        id: "hari_santri",
        label: "Hari Santri",
        images: [
            "twibbon-hari-santri-template.png",
        ]
    },
    {
        id: "student",
        label: "Santri",
        images: [
            "PROUD-STUDENT-1.png",
            "PROUD-STUDENT-2.png"
        ]
    },
    {
        id: "teacher",
        label: "Asatidzah",
        images: [
            "PROUD-TEACHER-1.png",
            "PROUD-TEACHER-2.png"
        ]
    },
    {
        id: "alumnus",
        label: "Alumni",
        images: [
            "PROUD-ALUMNUS-1.png",
            "PROUD-ALUMNUS-2.png"
        ]
    },
    {
        id: "partOf",
        label: "Wali Santri/Calon Santri",
        images: [
            "READY-TO-BE-PART-OF-1.png",
            "READY-TO-BE-PART-OF-2.png"
        ]
    },
]

function populateFrameCategoriesMenu() {
    return new Promise(function (resolve, reject) {
        selectFrameCategory.innerHTML = "";
        for (let i = 0; i < GROUPED_FRAME_IMAGES.length; i++) {
            const frameCategory = GROUPED_FRAME_IMAGES[i];
            const option = createHtmlTag({
                tagName: 'option', value: i, innerHTML: frameCategory.label
            });
            selectFrameCategory.appendChild(option);
        }
        selectFrameCategory.onchange = function (e) {
            const selectElement = e.target;
            if (selectElement.selectedOptions) {
                displayFrameLists(selectElement.selectedOptions[0].value);
            } else if (selectElement.options[selectElement.selectedIndex]) {
                displayFrameLists(selectElement.options[selectElement.selectedIndex].value);
            } else {
                console.debug("Error change frame list");
            }

        }
        console.debug("end populateFrameCategoriesMenu");
        resolve(0);
    });
}

function displayFrameLists(frameCategoryIndex){
    frameList.innerHTML = "";
    var FRAME_IMAGES = GROUPED_FRAME_IMAGES[frameCategoryIndex].images;
    
    for (let i = 0; i < FRAME_IMAGES.length; i++) {
      const imageName = FRAME_IMAGES[i];
      const index = i;
      const listItem = createHtmlTag({
        tagName:'div', className:'col-6 border rounded',
        ch1:{
          tagName:'div',
          className:'clickable',
          style:{'text-align':'center'},
          id: imageName,
          onclick: function(e){
            frameOptionOnChange((index+1), imageName);
          }, 
          ch0: {
            tagName:'img',
            id: 'img-'+imageName,
            src: applicationVersion == 1 ? ('../assets/templates/'+imageName) : ('../../assets/templates/'+imageName),
            style:{'background-color':'#cccccc'},
            alt: imageName,   
            class:"img-thumbnail",
            onload: function(e){
              byId("label-option-"+index).innerHTML = "Option "+(index+1)
            }
          },
          ch1: {
            id:"label-option-"+index,
            tagName:'label',
            innerHTML: "Loading..."
          }
        }
      });
     
      frameList.appendChild(listItem);
    }
  }