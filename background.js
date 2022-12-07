var redditUrl = "https://www.reddit.com/";
var searchRedditUrl = "https://www.reddit.com/search?q=";
var githubUrl = "https://github.com/";
var searchGithubUrl = "https://github.com/search?q=";
var discordUrl = "https://discord.com/invite/";
var youtubeUrl = "https://www.youtube.com/channel/";
var searchYoutubeUrl = "https://www.youtube.com/results?search_query=";
var twitterUrl = "https://twitter.com/";
var searchTwitterUrl = "https://twitter.com/search?q=";
var twitchUrl = "https://www.twitch.tv/";
var searchTwitchUrl = "https://www.twitch.tv/search?term=";

browser.omnibox.onInputChanged.addListener((text, suggest) => {
	if (text.startsWith("u/")) {
		suggest([
			{content: redditUrl + text, description: "Go to " + text}
		]);
	}
	if (text.startsWith("r/")) {
		suggest([
			{content: redditUrl + text, description: "Go to " + text}
		]);
	}
	if (text.startsWith("s/")) {
		suggest([
			{content: searchRedditUrl + text.split("/")[1], description: "Search Reddit for " + text.split("/")[1]}
		]);
	}
	if (text.startsWith("gh@")) {
		suggest([
			{content: githubUrl + text.split("@")[1], description: "Go to " + text.split("@")[1]}
		]);
	}
	if (text.startsWith("gh=")) {
		suggest([
			{content: searchGithubUrl + text.split("=")[1], description: "Search Github for " + text.split("=")[1]}
		]);
	}
	if (text.startsWith(".gg/")) {
		var textArray = text.split("/");
		var inviteCode = textArray[textArray.length - 1];
		suggest([
			{content: discordUrl + inviteCode, description: "Go to discord.gg/" + inviteCode}
		]);
	}
	if (text.startsWith("yt@")) {
		suggest([
			{content: youtubeUrl + text.split("@")[1], description: "Go to " + text.split("@")[1]}
		]);
	}
	if (text.startsWith("yt=")) {
		suggest([
			{content: searchYoutubeUrl + text.split("=")[1], description: "Search Youtube for " + text.split("=")[1]}
		]);
	}
	if (text.startsWith("tw@")) {
		suggest([
			{content: twitterUrl + text.split("@")[1], description: "Go to " + text.split("@")[1]}
		]);
	}
	if (text.startsWith("tw=")) {
		suggest([
			{content: searchTwitterUrl + text.split("=")[1], description: "Search Twitter for " + text.split("=")[1]}
		]);
	}
	if (text.startsWith("twitch@")) {
		suggest([
			{content: twitchUrl + text.split("@")[1], description: "Go to " + text.split("@")[1]}
		]);
	}
	if (text.startsWith("twitch=")) {
		suggest([
			{content: searchTwitchUrl + text.split("=")[1], description: "Search Twitch for " + text.split("=")[1]}
		]);
	}
});

browser.omnibox.onInputEntered.addListener((text) => {
	if (text.startsWith("u/")) {
		browser.tabs.update({url: redditUrl + text});
	}
	if (text.startsWith("r/")) {
		browser.tabs.update({url: redditUrl + text});
	}
	if (text.startsWith("s/")) {
		browser.tabs.update({url: searchRedditUrl + text.split("/")[1]});
	}
	if (text.startsWith("gh@")) {
		browser.tabs.update({url: githubUrl + text.split("@")[1]});
	}
	if (text.startsWith("gh=")) {
		browser.tabs.update({url: searchGithubUrl + text.split("=")[1]});
	}
	if (text.startsWith(".gg/")) {
		var textArray = text.split("/");
		var inviteCode = textArray[textArray.length - 1];
		browser.tabs.update({url: discordUrl + inviteCode});
	}
	if (text.startsWith("yt@")) {
		browser.tabs.update({url: youtubeUrl + text.split("@")[1]});
	}
	if (text.startsWith("yt=")) {
		browser.tabs.update({url: searchYoutubeUrl + text.split("=")[1]});
	}
	if (text.startsWith("tw@")) {
		browser.tabs.update({url: twitterUrl + text.split("@")[1]});
	}
	if (text.startsWith("tw=")) {
		browser.tabs.update({url: searchTwitterUrl + text.split("=")[1]});
	}
	if (text.startsWith("twitch@")) {
		browser.tabs.update({url: twitchUrl + text.split("@")[1]});
	}
	if (text.startsWith("twitch=")) {
		browser.tabs.update({url: searchTwitchUrl + text.split("=")[1]});
	}
});