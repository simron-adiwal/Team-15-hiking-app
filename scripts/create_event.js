console.log("hellodsfioajs")

// firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//         // userId = user.uid;
//         db.collection("users").doc(user.uid).get().then(function(user) {
//             // loadUserProfile(user.data());
//             console.log(user.data)
//         });
//     }
// });

let doc_ID = "blah"
console.log("Document written with ID: ", doc_ID);

function eventCreate() {
    db.collection("events").add(
        {
            Description: $("#hike_desc").val(),
            EventName: $("#event_name").val(),
            HikeName: $("#hike_name").val(),
            Length: $("#hike_length").val(),
            Meetup: $("#meetup").val(),
            Start: $("#start_time").val(),
            EventType: $('input[name="eventtype"]:checked').val()
        }
    )
        .then(function (docRef) {
            console.log("item added");
            doc_ID = String(docRef.id);
            console.log("Document written with ID: ", doc_ID);
        })
}


function radioHandling(){
    // if ($(".public").checked) {
    //     console.log('public event only')
    // } else if ($(".private").checked) {
    //     console.log('private event only')
    // }
    console.log($('input[name="eventtype"]:checked').val());

}

radioHandling();



// eventCreate();
$("#create-button").click(function () {
    eventCreate();
    $("body").html('<body> <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script> <script src="scripts/index.js"></script> <script src="scripts/landingpage.js"></script> <div id="mySidenav" class="sidenav"> <a href="profile.html">Profile</a> <a href="mytrailmates.html">My TrailMates</a> <a href="#">Create Event</a> <a href="#">Find new TrailMates</a> <a href="aboutus.html">About Us</a> <a href="hikesearch.html">Search Hikes</a> <a href="login.html">Sign out</a> </div><header> <p><span id="menu-button" onclick="openClose()"> &#9776; </span></p><div style="text-align: center"> <a href="landingpage.html"> <img alt="Help" id="logo" src="./images/TrailMates-white.png"> </a> </div></header> <h1>Review Details</h1> <div id="photo_div"> <img src="https://via.placeholder.com/250" alt=""> <p> <span id="time_span">Time and Date</span> </p></div><div id="text_div"> <h3>"<span id="event_name_span">CST T1 Survived</span>" Hike</h3> <h5><span id="hike_name_span">Garibaldi Lake</span></h5> <p><span id="public_or_private_span">Private</span></p><br><p> <strong>Meetup Location: </strong> <span id="meetup_span">Canada Place</span> </p><p> <strong>Length: </strong> <span id="length_span">8km</span> </p><br><h3>Description</h3> <p><span id="description_span">Hike to celebrate completing T1 successfully!</span></p></div><div> <button>Edit Event</button> <button>Publish Event</button> </div></body>')
    // window.location.replace("review_event.html");
    console.log("hellodsfioajs")
    console.log(doc_ID)
    // firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //         // userId = user.uid;
    //         db.collection("users").doc(user.uid).get().then(function(user) {
    //             // loadUserProfile(user.data());
    //             console.log(user.data)
    //         });
    //     }
    // });


    setTimeout(eventQuery, 500);



});

console.log(doc_ID)



function updateHTML() {
    $("#time_span").html(data1.Start)
    $("#event_name_span").html(data1.EventName)
    $("#hike_name_span").html(data1.HikeName)
    $("#public_or_private_span").html(data1.PublicOrPrivate)
    $("#meetup_span").html(data1.Meetup)
    $("#length_span").html(data1.Length)
    $("#description_span").html(data1.Description)
    $("#accessibility-value").html(data1.Accessibility)
    $("#location-value").html(data1.location)
    $("#length-value").html(data1.Length)
    $("#difficulty-value").html(data1.difficulty)
}


function eventQuery() {
    // firebase.auth().onAuthStateChanged(function (user) {
    // console.log(db.collection('hikeDetails').doc('d').collection('Garibaldi').doc('b9QOjnJUIfp70Mm7XT4P'))
    console.log("console log it here after timeout " + doc_ID)
    db.collection('events').doc(doc_ID)
        // db.collection('hikeDetails').doc('Kennedy Falls')

        // .collection('Garibaldi').doc('b9QOjnJUIfp70Mm7XT4P')
        .get()
        .then(
            doc => {
                const data1 = doc.data();
                console.log(data1)
                $("#time_span").html(data1.Start)
                $("#event_name_span").html(data1.EventName)
                $("#hike_name_span").html(data1.HikeName)
                $("#public_or_private_span").html(data1.EventType)
                $("#meetup_span").html(data1.Meetup)
                $("#length_span").html(data1.Length)
                $("#description_span").html(data1.Description)
                $("#accessibility-value").html(data1.Accessibility)
                $("#location-value").html(data1.location)
                $("#length-value").html(data1.Length)
                $("#difficulty-value").html(data1.difficulty)
            }
        )
};
// eventQuery()

// setTimeout(eventQuery, 3000);




console.log("123")
console.log(doc_ID)
