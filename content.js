var textToEnter = "";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    textToEnter = request.text

    setTimeout(startTypeWriter, 2000);

    //sendResponse({ fromcontent: "This message is from content.js" });

    return true;
});


function startTypeWriter() {

    var selectElement = document.activeElement;

    var i = 0;
    var speed = 150;
    var text = textToEnter;

    if (selectElement) {
        selectElement.value = "";
        typeWriter();
    }

    function typeWriter() {
        if (i < text.length) {
            selectElement.value += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}