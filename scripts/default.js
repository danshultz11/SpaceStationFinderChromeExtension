

document.addEventListener('DOMContentLoaded', function () { onDeviceReady(); });

function onDeviceReady() {
    
    document.getElementById("txtAddress").focus();

    document.getElementById("ssf").onsubmit = function(e) { e.returnValue=false; goToSSF(document.getElementById("txtAddress").value) };
};

    function goToSSF(loc){
        if(!!loc){
            var newURL = "https://spacestationfinder.com/results.html?loc=" + loc;
            chrome.tabs.create({ url: newURL });
        } else { 
            document.getElementById("lblZip").style.fontWeight = "bold"; 
            document.getElementById("lblZip").style.color = "#F00"; 
            return false; 
        }
    }