function renderSorter() {
    //Adjust settings based on whether word or number is chosen
    //If number is chosen, activate number input box, change span to "digits", change orders options to "ascending" and "descending", run sortItNumber function
    //If word is chosen, activate text input box, change span to "letters", change orders options to "ABC" and "reverse ABC", run sortItText function - text transform output box to lowercase letters

    if ($("#inputs").val() === "number") {
        console.log("launch number sorter");
        $(".input-parts").text("digits");
        $("#orders-option1").text("ascending");
        $("#orders-option2").text("descending");
        $("#number-input").removeClass("inactive");
        $("#text-input").addClass("inactive");
        console.log(sortItNumber());
    } 
    
    $("#inputs").on("change", function() {
        $(".number-output").empty();
        if ($("#inputs").val() === "word") {
            console.log("launch letter sorter");
            $(".input-parts").text("letters");
            $("#orders-option1").text("abc");
            $("#orders-option2").text("reverse abc");
            $("#number-input").addClass("inactive");
            $("#text-input").removeClass("inactive");
            console.log(sortItText());
        } else if ($("#inputs").val() === "number") {
            console.log("launch number sorter");
            $(".input-parts").text("digits");
            $("#orders-option1").text("ascending");
            $("#orders-option2").text("descending");
            $("#number-input").removeClass("inactive");
            $("#text-input").addClass("inactive");
            console.log(sortItNumber());
        } ;
    })
    
};

function sortItText() {

    // Process text entered into text input box
    $("#submit-button").on("click", function() {
        console.log("function sortItText ran.");
        if ($(".text-input").val()) {
            let str = $("#text-input").val();
            let strArray = str.split("");
            let newString = "";
            if ($("#orders").val() === "abc") {
                newString = (strArray.sort());
            } else if ($("#orders").val() === "reverse abc") {
                newString = (strArray.sort().reverse());
            };
            $("#number-output").text(newString);
        };
    });
};

function sortItNumber() {
    
    $("#submit-button").on("click", function() {
        if ($(".number-input").val()) {
            console.log("function sortItNumber ran.");
        
            let str = $("#number-input").val();
            let strArray = str.split("").map(Number);
            let newString = "";
            if ($("#orders").val() === "ascending") { 
                newString = (strArray.sort((a,b) => a-b)).join("");
            } else if ($("#orders").val() === "descending") {
                newString = (strArray.sort((a,b) => b-a)).join("");
            };
            $("#number-output").text(newString);
        };
    });

};

$(renderSorter);