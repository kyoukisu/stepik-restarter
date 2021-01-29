var switch_state = false;
//var myButton = document.getElementById('toggle');
var checkBox = document.getElementById('checkbox1');
//var text_enabled="Включено";
//var text_disabled="Выключено";
chrome.storage.local.get('mode', data => {
	if(typeof data.mode == "undefined") {
        chrome.storage.local.set({"mode": false});
    }		
    switch_state = !!data.mode;
    //myButton.textContent  = switch_state ? text_enabled:text_disabled;
    checkBox.checked = switch_state;
});

checkBox.onclick = () => {
    switch_state = !switch_state;
    if(switch_state){
        chrome.browserAction.setIcon({
          path : { "16": "icon16.png",
           "48": "icon48.png",
          "128": "icon128.png" }
        });
    }
    else{
        chrome.browserAction.setIcon({
          path : { "16": "icongrey16.png",
           "48": "icongrey48.png",
          "128": "icongrey128.png" }
        });
    }
    chrome.storage.local.set({"mode":switch_state});
    //myButton.textContent  = switch_state?text_enabled:text_disabled;
    checkBox.checked = switch_state;
};