var matchInfo; teamNumber; data; redAlliance; blueAlliance; k; btn;  //* Initialize varibles

function createAlliance(i) {  //* This function creates each and concatenates each alliance number into a string
    redAlliance = James[i].alliances.blue.team_keys[0].slice(3) + " | " + James[i].alliances.blue.team_keys[1].slice(3) + " | " + James[i].alliances.blue.team_keys[2].slice(3);
    blueAlliance = James[i].alliances.red.team_keys[0].slice(3) + " | " + James[i].alliances.red.team_keys[1].slice(3) + " | " + James[i].alliances.red.team_keys[2].slice(3);
}

function makeSchedule() {  //* Makes schedule
    kidnap("/event/2019hop/matches");  //* Runs kidnap with the specified url
    James.sort(sortById("match_number"));  //* Sorts the output of the of kidnap by match number
    for (matchNumber = 0, k = 0; matchNumber < James.length; matchNumber++) {  //* For loop for creating the schedule
        if (James[matchNumber].comp_level == "qm") {  //* If statement to exclude playoff matches from schedule
            k++;
            createAlliance(matchNumber); //* Runs createAlliance to print match participants on the button
            //matchInfo = ("<a href=\"https://firescout2019.firebaseapp.com/real-scouting.html\">TEST STRING </a>");  //* Defines matchInfo as the text of the button            
	    matchInfo = ("<a href=\"https://firescout2019.firebaseapp.com/real-scouting.html\">Match " + k + ": " + redAlliance + " | vs | " + blueAlliance + "</a>");  //* Defines matchInfo as the text of the button
            btn = document.createElement("BUTTON");  //* creates a button
            btn.innerHTML = matchInfo;  //* Writes the matchInfo onto the button
            document.body.appendChild(btn);
        };
    };
};

function replacePage() {
    location.replace("./real-scouting.html");
};

/* ------------for real-scouting------------- */
function openPage(pageName, color) {
    //* Hide all elements with class="tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "";
    };

    //* Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "purple";
    };

    //* Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    //* Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;

    //* Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
};
//* Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(); {

};

/* ------------for real-scouting------------- */
