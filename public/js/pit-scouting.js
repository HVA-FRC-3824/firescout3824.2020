var robotNum = "";
weight = "";
driveTrain = "";
climbType = "";


function createPitArray() {
    robotNum = document.getElementById("robotNum").value;
    weight = document.getElementById("robotWeight").value;
    driveTrain = document.getElementById("driveTrain").value;
    climbType = document.getElementById("climbType").value;
    robotLang = document.getElementById("robotLang").value;
    if(robotNum == ''){
        robotNum = "noRobot"
    }
    var robotData = { robotNum: robotNum, weight: weight, driveTrain: driveTrain, climbType: climbType, robotLang: robotLang};
    pushPit(robotData);
}

function pushPit(data) {
    console.log(data)
    firebase.database().ref('pitScouting/' + data.robotNum).set({
        "climbType": data.climbType,
        "robotWeight": data.weight,
        "driveTrain": data.driveTrain,
        "robotLang": data.robotLang,
    })
    if(robotNum == 'robotNum'){
        alert("No Robot Entered!");
    } else {
        alert("pushed!");
    }
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}



/*function addPitToFirebase(data) {
    //if(confirm("Are you sure?") == true) {
    //}
    // "Weight": data.weight,
    firebase.database().ref('pitScouting/' + robotNum).set({
        "DriveTrain": data.driveTrain,
        "Robot Language": data.robotLang,
        "Climb Type": data.climbType,
    });
}*/
