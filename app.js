//run function it is used when ever the user write something on any of the code area
const run = () => { 
    let htmlCode = document.querySelector('#html-code').value; // value of the html code
    let cssCode = "<style>"+document.querySelector('#css-code').value+"</style>"; //value of the css code 
    let jsCode = document.querySelector('#js-code').value; // this is the value of the js code
    let result = document.querySelector('#output'); // selecting the output tab
    result.contentDocument.body.innerHTML = htmlCode + cssCode; //combining the html code with the css code
    result.contentWindow.eval(jsCode); // adding the javaScript code using the eval function
}

//function is called when the media screen is smaller
const ifMediaSmaller = () => {
    let html = document.querySelector('.html');
    let css = document.querySelector('.css');
    let js = document.querySelector('.js');

    html.addEventListener('click' , e => {
        html.classList.add('active');
        css.classList.remove('active');
        js.classList.remove('active');
        htmlCode.style.display = "block";
        cssCode.style.display = "none";
        jsCode.style.display = "none";
    })
    css.addEventListener('click' , e => {
        css.classList.add('active');
        html.classList.remove('active');
        js.classList.remove('active');
        cssCode.style.display = "block";
        htmlCode.style.display = "none";
        jsCode.style.display = "none";
    })
    js.addEventListener ('click' , e => {
        js.classList.add('active');
        css.classList.remove('active');
        html.classList.remove('active');
        jsCode.style.display = "block";
        htmlCode.style.display = "none";
        cssCode.style.display = "none";
    })
}


let htmlCode = document.querySelector('#html-code');
let cssCode = document.querySelector('#css-code');
let jsCode = document.querySelector('#js-code');
let flag = window.matchMedia('screen and (max-width:1200px)');

htmlCode.addEventListener('keyup' , run);
cssCode.addEventListener('keyup' , run);
jsCode.addEventListener('keyup' , run);

if (flag.matches) {
    ifMediaSmaller();
} else {
     htmlCode.style.display = "block";
     cssCode.style.display = "block";
     jsCode.style.display = "block";
}

window.addEventListener('change' , e => {
    flag = window.matchMedia('screen and (max-width:1200px)');
    if(flag.matches) {
        
        ifMediaSmaller();
    } else { 
    
        htmlCode.style.display = "block";
        cssCode.style.display = "block";
        jsCode.style.display = "block";
    }
})


