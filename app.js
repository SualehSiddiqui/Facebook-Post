var backgroundName = "";
var postBody = document.getElementById("create-post-body");
function bakgroundImage(name) {
    if (name == "white") {
        postBody.style.backgroundColor = "#fff";
        postBody.style.backgroundImage = "";
        backgroundName = name;
    }
    else if (name == "blue") {
        postBody.style.backgroundColor = "#25d4ff";
        postBody.style.backgroundImage = "";
        backgroundName = name;
    }
    else if (name == "pink") {
        postBody.style.backgroundColor = "#f35369";
        postBody.style.backgroundImage = "";
        backgroundName = name;
    }
    else if (name == "smile") {
        postBody.style.backgroundImage = "url('Images/smile-bg.jpg')";
        backgroundName = name;
    }
    else if (name == "redHeart") {
        postBody.style.backgroundImage = "url('Images/heart-bg.jpg')";
        backgroundName = name;
    }
    else if (name == "babyPink") {
        postBody.style.backgroundColor = "#f3546a";
        postBody.style.backgroundImage = "";
        backgroundName = name;
    }
    else if (name == "rain") {
        postBody.style.backgroundImage = "url('Images/rain-bg.avif')";
        backgroundName = name;
    }
    else if (name == "blackHeart") {
        postBody.style.backgroundImage = "url('Images/black-heart.webp')";
        backgroundName = name;
    }
    else if (name == "cat") {
        postBody.style.backgroundImage = "url('Images/black-cat.jpg')";
        backgroundName = name;
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
var bg10 = document.querySelector("#bg-10");
var showOrHide = document.getElementById("showOrHide");
var bgShowOrHide = "";
function showOrHideBG() {
    if (bgShowOrHide == "") {
        bg2.style.display = "flex";
        bg3.style.display = "flex";
        bg4.style.display = "flex";
        bg5.style.display = "flex";
        bg6.style.display = "flex";
        bg7.style.display = "flex";
        bg8.style.display = "flex";
        bg9.style.display = "flex";
        bg10.style.display = "flex";
        showOrHide.innerHTML = '<i class="fa-regular fa-less-than"></i>'
        bgShowOrHide = "done"
    } else {
        bg2.style.display = "none";
        bg3.style.display = "none";
        bg4.style.display = "none";
        bg5.style.display = "none";
        bg6.style.display = "none";
        bg7.style.display = "none";
        bg8.style.display = "none";
        bg9.style.display = "none";
        bg10.style.display = "none";
        showOrHide.innerHTML = '<img src="Images/font-color-icon.png" alt="" class="bg-icon-img">'
        bgShowOrHide = "";
    }
}

var backgroundBlack = document.getElementById("background-black");
function postDiv() {
    backgroundBlack.style.display = "flex"
    backgroundName = "white";
}

function postDivHide() {
    backgroundBlack.style.display = "none"
}

var constantCurrentTime = new Date();
setInterval(function () {
    var forTime = document.getElementById("my-post-time")
    forTime.innerHTML = moment(constantCurrentTime).fromNow();
}, 1000);


var textArea = document.getElementById("create-post-body")
var allPost = document.getElementById("all-post");
var num = 0;
function post() {
    if (textArea.value.trim() != "") {
        ++num
        allPost.innerHTML += `
            <li>
                <div class="post">
                    <div class="name">
                        <div class="sub-name-1">
                            <a class="nav-link icons account-image post-img" href="#" title="Account">
                            </a>
                            <p class="account-name-time">
                                <a href="#" class="name-txt">Muhammad Sualeh Siddiqui</a>
                                <br />
                                <span class="post-time" id="post-time${num}"></span>
                            </p>
                        </div>
                        <div class="sub-name-2">
                            <i class="fa-solid fa-pen-to-square edit-icon" id="edit-icon"
                            onclick="editPost('edit')" style="color: #747576;"></i>
                            <i class="fa-solid fa-xmark xmark-icon" title="Delete" onclick="deletePost(this)"></i>
                        </div>
                    </div>
                    <div class="post-body" id ="post-background${num}">
                        ${textArea.value}
                        <div class="update" id="update" onclick="editPost('update')">
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    <div class="post-like">
                        <div class="review">
                            <i class="fa-regular fa-thumbs-up review-icon" id="Like${num}"></i>
                            <span class="review-txt">Like</span>
                        </div>
                        <div class="review">
                            <i class="fa-regular fa-comment review-icon"></i>
                            <span class="review-txt">Comment</span>
                        </div>
                        <div class="review">
                            <i class="fa-regular fa-share-from-square review-icon"></i>
                            <span class="review-txt">Share</span>
                        </div>
                    </div>
                </div>
            </li>
    `

        var postBackground = document.getElementById(`post-background${num}`)
        var font = document.getElementById("font-color");
        postBackground.style.color = font.value
        postBackground.style.fontSize = "25px"


        textArea.value = "";
        textArea.style.backgroundColor = "";
        textArea.style.backgroundImage = "";
        backgroundBlack.style.display = "none"
        var currentTime = new Date()
        var forTime = document.getElementById(`post-time${num}`)
        setInterval(function () {
            forTime.innerHTML = moment(currentTime).fromNow();
        }, 1000);

        if (backgroundName == "white") {
            postBackground.style.backgroundColor = "#fff";
        }
        else if (backgroundName == "blue") {
            postBackground.style.backgroundColor = "#25d4ff";
        }
        else if (backgroundName == "pink") {
            postBackground.style.backgroundColor = "#f35369";
        }
        else if (backgroundName == "smile") {
            postBackground.style.backgroundImage = "url('Images/smile-bg.jpg')";
        }
        else if (backgroundName == "redHeart") {
            postBackground.style.backgroundImage = "url('Images/heart-bg.jpg')";
        }
        else if (backgroundName == "babyPink") {
            postBackground.style.backgroundColor = "#f3546a";
        }
        else if (backgroundName == "rain") {
            postBackground.style.backgroundImage = "url('Images/rain-bg.avif')";
            postBackground.style.color = "#fff";
        }
        else if (backgroundName == "blackHeart") {
            postBackground.style.backgroundImage = "url('Images/black-heart.webp')";
        }
        else if (backgroundName == "cat") {
            postBackground.style.backgroundImage = "url('Images/black-cat.jpg')";
        }

    } else {
        alert("Please type something")
    }
}


function deletePost() {
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
}

function deleteAllPost() {
    allPost.innerHTML = "";
}

function editPost(action) {
    if (action == "update") {
        event.target.parentNode.parentNode.contentEditable = false;
        event.target.parentNode.style.display = "none"
    }
    else {
        event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].style.display = "flex";
        event.target.parentNode.parentNode.parentNode.childNodes[3].contentEditable = true;
        event.target.parentNode.parentNode.parentNode.childNodes[3].focus();
    }
}

var font = document.getElementById("font-color");
function changeFont() {
    textArea.style.color = font.value
}





function check() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if (email.value.trim() == "sualeh" && password.value.trim() == "sualeh") {
        window.location.href = "index.html"
    }
    else {
        alert("Incorrect correct Username or Password")
        email.value = "";
        password.value = "";
    }
}