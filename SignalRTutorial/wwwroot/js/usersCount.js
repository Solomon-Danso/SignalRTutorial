// Establish connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

//Invoke hub method
connectionUserCount.on("updateTotalViews", (value) => {

    var newCountSpan = document.getElementById("totalViewCounter")
    newCountSpan.innerText = value.toString();


}

)



connectionUserCount.on("updateTotalUsers", (value) => {

    var newCountSpan = document.getElementById("activeUsersCounter")
    newCountSpan.innerText = value.toString();


}

)





//Invoke general method







function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}


//start connection
function fulfilled() {
    console.log("Connection to user hub is successful")
    newWindowLoadedOnClient()
}

function rejected() {
    console.log("Connection to user hub rejected")
}


connectionUserCount.start().then(fulfilled, rejected)
