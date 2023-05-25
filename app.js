var postBody = document.getElementById("create-post-body");
var backgroundName = "";
function bakgroundImage(name){
    if(name == "blue"){
        postBody.style.backgroundColor = "#25d4ff";
        postBody.style.backgroundImage = "";
        backgroundName = "blue";
    }
    else if(name == "pink"){
        postBody.style.backgroundColor = "#f35369";
        postBody.style.backgroundImage = "";
        backgroundName = "pink";
    }
    else if(name == "smile"){
        postBody.style.backgroundImage = "url('Images/smile-bg.jpg')";
        backgroundName = "smile";
    }
    else if(name == "redHeart"){
        postBody.style.backgroundImage = "url('Images/heart.png')";
        backgroundName = "redHeart";
    }
    else if(name == "babyPink"){
        postBody.style.backgroundColor = "#f3546a";
        postBody.style.backgroundImage = "";
        backgroundName = "babyPink";
    }
    else if(name == "rain"){
        postBody.style.backgroundImage = "url('Images/rain-bg.avif')";
        backgroundName = "rain";
    }
    else if(name == "blackHeart"){
        postBody.style.backgroundImage = "url('Images/black-heart.webp')";
        backgroundName = "blackHeart";
    }
    else if(name == "cat"){
        postBody.style.backgroundImage = "url('Images/black-cat.jpg')";
        backgroundName = "cat";
    }

}

var bg2 = document.querySelector("#bg-2");
var bg3 = document.querySelector("#bg-3");
var bg4 = document.querySelector("#bg-4");
var bg5 = document.querySelector("#bg-5");
var bg6 = document.querySelector("#bg-6");
var bg7 = document.querySelector("#bg-7");
var bg8 = document.querySelector("#bg-8");
var bg9 = document.querySelector("#bg-9");
// console.log(bg)
var showOrHide = document.getElementById("showOrHide");
var bgShowOrHide = "";
function showOrHideBG(){
    if(bgShowOrHide == ""){
        bg2.style.display = "flex";
        bg3.style.display = "flex";
        bg4.style.display = "flex";
        bg5.style.display = "flex";
        bg6.style.display = "flex";
        bg7.style.display = "flex";
        bg8.style.display = "flex";
        bg9.style.display = "flex";
        showOrHide.innerHTML = '<i class="fa-regular fa-less-than"></i>'
        bgShowOrHide = "done"
    }else{
        bg2.style.display = "none";
        bg3.style.display = "none";
        bg4.style.display = "none";
        bg5.style.display = "none";
        bg6.style.display = "none";
        bg7.style.display = "none";
        bg8.style.display = "none";
        bg9.style.display = "none";
        showOrHide.innerHTML = '<img src="Images/font-color-icon.png" alt="" class="bg-icon-img">'
        bgShowOrHide = "";
    }
}

// var createPostDiv = document.getElementById("create-post-div");
var backgroundBlack = document.getElementById("background-black");

function postDiv(){
    // createPostDiv.style.display= "flex"
    backgroundBlack.style.display= "flex"
}

function postDivHide(){
    // createPostDiv.style.display= "none"
    backgroundBlack.style.display= "none"
}

