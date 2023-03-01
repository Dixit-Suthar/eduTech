var executed = false;
//DOM ELements
var defaultModule = document.getElementById("default");

var caesarCipherModule = document.getElementById("caesarCipher");
var railFence = document.getElementById("railfence");
var monoalphabetic = document.getElementById("monoalphabetic");
var playFair = document.getElementById("playfaircipher");
var polyalphabeticSubstitution = document.getElementById("polyalphabeticsubstitution");

speechSynthesis.addEventListener(' ', speak());

function casearCiperSpeech() {
    speak(caesarCipherModule.getElementsByTagName("h5")[0].textContent + caesarCipherModule.getElementsByTagName('div')[0].textContent, ".content");
}

function railFenceSpeech() {
    speak(railFence.getElementsByTagName("h5")[0].textContent, ".content");
}

function monoalphabeticSpeech() {
    speak(monoalphabetic.getElementsByTagName("h5")[0].textContent + monoalphabetic.getElementsByTagName("p")[1].textContent);
}

function playFairSpeech() {
    speak(playFair.getElementsByTagName("h5")[0].textContent + playFair.getElementsByTagName("p")[1].textContent);
}

function polyalphabeticSubstitutionSpeech() {
    speak(polyalphabeticSubstitution.getElementsByTagName("h5")[0].textContent);
}

function speak(message, element) {
    speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance(message);

    var voices = window.speechSynthesis.getVoices();
    msg.rate = 1;
    msg.pitch = 1;
    msg.voice = voices[3];
    window.speechSynthesis.speak(msg);
}

function onSpeakEnd(element, content) {
    $(element).removeClass("d-none");
    if (!executed) {
        speak(content);
        executed = true;
    }
}

function welcomeMsg() {
    let txt1 = document.getElementById("default").getElementsByTagName("h1")[0].textContent;
    let txt2 = document.getElementById("default").getElementsByTagName("p")[0].textContent;
    let text = txt1 + " " + txt2;
    $('#sidebar').click();
    speak(text);
}

function switchChannel(channelNumber) {

    var module = document.getElementById("module").getElementsByTagName("li");
    var len = module.length;
    for (let i = 0; i < len; i++) {
        let getContentId = String((module[channelNumber - 1].id).split('I', 1));
        module[i].className = i + 1 == channelNumber ? "list-group-item active" : "list-group-item";

        $("#screen").find("section").each(function () {
            if (getContentId == $(this).attr("id")) {
                $(this).removeClass('d-none');
                $(this).addClass('d-block');
            }
            else {
                $(this).addClass('d-none');
                $(this).removeClass('d-block');
            }
        })
    }
    speak("In this module we will learn about " + module[channelNumber - 1].textContent + "If you want to listen description please click on the button");
}