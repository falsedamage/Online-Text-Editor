let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
'Arial',
'Arial Black',
'Bahnschrift',
'Calibri',
'Cambria',
'Cambria Math',
'Candara',
'Comic Sans MS',
'Consolas',
'Constantia',
'Corbel',
'Courier New',
'Ebrima',
'Franklin Gothic Medium',
'Gabriola',
'Gadugi',
'Georgia',
'HoloLens MDL2 Assets',
'Impact',
'Ink Free',
'Javanese Text',
'Leelawadee UI',
'Lucida Console',
'Lucida Sans Unicode',
'Malgun Gothic',
'Marlett',
'Microsoft Himalaya',
'Microsoft JhengHei',
'Microsoft New Tai Lue',
'Microsoft PhagsPa',
'Microsoft Sans Serif',
'Microsoft Tai Le',
'Microsoft YaHei',
'Microsoft Yi Baiti',
'MingLiU-ExtB',
'Mongolian Baiti',
'MS Gothic',
'MV Boli',
'Myanmar Text',
'Nirmala UI',
'Palatino Linotype',
'Segoe MDL2 Assets',
'Segoe Print',
'Segoe Script',
'Segoe UI',
'Segoe UI Historic',
'Segoe UI Emoji',
'Segoe UI Symbol',
'SimSun',
'Sitka',
'Sylfaen',
'Symbol',
'Tahoma',
'Times New Roman',
'Trebuchet MS',
'Verdana',
'Webdings',
'Wingdings',
'Yu Gothic',
];

const initialiser = () =>{
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map((value) => {
        let opt = document.createElement('option');
        opt.value = value;
        opt.innerHTML = value;
        fontName.appendChild(opt);
    });

    for (let i = 1; i <= 7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        modifyText(button.id,false,null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
});

linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL:");
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
});

const highlighter = (className, needsRemoval)=>{
    className.forEach((button)=>{
        button.addEventListener("click",()=>{
            if(needsRemoval){
                let alreadyActive = false;
                if(button.classList.contains("active")){
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add("active");
                }
            }else{
                button.classList.toggle("active");
            }
        })
    })
}

const highlighterRemover = (className)=>
{
    className.forEach((button)=>{
        button.classList.remove("active");
    });
}

window.onload=initialiser();



