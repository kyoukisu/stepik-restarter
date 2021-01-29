//check previous stage of restarter mod
chrome.storage.local.get("mode", function(data) {
    if(typeof data.mode == "undefined") {
        chrome.storage.local.set({mode: false});
    }
});

//var last="";
var pages=[];
//submit-submission
function restartLesson() {
	const answers = document.querySelector(".attempt");
	if(answers&&!pages.includes(window.location.href)){
		answers.style.opacity=0;
	}
	const notfinished = document.querySelector(".submit-submission");
	if(notfinished){
		pages.push(window.location.href);
		//last=window.location.href;
		answers.style.opacity=100;
	}
	else{
		chrome.storage.local.get("mode", function(data) {
			if(data.mode==true){
				const node = document.querySelector(".again-btn");
				if(node&&!pages.includes(window.location.href)){
					node.click();
					chrome.storage.local.set({"last":window.location.href});
					pages.push(window.location.href);
					//last=window.location.href;
				}
			}
		});
	}
}

document.addEventListener('DOMNodeInserted', restartLesson);

// chrome.management.onDisabled.addListener(function(ExtensionInfo) {
//     alert("RIPZO")
//  	clearInveral(restarter);
// });





