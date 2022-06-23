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
- Does it work across required browsers, viewports, assistive technology as intended? QA engineers support needed.

#### 6. Finalize and document
- Add DSG's new component page or extend an existing component if it's a contextual addition as new type. Example: Thinking of different kind of menu treatment in a typeahead search vs page lists.
- Ensure that user-interface library's demo is provided. Example: [Codex documentation instance](https://doc.wikimedia.org/codex/main/).

### Contribute by designing or changing an icon
Designing a new or changing an existing icon helps to expand Wikimedia Design Style Guide icon collection and will improve user-interface consistency.
It basically follows the same process as adding a component above, with small modifications:
- Research includes comparing current icons in [DSG's icon collection](https://github.com/wikimedia/WikimediaUI-Style-Guide/tree/master/resources/WikimediaUI-icons-SVGs) with an [online demo available in Codex](https://doc.wikimedia.org/oojs-ui/master/demos/?page=icons&theme=wikimediaui&direction=ltr&platform=desktop).
- File a task on [Phabricator for each icon](https://phabricator.wikimedia.org/maniphest/task/edit/form/1/?title=Add%2Fupdate%20''%20WikimediaUI%20icon&description=%3D%3D%20Goal%0D%0AAdd%2Fupdate%20''%20WikimediaUI%20icon%0D%0AAlign%20to%20%5B%5B%20https%3A%2F%2Fdesign.wikimedia.org%2Fstyle-guide%2Fvisual-style_icons.html%20%7C%20Design%20Style%20Guide%20icon%20guidelines%20%5D%5D%0D%0A%0D%0A%3D%3D%3D%20Criteria%20for%20done%0D%0A%5B%5D%20Design%20and%20optimize%20SVG%0D%0A%5B%5D%20Optimize%20SVG%0D%0AA%20new%20SVG%20will%20need%20to%20be%20added%20to%20%0D%0A%5B%5D%20Design%20Style%20Guide%20(DSG)%0D%0A%20%20%5B%5D%20Figma%20file%3A%20add%20icon%20and%20%5B%5B%20https%3A%2F%2Fwww.figma.com%2Ffile%2F1lT9LKOK6wiHLnpraMjP3E%2F%25E2%259D%2596-WikimediaUI-%25E2%2580%2593-Icons-and-Colors%3Fnode-id%3D42%253A5444%20%7C%20publish%20the%20library%20%5D%5D%20with%20saving%20to%20version%20history%0D%0A%20%20%5B%5D%20Add%20to%20DSG%20repository%0D%0A%5B%5D%20Codex%0D%0A%5B%5D%20OOUI%20%0D%0A%20%20%5B%5D%20Add%20''%20icon%20to%20make.%0D%0A%20%20%5B%5D%20Deprecate%20''%20icon%20in%20next%20OOUI%20release%0D%0A%20%20%5B%5D%20Remove%20''%20icon%20in%20next%20minor%20OOUI%20release%0D%0A%0D%0A%3D%3D%3D%20Design%20resources%0D%0ASVG%20files%2C%20screenshots&projects=codex%2C%20design-systems-team-fy2021-22-kanban%2C%20ooui%2C%20wikimedia-design-style-guide%2C%20design).
- Design with [icon guidelines in mind](https://design.wikimedia.org/style-guide/visual-style_icons.html). Ensure to incorporate feedback until open questions are resolved on task. Provide the icon as SVG in right-to-left together with left-to-right variant if needed.
- Finalize design by
  - updating the [Design System WikimediaUI Icons Figma file](https://www.figma.com/file/1lT9LKOK6wiHLnpraMjP3E/%E2%9D%96-WikimediaUI-%E2%80%93-Icon-System). Please ensure that you use Figma's “save to version history” after updating to make the changes clear to other designers using the file.
  - making a pull request with [code-optimized SVG](https://www.mediawiki.org/wiki/Manual:Coding_conventions/SVG) to DSG's resources folder, icon collection Zip file of whole folder with the new icon.
- With all of above steps fulfilled, the icon will be updated in the Wikimedia user-interface libraries (at this moment Codex and OOUI) by developers.
- Review once more on the library demo as soon as the code commit has been merged.
[Design Systems team](https://www.mediawiki.org/wiki/Design_Systems_Team) is here to help in case of further questions.

