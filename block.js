new_body = "<h1>This site is blocked by FBlock</h1>"

browser.storage.sync.get('blocked_sites', function(item){
    blocked = item.blocked_sites.split('\n')
    console.log(blocked);
    if (blocked.indexOf(document.domain) >= 0){
        document.body.innerHTML = new_body;
    }
})

