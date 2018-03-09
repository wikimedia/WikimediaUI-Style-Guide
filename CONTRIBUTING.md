# How to contribute

We appreciate pull requests from everyone.

## Committing changes

Fork, then clone the repo:

```console
$ git clone git@github.com:your-username/WikimediaUI-Style-Guide.git
```

Setup your system. Change to the cloned folder and type:

```console
$ npm install
```

Make your changes. To automatically watch for changes, run:
```console
$ npm run start
```

Make sure the tests pass and the CSS for production is built:

```console
$ npm run build
```

Please add specific topics into a single commit and also take into account the [Wikimedia commit message guidelines](https://www.mediawiki.org/wiki/Gerrit/Commit_message_guidelines).

Push to your fork and [submit a pull request][pr]

[pr]: https://github.com/wikimedia/WikimediaUI-Style-Guide/compare

In order for the pushed changes to be available live, members of Wikimedia design are going to review it first.

<h3>Get the design repository</h3>
						<p>The <a href="https://github.com/wikimedia/WikimediaUI-Style-Guide/">WikimediaUI Style Guide repository is available to download</a>. It contains this documentation, Sketch and SVG templates and resources. Select the “clone or download” button to get the repository.</p>

						<h3>Commit changes</h3>
						<p>Easily contribute to the content of the style guide by adding new recommendations, making corrections or adding examples in the form of images or videos: </p>
						<p>If you have <a href="https://en.wikipedia.org/wiki/Git">Git</a> installed on your system, <a href="https://help.github.com/articles/cloning-a-repository/">cloning</a> is preferred way to get the contents since it allows you to contribute back. Technically changes can be submitted as usual in Git.</p>
						<p>In order to publish the updated contents to be available live, go to the repo and launch the following command from a terminal: <code>git push -f origin master:gh-pages</code></p>
						<p>Please add specific topics into a single commit and also take into account the <a href="https://www.mediawiki.org/wiki/Gerrit/Commit_message_guidelines" target="_blank">Wikimedia commit message guidelines</a>.</p>

						<h3>Contribute beyond content</h3>
						<p>You can also help to improve how this documentation looks and works.</p>
						<p>When modifying aspects such as the CSS styling you'll need to rebuild the documentation files using <a href="http://gruntjs.com/">Grunt</a> (which requires <a href="https://docs.npmjs.com/getting-started/installing-node">Node.js and npm</a>). The first time you have to run <code>npm install</code> in a terminal from the style guide's main folder in order to get all necessary dependencies. Every time you want to rebuild the CSS files for the documentation you just need to launch the <code>grunt</code> command in a terminal, also from the main folder.<br>
						We're using <a href="http://stylelint.io/">stylelint</a> to ensure the CSS <a href="https://github.com/wikimedia/stylelint-config-wikimedia/">aligns with our</a> <a href="https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS">coding conventions</a>.</p>
						<p>These requirements provide our contributors a reliable environment and our viewers a performant experience.</p>

						<p>You can participate in many ways. The documentation is available in a Git repository with the design assets needed for your project. You can get all of them, change anything and send the changes back.</p>

						<h3>Get the design repository</h3>
						<p>The <a href="https://github.com/wikimedia/WikimediaUI-Style-Guide/">Wikimedia Design Style Guide repository is available to download</a>. It contains this documentation, Sketch and SVG templates and resources. Select the “clone or download” button to get the repository.</p>

						<h3>Commit changes</h3>
						<p>Easily contribute to the content of the style guide by adding new recommendations, making corrections or adding examples in the form of images or videos: </p>
						<p>If you have <a href="https://en.wikipedia.org/wiki/Git">Git</a> installed on your system, <a href="https://help.github.com/articles/cloning-a-repository/">cloning</a> is preferred way to get the contents since it allows you to contribute back. Technically changes can be submitted as usual in Git.</p>
						<p>In order to publish the updated contents to be available live, go to the repo and launch the following command from a terminal: <code>git push -f origin master:gh-pages</code></p>
						<p>Please add specific topics into a single commit and also take into account the <a href="https://www.mediawiki.org/wiki/Gerrit/Commit_message_guidelines" target="_blank">Wikimedia commit message guidelines</a>.</p>
