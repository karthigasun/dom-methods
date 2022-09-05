document.getElementById("trigger").addEventListener('click', cal)
    function cal(){
        const update= function () {
            let dob = document.querySelector("#dob").value,
                day = new Date(dob),
                time = day.getTime(),
                today = new Date(),
                timenow = today.getTime(),
                value = timenow - time,
                sec = Math.floor(value / 1000),
                min = Math.floor(value / (1000 * 60)),
                hour = Math.floor(value / (1000 * 60 * 60)),
                days = Math.floor(value / (1000 * 60 * 60 * 24)),
                week = Math.floor(value / (1000 * 60 * 60 * 24 * 7)),
                month = Math.floor(value / (1000 * 60 * 60 * 24 * 30.43)),
                year = Math.floor(value / (1000 * 60 * 60 * 24 * 365.25));
            let insert = function (x, y) {
                document.querySelector(x).innerHTML = y;

            }
            insert("#year", year + "-Year");
            insert("#month", month + "-Month");
            insert("#week", week + "-Week");
            insert("#days", days + "-Days");
            insert("#hour", hour + "-Hour");
            insert("#min", min + "-Min");
            insert("#sec", sec + "-Sec");
        } 

    setInterval(update, 1000);  
    }