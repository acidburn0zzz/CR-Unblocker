var cl = document.getElementById("changelog");
var versions = document.getElementById("versions").getElementsByTagName("li");
var changelog = {
	"v1.6": {
		cl: "v16"
	},
	"v1.7": {
		cl: "v17"
	}
}
if (getParameterByname("v") !== null && getParameterByname("v") !== "") {
	changeChangelog(document.getElementById(getParameterByname("v")));
} else {
	changeChangelog(versions[versions.length - 1])
}

function changeChangelog(e) {
	changelogText = changelog[e.id].cl;
	cl.innerHTML = changelogText;
}

function getParameterByname(name) {
	url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return "";
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
