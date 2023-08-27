const homeboxEl = document.getElementById("homebox-el");
const guestboxEl = document.getElementById("guestbox-el");
const periodNum = document.getElementById("period-num");
const saveEl = document.getElementById("save-el-1");
const saveEl2 = document.getElementById("save-el");

var homebox= 0
var guestbox = 0

function add1point() {
    homebox += 1;
    homeboxEl.textContent = homebox;
    changeColors()
}

function add2point() {
    homebox += 2
    homeboxEl.textContent = homebox
    changeColors()
}

function add4point() {
    homebox += 4
    homeboxEl.textContent = homebox
    changeColors()
}

// guest section
function add1points(x) {
    guestbox += 1
    guestboxEl.textContent = guestbox
    changeColors()
}

function add2points(){
    guestbox += 2;
    guestboxEl.textContent = guestbox;
    changeColors()
}

function add4points(){
    guestbox += 4;
    guestboxEl.textContent = guestbox;
    changeColors()
}

// save function
function homeSave(){
    let savedEntry = homebox + " - ";
    saveEl.textContent += savedEntry;
    homeboxEl.textContent = 0;
    homebox = 0;
}


function guestSave(){
    let savedEnt = guestbox + " - ";
    saveEl2.textContent += savedEnt;
    guestboxEl.textContent = 0;
    guestbox = 0;
}

function reset() {
    // location.reload()
    homebox= 0
    guestbox = 0
    homeboxEl.textContent = 0
    guestboxEl.textContent = 0
    periodNum.textContent = 1
    changeColors()
}

function changeColors(){
    if (homebox == 0 && guestbox == 0){
        homeboxEl.classList.remove("winner", "loser")
        guestboxEl.classList.remove("winner", "loser")
    }else if(guestbox > homebox){
        guestboxEl.classList.add("winner")
        homeboxEl.classList.add("loser")
        guestboxEl.classList.remove("loser")
        homeboxEl.classList.remove("winner")
    }else if (homebox > guestbox){
        homeboxEl.classList.add("winner")
        guestboxEl.classList.remove("winner")
        homeboxEl.classList.remove("loser")
        guestboxEl.classList.add("loser")
    }else{
        homeboxEl.classList.add("winner")
        guestboxEl.classList.remove("loser")
        homeboxEl.classList.remove("loser")
        guestboxEl.classList.add("winner")
    }
}