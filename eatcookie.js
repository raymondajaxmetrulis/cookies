function add_sug(val) {
    var sugs = document.getElementById('addSug').value;
    var addSug = parseInt(sugs,10) + val;
    
    if (addSug < 0) {
        addSug = 0;
    }
    
    document.getElementById('addSug').value = addSug;
    return addSug;
}

function add_choc(val) {
    var chocs = document.getElementById('addChoc').value;
    var addChoc = parseInt(chocs,10) + val;
    
    if (addChoc < 0) {
        addChoc = 0;
    }
    
    document.getElementById('addChoc').value = addChoc;
    return addChoc;
}

function add_lmn(val) {
    var lmns = document.getElementById('addLmn').value;
    var addLmn = parseInt(lmns,10) + val;
    
    if (addLmn < 0) {
        addLmn = 0;
    }
    
    document.getElementById('addLmn').value = addLmn;
    return addLmn;
}

$(document).ready(function() {
	$("div.sugar").hover(function() {

		$("div.sugar").animate({
			width: 800,
			height: 500
		});

	});
});