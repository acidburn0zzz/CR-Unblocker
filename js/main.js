// I suck at vanilla JS

var cl = document.getElementById("changelog");
var changelogTitle = document.getElementById("changelogTitle");
var versions = document.getElementById("versions").getElementsByTagName("li");
var versionNode = document.getElementById("versions");
var active;
var changelog = {
	"v2.0": {
		v: "v2.0",
		cl: "<h4>Major changes:</h4><ul><li>You can now opt-in to storing your login data to stay logged in when switching regions.</li><li>The extension's icon now opens a window to change settings and directly open Crunchyroll.</li></ul>" +
		"<h4>Minor changes:</h4><ul><li>We now use our own servers in addition to Crunchyroll's API to get a US session ID to improve the stability of the extension.</li><li>This changelog now exists.</li><li>We've cleaned up the extension's source code for easier updates in the future.</li></ul>" +
		"<h4>How do we store your login data?</h4><p>If you opt-in using the extension's popup window, the CR-Unblocker will get your username and password the next time you log in on Crunchyroll. Your password is immediately encrypted on supported browsers (all except Edge) using AES-256 and stored in your browser's local storage, which is only accessible to the extension itself. The next time you want to switch regions the CR-Unblocker sends your login data using HTTPS to Crunchyroll to log you in automatically and stores the authentication token returned. This token does not contain your password or username, but can still be used to log you in. Once the CR-Unblocker has obtained a token, this is sent to log you in using HTTPS to either Crunchyroll or our servers, which just forward it to Crunchyroll without storing any data about you.</p>"
	}
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
	if (active) {
		active.childNodes[0].className -= " is-active";
	}
	e.childNodes[0].className += " is-active";
	active = e;
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
