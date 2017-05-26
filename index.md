---
layout: default
---


  <h1>Ready to get started? Roll vanilla, or generate a site for your project.</h1>
  <h2>You get one site per GitHub account and organization, <br>and unlimited project sites. Ready? Let’s get started.</h2>

  <ul class="tabs">
    <li><a href="#user-site" class="selected">User or organization site</a></li>
    <li><a href="#project-site" class="">Project site</a></li>
  </ul>

  <!-- ### Start of tutorials -->
  <ul id="user-site" class="tutorial-list wrapper active">
    <li id="create-repo-step" class="image-right">
      <h4>Create a repository</h4>
      <p>Head over to <a href="https://github.com">GitHub</a> and <a data-proofer-ignore="true" href="https://github.com/new">create a new repository</a> named <em>username</em>.github.io, where <em>username</em> is your username (or organization name) on GitHub.</p>

      <p class="details">If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.</p>
    </li>

    <li class="question">
      <h4>What git client are you using?</h4>
      <ul class="tabs">
        <li><a id="option-terminal" href="#terminal-step-1" class="">A terminal</a></li>
        <li><a id="option-ghfw" href="#setup-in-desktop" class="">GitHub for Windows</a></li>
        <li><a id="option-ghfm" href="#setup-in-desktop" class="">GitHub for Mac</a></li>
        <li><a id="option-newuser-w" href="#new-user-step-1" class="selected">I don't know</a></li>
      </ul>
    </li>

    <li id="new-user-step-1" class="option-newuser-w">
      <h4>Download GitHub for Windows</h4>
      <p>GitHub for Windows is a great way to use git and GitHub on Windows.</p>

      <a class="windows-download" href="https://github-windows.s3.amazonaws.com/GitHubSetup.exe"><span class="icon"></span>Download GitHub for Windows</a>

      <img src="images/dashboard@2x.png" alt="GitHub for Windows screenshot" class="full-size" width="1054">
    </li>

    <li class="option-newuser-m animate-in hidden">
      <h4>Download GitHub for Mac</h4>
      <p>GitHub for Mac is a great way to use git and GitHub on Mac.</p>

      <a class="mac-download" href="https://central.github.com/mac/latest"><span class="icon"></span>Download GitHub for Mac</a>

      <img src="images/ghfm@2x.png" alt="GitHub for Mac screenshot" class="full-size" width="1078">
    </li>

    <li id="terminal-step-1" class="option-terminal hidden animate-in">
      <h4>Clone the repository</h4>
      <p>Go to the folder where you want to store your project, and clone the new repository:</p>

      <div class="terminal">
        <div class="header"></div>
        <div class="shell">
          <p><span class="path">~</span><span class="prompt">$</span>git clone https://github.com/<em>username</em>/<em>username</em>.github.io</p>
        </div>
      </div>
    </li>

    <li id="setup-in-desktop" class="option-ghfm option-ghfw image-right hidden animate-in">
      <h4>Clone the repository</h4>
      <p>Click the "Set up in Desktop" button. When the GitHub desktop app opens, save the project.</p>

      <p class="details">If the app doesn't open, launch it and clone the repository from the app.</p>
    </li>

    <li id="setup-in-desktop" class="option-newuser-w option-newuser-m image-right animate-in">
      <h4>Clone the repository</h4>
      <p>After finishing the installation, head back to GitHub.com and refresh the page. Click the "Set up in Desktop" button. When the GitHub desktop app opens, save the project.</p>

      <p class="details">If the app doesn't open, launch it and clone the repository from the app.</p>
    </li>

    <li class="option-terminal hidden animate-in">
      <h4>Hello World</h4>
      <p>Enter the project folder and add an index.html file:</p>

      <div class="terminal">
        <div class="header"></div>
        <div class="shell">
          <p><span class="path">~</span><span class="prompt">$</span>cd <em>username</em>.github.io</p>
          <p><span class="path">~</span><span class="prompt">$</span>echo "Hello World" &gt; index.html</p>
        </div>
      </div>
    </li>

    <li class="option-ghfm option-ghfw option-newuser-w option-newuser-m animate-in">
      <h4>Create an index file</h4>
      <p>Grab your favorite text editor and add an index.html file to your project:</p>

      <div class="terminal">
        <div class="header">index.html</div>
        <code class="shell">
          <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;p&gt;I'm hosted with GitHub Pages.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
      </code>
    </div></li>

    <li class="option-terminal hidden animate-in">
      <h4>Push it</h4>
      <p>Add, commit, and push your changes:</p>

      <div class="terminal">
        <div class="header"></div>
        <div class="shell">
          <p><span class="path">~</span><span class="prompt">$</span>git add --all</p>
          <p><span class="path">~</span><span class="prompt">$</span>git commit -m "Initial commit"</p>
          <p><span class="path">~</span><span class="prompt">$</span>git push -u origin master</p>
        </div>
      </div>
    </li>

    <li class="option-ghfw option-newuser-w animate-in">
      <h4>Commit &amp; sync</h4>

      <p>Enter the repository, commit your changes, and press the sync button.</p>

      <img src="images/sync-windows@2x.png" alt="GitHub for Windows screenshot" class="full-size" width="813">
    </li>

    <li class="option-ghfm option-newuser-m animate-in hidden">
      <h4>Commit &amp; sync</h4>

      <p>Enter the repository, commit your changes, and press the sync button.</p>

      <img src="images/sync-mac.png" alt="GitHub for Mac screenshot" class="full-size">
    </li>

    <li class="option-all animate-in">
      <h4>…and you're done!</h4>
      <p>Fire up a browser and go to <strong>http://<em>username</em>.github.io</strong>.</p>
      <div class="hero-octicon">
        <span class="mega-octicon octicon-check"></span>
      </div>
    </li>
  </ul>
  <!-- End of user site tutorial -->

  <!-- Project Site tutorial -->
  <ul id="project-site" class="tutorial-list wrapper">
    <li class="question">
      <h4>Use a theme, or start from scratch?</h4>
      <p>You have the option to start with one of the pre-built themes,
        <br>or to create a site from scratch.
      </p><ul class="tabs">
        <li><a id="option-generate" href="#generate-step-1" class="selected">Choose a theme</a></li>
        <li><a id="option-vanilla" href="#vanilla-step-1">Start from scratch</a></li>
      </ul>
    </li>

    <li id="generate-step-1" class="option-generate">
      <h4>Repository Settings</h4>
      <p>Head over to <a href="https://github.com/">GitHub.com</a> and create a new repository, or go to an existing one.
        <br><strong>Click on the Settings tab</strong>.</p>

      <img src="images/repo-settings@2x.png" alt="Settings for a repository" width="720">
    </li>

    <li class="option-generate">
      <h4>Theme chooser</h4>
      <p>Scroll down to the <strong>GitHub Pages</strong> section. Press <strong>Choose a theme</strong>.</p>
      <img src="images/launch-theme-chooser@2x.png" alt="Automatic Generator button on GitHub.com, Settings" width="720">
    </li>

    <li class="option-generate">
      <h4>Pick a theme</h4>
      <p>Choose one of the themes from the carousel at the top.
      <br>When you're done, click <strong>Select theme</strong> on the right.</p>

      <img src="images/theme-chooser@2x.png" class="full-size" alt="Choose layout" width="720">
    </li>

    <li class="option-generate">
      <h4>Edit content</h4>
      <p>Use the editor to add content to your site.</p>
      <img class="full-size" src="images/code-editor@2x.png" alt="Add content to your GitHub Pages site" width="720">
    </li>

    <li class="option-generate">
      <h4>Commit</h4>
      <p>Enter a commit comment and click on <strong>Commit changes</strong> below the editor.</p>
      <img class="full-size" src="images/commit-edits@2x.png" alt="Commit Markdown content to your repository" width="720">
    </li>

    <!-- Start of vanilla sub tutorial -->
    <li id="vanilla-step-1" class="option-vanilla animate-in hidden">
      <h4>Create an index file</h4>
      <p>Head over to <a href="https://github.com/">GitHub.com</a> and <a data-proofer-ignore="true" href="https://github.com/new">create a new repository</a>, or go to an existing one.
      <br>Click on the <strong>Create new file</strong> button.</p>

      <img src="images/new-create-file@2x.png" alt="Create a file in your repository" width="720">
    </li>

    <li class="option-vanilla animate-in hidden">
      <h4>Hello World</h4>
      <p>Name the file <code>index.html</code> and type some HTML content into the editor.</p>

      <img src="images/new-index-html@2x.png" alt="Hello World on GitHub.com" width="720">
    </li>

    <li class="option-vanilla animate-in hidden">
      <h4>Commit the file</h4>
      <p>Scroll to the bottom of the page, write a commit message, and commit the new file.</p>

      <img src="images/new-commit-file@2x.png" alt="Commit the file" width="720">
    </li>

    <li class="option-vanilla animate-in hidden">
      <h4>Repository Settings</h4>
      <p><strong>Click on the Settings tab</strong> and scroll down to the GitHub Pages section.
      <br>Then select the <strong>master branch</strong> source and click on the <strong>Save</strong> button.</p>

      <img src="images/source-setting@2x.png" alt="GitHub Pages Source Setting" width="720">
    </li>

    <li class="option-all">
      <h4>…and you're done!</h4>
      <p>Fire up a browser and go to <strong>http://<em>username</em>.github.io/<em>repository</em></strong>.</p>
      <div class="hero-octicon">
        <span class="mega-octicon octicon-check"></span>
      </div>
    </li>
  </ul>



Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](another-page).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# [](#header-1)Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## [](#header-2)Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### [](#header-3)Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### [](#header-4)Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### [](#header-5)Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### [](#header-6)Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![](https://assets-cdn.github.com/images/icons/emoji/octocat.png)

### Large image

![](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
