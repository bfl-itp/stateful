var levelStatus = "000";

function initLevels() {
	for (i = 0; i < levelStatus.length; i++) {
		var el = $(".b" + i + "");
		levelStatus.charAt(i) == "1" ? el.addClass("completed") : el.removeClass("completed");
	}
}

$(document).ready(function() {

	if (localStorage.levels == undefined) localStorage.setItem("levels", levelStatus);
	else {
		levelStatus = localStorage.levels;
		initLevels();
	}

	$(".b").click(function() {
		$(this).addClass("completed");
		if ($(this).hasClass("b0")) levelStatus = levelStatus.replaceAt(0, "1");
		else if ($(this).hasClass("b1")) levelStatus = levelStatus.replaceAt(1, "1");
		else levelStatus = levelStatus.replaceAt(2, "1");
		localStorage.setItem("levels", levelStatus);
	});

	$(".reset").click(function() {
		$(".b").removeClass("completed");
		levelStatus = "000";
		localStorage.setItem("levels", levelStatus);
	});

});

/* http://stackoverflow.com/a/1431113/2502505 */
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}