var backgroundName = "";
function bakgroundImage(name) {
    var postBody = document.getElementById("create-post-body");
    if (name == "blue") {
        postBody.style.backgroundColor = "#25d4ff";
        postBody.style.backgroundImage = "";
        backgroundName = name;
        postBody.style.color = "#000";
    }
    else if (name == "pink") {
        postBody.style.backgroundColor = "#f35369";
        postBody.style.backgroundImage = "";
        backgroundName = name;
        postBody.style.color = "#000";
    }
    else if (name == "smile") {
        postBody.style.backgroundImage = "url('Images/smile-bg.jpg')";
        backgroundName = name;
        postBody.style.color = "#000";
    }
    else if (name == "redHeart") {
        postBody.style.backgroundImage = "url('Images/heart-bg.jpg')";
        backgroundName = name;
        postBody.style.color = "#000";
    }
    else if (name == "babyPink") {
        postBody.style.backgroundColor = "#f3546a";
        postBody.style.backgroundImage = "";
        backgroundName = name;
        postBody.style.color = "#000";
    }
    else if (name == "rain") {
        postBody.style.backgroundImage = "url('Images/rain-bg.avif')";
        backgroundName = name;
        postBody.style.color = "#000";
    }
    else if (name == "blackHeart") {
        postBody.style.backgroundImage = "url('Images/black-heart.webp')";
        backgroundName = name;
        postBody.style.color = "#000";
    }
    else if (name == "cat") {
        postBody.style.backgroundImage = "url('Images/black-cat.jpg')";
        postBody.style.color = "#fff";
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
        showOrHide.innerHTML = '<img src="Images/font-color-icon.png" alt="" class="bg-icon-img">'
        bgShowOrHide = "";
    }
}

var backgroundBlack = document.getElementById("background-black");

function postDiv() {
    backgroundBlack.style.display = "flex"
}

function postDivHide() {
    // createPostDiv.style.display= "none"
    backgroundBlack.style.display = "none"
}


var textArea = document.getElementById("create-post-body")
var allPost = document.getElementById("all-post");
var num =0;
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
                                <span class="post-time" id="post-time"></span>
                            </p>
                        </div>
                        <div class="sub-name-2">
                            <i class="fa-solid fa-xmark xmark-icon" title="Delete" onclick="deletePost(this)"></i>
                        </div>
                    </div>
                    <div class="post-body" id ="post-background${num}">${textArea.value}</div>
                    <div class="post-like">
                        <div class="review" onclick="like()">
                            <i class="fa-regular fa-thumbs-up review-icon" id="Like"></i>
                            <span class="review-txt">Like</span>
                            <!-- <i class="fa-solid fa-thumbs-up review-icon"></i> -->
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
        textArea.value = "";
        textArea.style.backgroundColor = "";
        textArea.style.backgroundImage = "";
        backgroundBlack.style.display = "none"
        var forTime = document.getElementById("post-time")
        forTime.innerHTML = moment(new Date()).fromNow();

        if (backgroundName == "blue") {
            postBackground.style.backgroundColor = "#25d4ff";
            // postBackground.style.backgroundImage = "";
        }
        else if (backgroundName == "pink") {
            postBackground.style.backgroundColor = "#f35369";
            // postBackground.style.backgroundImage = "";
        }
        else if (backgroundName == "smile") {
            postBackground.style.backgroundImage = "url('Images/smile-bg.jpg')";
        }
        else if (backgroundName == "redHeart") {
            postBackground.style.backgroundImage = "url('Images/heart.png')";
        }
        else if (backgroundName == "babyPink") {
            postBackground.style.backgroundColor = "#f3546a";
            // textArea.style.backgroundImage = "";
        }
        else if (backgroundName == "rain") {
            postBackground.style.backgroundImage = "url('Images/rain-bg.avif')";
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


function deletePost(){
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
}

var flag = false
function like(){
    var likeBtn = document.getElementById("Like");
    if(flag){
        likeBtn.className = "fa-regular fa-thumbs-up review-icon";
        flag = false;
    }
    else{
        likeBtn.className = "fa-solid fa-thumbs-up review-icon";
        flag = true;
    }
}
