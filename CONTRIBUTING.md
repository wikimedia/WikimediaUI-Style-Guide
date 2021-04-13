# How to contribute

We welcome and appreciate pull requests from everyone.

You can participate in many ways. The documentation is available in a Git repository with the design assets needed for your project. You can get all of them, change anything and send the changes back.

## Setting up

Fork, then clone the repo:

```console
$ git clone git@github.com:your-username/WikimediaUI-Style-Guide.git
```

Setup your system. Change to the cloned folder and let npm package manager install needed packages. Make sure you have [npm](https://nodejs.org/en/) installed beforehand.

```console
$ npm install
```

Make your changes. To automatically watch for changes, run:
```console
$ npm run start
```

Make sure the tests pass and the CSS for production is built:

```console
$ npm run test
$ npm run build
```

## Get the design repository
The [Wikimedia Design Style Guide repository is available to download](https://github.com/wikimedia/WikimediaUI-Style-Guide/). It contains this documentation, Sketch and SVG templates and other resources. Select the “clone or download” button to get the repository.

### Commit changes
Easily contribute to the content of the style guide by adding new recommendations, making corrections or adding examples in the form of images or videos:

If you have [Git](https://en.wikipedia.org/wiki/Git) installed on your system, [cloning](https://help.github.com/articles/cloning-a-repository/) is preferred way to get the contents since it allows you to contribute back.

In order to publish the updated contents to be available live, go to the repo and launch the following command from a terminal: `git push -f origin your-branch`. It will be reviewed in a timely manner and merged accordingly.

Please add specific topics into a single commit, make sure that you refer to the open [Github issue](https://github.com/wikimedia/WikimediaUI-Style-Guide/issues) or [Phabricator task](https://phabricator.wikimedia.org/tag/wikimediaui_style_guide/) and also take into account the [Wikimedia commit message guidelines](https://www.mediawiki.org/wiki/Gerrit/Commit_message_guidelines).

Push to your fork and [submit a pull request](https://github.com/wikimedia/WikimediaUI-Style-Guide/compare)

In order for the pushed changes to be available live, members of Wikimedia design review them first, provide feedback and put them on the production server as final step.

### Contribute beyond content
You can also help to improve how this documentation looks and works.

When modifying aspects such as the CSS styling you'll need to rebuild the production files using [Grunt](https://gruntjs.com/) (which requires [Node.js and npm](https://docs.npmjs.com/getting-started/installing-node)). The first time you have to run `npm install` in a terminal from the style guide's main folder in order to get all necessary dependencies. To rebuild the CSS files after changing them in `wmui-style-guide.dev.css` you just need to launch the `grunt` command in a terminal, also from the main folder.

We're using [stylelint](https://stylelint.io/) to ensure the CSS [aligns with our](https://github.com/wikimedia/stylelint-config-wikimedia/) [coding conventions](https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS).

These requirements provide our contributors a reliable environment and our viewers a performant experience.

### Contribute by designing or extending a component
Designing a new component or extending an existing component is an important part on Wikimedia Design Style Guide (DSG).
We would like to provide a process list for a successful addition:

#### 1. Research and prepare
A. Find any related components to the one you need. Look in these places:
 1. [DSG](https://design.wikimedia.org/style-guide/components/) itself,
 2. [WVUI Storybook demo](https://doc.wikimedia.org/wvui/master/ui/) or former standard library [OOUI demos](https://doc.wikimedia.org/oojs-ui/master/demos/#widgets-mediawiki-vector-ltr)
 3. [OOUI Phabricator board with widget/component requests](https://phabricator.wikimedia.org/tag/ooui/) (40+ products using OOUI alone), or
 4. [Mediawiki-interface Phabricator board](https://phabricator.wikimedia.org/project/view/4947/).

B. [File a Phabricator task](https://phabricator.wikimedia.org/maniphest/task/edit/form/1/?projects=Wikimedia_Design_Style_Guide) with the new component request, an overview of current related components in different Wikimedia products from above and its improvements over existing components. Be sure to flag to the product owners, to make them aware of a new component – by either adding product tags on new task or referencing it on older open tasks.
C. Ensure the problem statement for the addition is clear and that Design Systems Lead or Principal Designer has provided “go” for this new component or this type.

#### 2. Design
- Follow [DSG's visual style](https://design.wikimedia.org/style-guide/visual-style.html) and [components guidelines](https://design.wikimedia.org/style-guide/components/) to provide a consistent experience. Incorporate responsive design from the beginning.
- Ensure different device interactions are provided. Example: Mobile vs tablet vs desktop.
- Ensure internationalization needs and various language scripts are considered. Example: German word length or Burmese letter box height.
- Research accessibility best-practices around the type of component to be met. Example: Ensure to think about different modes of interaction like keyboard navigation.

#### 3. Test
- Gather user feedback and iterate. Example: Consider reaching out to accessibility consultants on higher complex components.

#### 4. Handover to development
- Use [WikimediaUI Base CSS variables](https://gerrit.wikimedia.org/r/plugins/gitiles/wikimedia-ui-base/). Define new ones if clearly needed.

#### 5. Design quality assurance
- Does the component behave as expected and follow the templates?
- Does it work across required browsers, viewports, assistive technology as intended. QA engineers support needed.

#### 6. Finalize and document
- Add DSG's new component page or extend an existing component if it's a contextual addition as new type. Example: Thinking of different kind of menu treatment in a typeahead search vs page lists.
- Ensure that User-interface library's demo is provided. Example: [WVUI's Storybook instance](https://doc.wikimedia.org/wvui/master/ui/).

### Contribute by designing or changing an icon
Designing a new or changing an existing icon helps to expand Wikimedia Design Style Guide icon collection and will improve user-interface consistency.
It basically follows the same process as adding a component above, only with some modification:
- Research includes comparing current icons in [DSG's icon collection](https://github.com/wikimedia/WikimediaUI-Style-Guide/tree/master/resources/WikimediaUI-icons-SVGs) with an [online demo available in OOUI](https://doc.wikimedia.org/oojs-ui/master/demos/?page=icons&theme=wikimediaui&direction=ltr&platform=desktop).
- Design with [icon guidelines in mind](https://design.wikimedia.org/style-guide/visual-style_icons.html).
- File a task on [Phabricator for each icon](https://phabricator.wikimedia.org/maniphest/task/edit/form/1/?projects=wikimediaui_style_guide,ooui,wvui&title=Icons:), ensure to follow incorporate feedback. Provide the icon as SVG in right-to-left together with left-to-right variant if needed.
- Finalize by making a pull-request with optimized SVG to DSG's resources folder, icon collection Zip file and to the 'WikimediaUI-icons.ai' Adobe Illustrator file.

