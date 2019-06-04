# How to contribute

We appreciate pull requests from everyone.

You can participate in many ways. The documentation is available in a Git repository with the design assets needed for your project. You can get all of them, change anything and send the changes back.

## Setting up

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

## Get the design repository
The [Wikimedia Design Style Guide repository is available to download](https://github.com/wikimedia/WikimediaUI-Style-Guide/). It contains this documentation, Sketch and SVG templates and other resources. Select the “clone or download” button to get the repository.

### Commit changes
Easily contribute to the content of the style guide by adding new recommendations, making corrections or adding examples in the form of images or videos:

If you have [Git](https://en.wikipedia.org/wiki/Git) installed on your system, [cloning](https://help.github.com/articles/cloning-a-repository/) is preferred way to get the contents since it allows you to contribute back.

In order to publish the updated contents to be available live, go to the repo and launch the following command from a terminal: `git push -f origin your-branch`. It will be reviewed in a timely manner and merged accordingly.

Please add specific topics into a single commit and also take into account the [Wikimedia commit message guidelines](https://www.mediawiki.org/wiki/Gerrit/Commit_message_guidelines).

Push to your fork and [submit a pull request](https://github.com/wikimedia/WikimediaUI-Style-Guide/compare)

In order for the pushed changes to be available live, members of Wikimedia design are going to review it first.

### Contribute beyond content
You can also help to improve how this documentation looks and works.

When modifying aspects such as the CSS styling you'll need to rebuild the production files using [Grunt](https://gruntjs.com/) (which requires [Node.js and npm](https://docs.npmjs.com/getting-started/installing-node)). The first time you have to run `npm install` in a terminal from the style guide's main folder in order to get all necessary dependencies. To rebuild the CSS files after changing them in `wmui-style-guide.dev.css` you just need to launch the `grunt` command in a terminal, also from the main folder.

We're using [stylelint](https://stylelint.io/) to ensure the CSS [aligns with our](https://github.com/wikimedia/stylelint-config-wikimedia/) [coding conventions](https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS).

These requirements provide our contributors a reliable environment and our viewers a performant experience.
