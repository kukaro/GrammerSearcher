langList = ['c', 'c++', 'c#', 'java', 'javascript', 'python', 'php', 'r', 'swift'];

this.chooseLanguage = function (lang) {
    if (langList.indexOf(lang) == -1) {
        console.log('This is ', lang);
    }
    else {
        console.log('This is not language.');
    }
}