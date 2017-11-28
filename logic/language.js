langList = ['c','c++','c#','java','javascript','python','php','r','swift'];

this.chooseLanguage = function(lang) {
    if(lang in langList){
        console.log('This is ',lang);
    }
    else{
        console.log('This is not language.');
    }
}