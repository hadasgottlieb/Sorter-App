function sortIt() {
    
    $("#submit-button").on("click", function() {
        
        console.log("function sortIt ran.");
    
        let str = $("#number-input").val();
        let strArray = str.split("").map(Number);
        //iterate over array, compare each value with first, if less, move to 
        let newString = (strArray.sort((a,b) => a-b)).join(",");

        $("#number-output").text(newString);
    });
};

$(sortIt);