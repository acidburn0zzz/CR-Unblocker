// I suck at vanilla JS

var cl = document.getElementById("changelog");
var changelogTitle = document.getElementById("changelogTitle");
var versions = document.getElementById("versions").getElementsByTagName("li");
var versionNode = document.getElementById("versions");
var changelog = {
	"v1.6": {
		v: "v1.6",
		cl: "Text about how login credential stuff works"
	},
}

for (var key in changelog) {
	if (changelog.hasOwnProperty(key)) {
		li = document.createElement("LI");
		a = document.createElement("A");
		a.innerHTML = changelog[key].v;
		li.id = changelog[key].v;
		li.addEventListener("click", function() { changeChangelog(this); }, false);
		li.appendChild(a)
		versionNode.appendChild(li);
	}
}

if (getParameterByname("v") !== null && getParameterByname("v") !== "") {
	changeChangelog(document.getElementById(getParameterByname("v")));
} else {
	changeChangelog(versions[versions.length - 1])
}

function changeChangelog(e) {
	changelogText = changelog[e.id].cl;
	changelogTitle.innerHTML = `${e.id} changes`;
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
