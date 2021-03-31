// ------Utility Logic-----
const vowels = ["a", "e", "i", "o", "u"];



// -----Business Logic-----

function identifyAllVals(text) {
    const wordArray = text.split(" ");

    wordArray.forEach(function (element) {
        const compareArray = element.split("");
        for (let i = 0; i < vowels.length; i++) {
            if (compareArray[0].toLowerCase() === vowels[i]) {
                element.concat("way")
            }
            return console.log(wordArray);
        }
    })

}

// -----User Interface Logic-----
$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        let passage = $("#passage").val();

        $("#pigLatin").html(identifyAllVals(passage));

    })
})