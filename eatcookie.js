if (typeof Cookies.get("sugMem") == "string") {
    document.getElementById('addSug').value = Cookies.get("sugMem");
}

if (typeof Cookies.get("chocMem") == "string") {
    document.getElementById('addChoc').value = Cookies.get("chocMem");
}

if (typeof Cookies.get("lmnMem") == "string") {
    document.getElementById('addLmn').value = Cookies.get("lmnMem");
}

function add_sug(val) {
    var sugs = document.getElementById('addSug').value;
    var addSug = parseInt(sugs,10) + val;
    
    if (addSug < 0) {
        addSug = 0;
    }
    
    document.getElementById('addSug').value = addSug;
    Cookies.set("sugMem", addSug);
    return addSug;
}


function add_choc(val) {
    var chocs = document.getElementById('addChoc').value;
    var addChoc = parseInt(chocs,10) + val;
    
    if (addChoc < 0) {
        addChoc = 0;
    }
    
    document.getElementById('addChoc').value = addChoc;
    Cookies.set("chocMem", addChoc);
    return addChoc;
}



function add_lmn(val) {
    var lmns = document.getElementById('addLmn').value;
    var addLmn = parseInt(lmns,10) + val;
    
    if (addLmn < 0) {
        addLmn = 0;
    }
    
    document.getElementById('addLmn').value = addLmn;
    Cookies.set("lmnMem", addLmn);
    return addLmn;
}

function hide_evidence() {
    Cookies.expire("sugMem");
    Cookies.expire("chocMem");
    Cookies.expire("lmnMem");
}