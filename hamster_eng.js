var PARAM = new Object();
var __reg_exp_key_value = new RegExp('([^=]*)=', 'i');


//Es ist nicht gestattet, diese Version der G2DB online zu stellen!
//if (top.location.href.substr(0,4) == 'http') top.location.href="http://mondgesaenge.de/G2DB";


function _ParseString(s) {
	arr = __reg_exp_key_value.exec(s);
	if (arr != null) {
		name = arr[1];
		value = s.substr(name.length + 1);
		PARAM[name] = unescape(value);
	}
	return '';

}

function _ParseList(s) {
	for (i = 0; i < s.length; ++i) {
		if (s.charAt(i) == '&') {
			if (i > 0) _ParseString(s.substr(0, i));
			s = s.substr(i + 1);
			i = 0;
		}
	}
	_ParseString(s);
	return;
}

_ParseList(location.search.substr(1));


////////////////////////////

function INCLUDE(filename) {
	document.write('<sc' + 'ript src="' + filename + '"></sc' + 'ript>');
}


function OUT(s) {
	s = s.replace(/ä/g, "&auml;");
	s = s.replace(/ö/g, "&ouml;");
	s = s.replace(/ü/g, "&uuml;");
	s = s.replace(/Ä/g, "&Auml;");
	s = s.replace(/Ö/g, "&Ouml;");
	s = s.replace(/Ü/g, "&Uuml;");
	s = s.replace(/ß/g, "&szlig;");

	/*
		if (highlight = PARAM["highlight"])
		{
			highlight = highlight.replace(/\+/g, " ");
			reg = new RegExp(highlight, "gi");
			s = s.replace(reg, "<b>$&</b>");
		}
	*/
	document.write(s)
}


