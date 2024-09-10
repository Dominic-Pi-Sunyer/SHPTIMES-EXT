function checkStatus() {
    var currentTime = new Date();
    var currentHour = currentTime.getUTCHours() - 7; // make pst
    var currentDay = currentTime.getUTCDay();
    //Button handler belltimes open
    document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('BSID');
        var div = document.getElementById('bells'); // Replace 'yourDivId' with the actual ID of your DIV
        var isDivVisible = false; // Variable to keep track of the visibility state

        // onClick's logic below:
        link.addEventListener('click', function() {
            if (isDivVisible) {
                div.style.display = 'none'; // Hide the div
            } else {
                div.style.display = 'block'; // Show the div
            }
            isDivVisible = !isDivVisible; // Toggle the visibility state
        });
    });
//Fun task button handler
    document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('funtask');
        var div = document.getElementById('funcode'); // Replace 'yourDivId' with the actual ID of your DIV
        var isDivVisible = false; // Variable to keep track of the visibility state

        // onClick's logic below:
        link.addEventListener('click', function() {
            if (isDivVisible) {
                div.style.display = 'none'; // Hide the div
            } else {
                div.style.display = 'block'; // Show the div
            }
            isDivVisible = !isDivVisible; // Toggle the visibility state
        });
    });
//calculator handler
    document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('CCID');
        var div = document.getElementById('calculator'); // Replace 'yourDivId' with the actual ID of your DIV
        var isDivVisible = false; // Variable to keep track of the visibility state

        // onClick's logic below:
        link.addEventListener('click', function() {
            if (isDivVisible) {
                div.style.display = 'none'; // Hide the div
            } else {
                div.style.display = 'block'; // Show the div
            }
            isDivVisible = !isDivVisible; // Toggle the visibility state
        });
    });
    //besssy busstion handler
    document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('BIID');
        var div = document.getElementById('bessy'); // Replace 'yourDivId' with the actual ID of your DIV
        var isDivVisible = false; // Variable to keep track of the visibility state

        // onClick's logic below:
        link.addEventListener('click', function() {
            if (isDivVisible) {
                div.style.display = 'none'; // Hide the div
            } else {
                div.style.display = 'block'; // Show the div
            }
            isDivVisible = !isDivVisible; // Toggle the visibility state
        });
    });
//Button handler cafe times

    document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('CFID');
        var div = document.getElementById('myDIV'); // Replace 'yourDivId' with the actual ID of your DIV
        var isDivVisible = false; // Variable to keep track of the visibility state

        // onClick's logic below:
        link.addEventListener('click', function() {
            if (isDivVisible) {
                div.style.display = 'none'; // Hide the div
            } else {
                div.style.display = 'block'; // Show the div
            }
            isDivVisible = !isDivVisible; // Toggle the visibility state
        });
    });
//setting button handler
    document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('STID');
        var div = document.getElementById('settings'); // Replace 'yourDivId' with the actual ID of your DIV
        var isDivVisible = false; // Variable to keep track of the visibility state

        // onClick's logic below:
        link.addEventListener('click', function() {
            if (isDivVisible) {
                div.style.display = 'none'; // Hide the div
            } else {
                div.style.display = 'block'; // Show the div
            }
            isDivVisible = !isDivVisible; // Toggle the visibility state
        });
    });
//Button handler change them
// The handler also must go in a .js file
    function handler() {
        /* ... */
    }
    // nor times
    var openingHours = [
        { start: 8, end: 8, minuteStart: 0, minuteEnd: 25 },
        { start: 9, end: 9, minuteStart: 25, minuteEnd: 50 },
        { start: 12, end: 12, minuteStart: 5, minuteEnd: 55 }
    ];
    //wed times
    if (currentDay === 3) {
        openingHours = [
            { start: 9, end: 9, minuteStart: 0, minuteEnd: 25 },
            { start: 11, end: 12, minuteStart: 35, minuteEnd: 25 }
        ];
    }
    var isOpen = openingHours.some(function (timeRange) {
        return (
            currentHour == timeRange.start &&
            currentTime.getUTCMinutes() >= timeRange.minuteStart &&
            (currentHour < timeRange.end || (currentHour == timeRange.end && currentTime.getUTCMinutes() <= timeRange.minuteEnd))
        );
    });
//Bell button
}
checkStatus();
setInterval(checkStatus, 60000);
function bellsfun() {
    var x = document.getElementById("bells");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function sjustfun() {
    var x = document.getElementById("sugetions");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function busTimesfun() {
    var x = document.getElementById("busTimes");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function settingfun() {
    var x = document.getElementById("settings");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function BIfuntion() {
    var x = document.getElementById("BIID");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggletheme');

    toggleButton.addEventListener('click', function() {
        toggleDarkMode();
    });

    // Check user preference and apply theme accordingly
    var isDarkMode = getCookie("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
});

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Save user preference to a cookie
    var isDarkMode = element.classList.contains("dark-mode");
    setCookie("darkMode", isDarkMode.toString(), 365);
}

// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
// Caculcaotr

function clearScreen() {
    document.getElementById("result").value = "";
}

// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}