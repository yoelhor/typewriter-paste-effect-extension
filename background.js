
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleDark
    });
});


async function toggleDark() {

    var selectElement = document.activeElement;

    var i = 0;
    var txt = await navigator.clipboard.readText();
    var speed = 50;

    if (selectElement)
    {
        selectElement.value = "";
        typeWriter();
    }

    function typeWriter() {
        if (i < txt.length) {
            selectElement.value += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}