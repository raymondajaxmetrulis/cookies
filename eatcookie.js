function modify_qty(val) {
    var qty = document.getElementById('more').value;
    var another = parseInt(qty,10) + val;
    
    if (another < 0) {
        another = 0;
    }
    
    document.getElementById('more').value = another;
    return another;
}

$(document).ready(function() {
	$("div.sugar").hover(function() {

		$("div.sugar").animate({
			width: 800,
			height: 500
		});

	});
});