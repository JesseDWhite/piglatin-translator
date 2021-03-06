<!-- # _{Application Name}_
#### _{Brief description of application}_
#### By _**{List of contributors}**
## Technologies Used
* _List all_
* _the major technologies_
* _you used in your project_
* _here
## Description
_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}
## Setup/Installation Requirements
* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_
_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_
## Known Bugs
* _Any known issues_
* _should go here_
## License
_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_
## Contact Information
_{Add your contact information here.}_ -->
## Specs

Describe identifyAllVowels()

Test: "It should turn the passage provided to an Array."
Code: identifyAllVowles("cats catered the event")
Expected Output: ["cats", "catered", "the", "event"]

Test: "It should identify any vowel within any word."
Code: identifyAllVowles("cats catered the event")
Expected Output: 7

Test: "It should identify if a vowel is at the beginning of the word."
Code: identifyAllVowels("cats catered the event")
Expected Output: 1

Test: "It should concat the string "way" to the end of the word."
Code indentifyAllVowels("cats catered the event")
Expected Output: "eventway"

Test: "It should return the altered string back to the original passage."
Code indentifyAllVowels("cats catered the event")
Expected Output: "cats catered the eventway"

Describe beginningConsonants()

Test: "It should turn the passage provided to an Array."
Code: beginningConsonants("cats catered the event")
Expected Output: ["cats", "catered", "the", "event"] ethay

Test: "It should return a consonant from any string within the array"
Code: beginningConsonants("cats catered the event")
Expected Output: ["c", "t", "s", "c", "t", "r", "d", "t", "h", "v", "n", "t"]

Test: "It should return only consonants at the beginning of the string's index."
Code: beginningConsonants("cats catered the event")
Expected Output: ["c", "c", "t"]

Test: "If there are two consonants at the beginning return both."
Code: beginningConsonants("the");
Expected Output: ["th"]

Test: "Concat the first two consonants to the string."
Code: beginningCOnsonants("the");
Expected Output: ["eth"]

Test: "Concat the last to letters of the string to ay."
Code: beginningConsonants("the);
Expected Output: ["ethay"]

Describe specificConsonants()

Test: "It should test whether or not the string has consonants qu combined."
Code: specificConsonants("cats catered the quiet cat");
Expected Output: ["quiet"]

Test: "It should splice the first two letters and put it in an array."
Code: specificConsonants("ats catered the quiet cat");
Expected Output: ["qu"]

Test: "It should reverse the string in the array."
Code: specificConsonants("qu");
Expected Output: ["uq"]

Test: "Concat the reversed string to original string."
Code: specificConsonants("quiet");
Expected Output: ["uqiet"]

Describe yConsonant()

Test: "It should identify any word with y."
Code: yConsonant("there was a lazy dog in the yard")
Expected Output: ["lazy", "yard"]

Test: "Identify if the first index of a word returns the letter y."
Code: yConsonant("there was a lazy dog in the yard")
Expected Output: ["yard"]

Test: "Passing in beginningConsonants() function."
Code: yConsonant(beginningConsonants(text));
Expected Output: ["ardyay"]