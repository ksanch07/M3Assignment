// The Word Translator

//  Usage: Use simple conditional statements

// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):

// Hello World translated in French is: Bonjour le monde

let languageCode = prompt('Enter a language code of "es", "de", "en", or "fr"');
switch (languageCode) {
    case 'es':
        console.log('Hello World translated in Español es: Hola Mundo');
        break;
    case 'de':
        console.log('Hello World translated in Deutsch is: Hallo Welt');
        break;
    case 'fr':
        console.log('Hello World translated in French is: Bonjour le monde');
        break;
    default:
        console.log('Hello World');
        break;
}
