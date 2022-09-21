<h1 align="center">QuickLinks</h1>
<h3 align="center">A web extension that takes a prefix and a value and returns the URL to that page, rather than going to the default search engine.</h3>

&nbsp;

<p align="left">This extension works by changing the default search engine of your browser to <a href="https://quicklinks.ming.jp.net">quicklinks.ming.jp.net</a> <a href="https://github.com/MingTheNoob/QuickLinksBackend"><sup>[Repo]</sup></a> and sending all requests to the server there first. This link is not a real search engine but rather a backend for the extension. It works by taking the requested search and either redirecting to the page corresponding with the prefix and value, or redirecting to your default search engine and showing the normal search page if you searched something without a prefix. Set the default search engine or change search prefixes in the settings of the extension.</p>

&nbsp;
___
&nbsp;

:warning: Disclaimer: No data is stored on the server. Check the backend source code [here](https://github.com/MingTheNoob/QuickLinksBackend).

&nbsp;
___
&nbsp;

# Features:
- Create any prefix and value you want. Default values are applied upon installation. 
- Use any search engine you want to handle searches for when you don't use a prefix.
- The QuickLinks backend will work with any custom search engine extension! Add `https://quicklinks.ming.jp.net/search?q=%s&prefix=%v` to the settings if the extension allows. If it doesn't allow, use my extension!

&nbsp;
___
&nbsp;

<h3 align="left">Credits:</h3>
<ul>
    <li>Me</li>
    <li>GitHub Copilot</li>
</ul>
