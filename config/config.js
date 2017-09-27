
var ta = document.getElementById("urls");
function saveOptions(e) {
    browser.storage.sync.set({
        blocked_sites: ta.value
       })
    e.preventDefault();
  }

let blocked = browser.storage.sync.get('blocked_sites', function(data){
    ta.value = data.blocked_sites;
});


document.querySelector("form").addEventListener("submit", saveOptions);



