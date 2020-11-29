function reformat(string) {

    //Make string lowercase
    lowerCaseString = string.toLowerCase();

    //Remove all vowels from string
    vowelRemovedString = lowerCaseString.replace(/[aeiou]/gi, '');

    //Capitalise first letter of string
    outputString = vowelRemovedString.charAt(0).toUpperCase() + vowelRemovedString.slice(1);

    return outputString;
    
}
