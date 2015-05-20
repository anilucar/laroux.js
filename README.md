# laroux.js

[![laroux.js logo](https://larukedi.github.io/laroux.js/assets/images/logo-medium.png)](https://larukedi.github.io/laroux.js/)

[This project](https://github.com/larukedi/laroux.js) is a jQuery substitute for modern browsers and mobile devices. But instead of offering some wrappers and own dynamics, it simply provides helper functions to achieve the same objectives as jQuery or Zepto.

Even though keeping compactness is the primary concern of this library, it does contain lightweight versions of some concepts/components, including some UI helpers and MVC.

So far, it has [Ajax](https://github.com/larukedi/laroux.js/wiki/ajax), [Anim](https://github.com/larukedi/laroux.js/wiki/anim), [CSS](https://github.com/larukedi/laroux.js/wiki/css), [Date](https://github.com/larukedi/laroux.js/wiki/date), [DOM](https://github.com/larukedi/laroux.js/wiki/dom), [Events](https://github.com/larukedi/laroux.js/wiki/events), [Forms](https://github.com/larukedi/laroux.js/wiki/forms), [Helpers](https://github.com/larukedi/laroux.js/wiki/helpers), [Keys](https://github.com/larukedi/laroux.js/wiki/keys), [MVC](https://github.com/larukedi/laroux.js/wiki/mvc), [Stack](https://github.com/larukedi/laroux.js/wiki/stack), [Templates](https://github.com/larukedi/laroux.js/wiki/templates), [Timers](https://github.com/larukedi/laroux.js/wiki/timers), [Touch](https://github.com/larukedi/laroux.js/wiki/touch), [Triggers](https://github.com/larukedi/laroux.js/wiki/triggers), [UI](https://github.com/larukedi/laroux.js/wiki/ui), [Vars](https://github.com/larukedi/laroux.js/wiki/vars) and [Wrapper](https://github.com/larukedi/laroux.js/wiki/wrapper) components.


[![Build Status](https://travis-ci.org/larukedi/laroux.js.png?branch=master)](https://travis-ci.org/larukedi/laroux.js)
[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/larukedi/laroux.js/badges/quality-score.png?s=0a36236d23cac2919f7aafff510a636d9437abec)](https://scrutinizer-ci.com/g/larukedi/laroux.js/)
[![Coverage Status](https://coveralls.io/repos/larukedi/laroux.js/badge.png?branch=master)](https://coveralls.io/r/larukedi/laroux.js?branch=master)


## For Users

`laroux.js` is right for you if you:

- Complain about people who do not know the difference between jQuery and Javascript.
- Love working with more compact, organized libraries in smaller sizes (~39K).
- Want to be working with native DOM objects instead of wrappers.
- Want to leverage the debug console's autocomplete/fluent typing.
- Are not satisfied with the performance of other libraries on mobile devices.
- Looking for a light abstraction layer to build your toolkit on.
- See [FAQ](https://larukedi.github.io/laroux.js/faq.html) for more.


### Guides

- [Basic documentation](https://github.com/larukedi/laroux.js/wiki)
- [Feature demonstrations](https://larukedi.github.io/laroux.js/)
- [Frequently asked questions](https://larukedi.github.io/laroux.js/faq.html)
- [Code snippets](https://larukedi.github.io/laroux.js/snippets.html)
- [Benchmark results](https://larukedi.github.io/laroux.js/benchmarks.html)
- [Releases and changelogs](https://github.com/larukedi/laroux.js/releases)


### Installation
The latest version is always downloadable from [releases page](https://github.com/larukedi/laroux.js/releases).


The required files ([laroux.min.js](//rawgit.com/larukedi/laroux.js/master/dist/laroux.min.js) and [laroux.min.css](//rawgit.com/larukedi/laroux.js/master/dist/laroux.min.css)) can also be found at `rawgit.com`.


Including these files would be enough to start using `laroux.js` in your web project. For example:

```html
<link rel="stylesheet" href="//rawgit.com/larukedi/laroux.js/master/dist/laroux.min.css" />
<script src="//rawgit.com/larukedi/laroux.js/master/dist/laroux.min.js"></script>
```


### Sample Usage

```js

$l.ready(function() {
    var buttons = $l(['.confirm-action']);

    $l.css.setProperty(buttons, 'background-color', 'crimson');
    $l.dom.setEvent(
        buttons,
        'click',
        function(event, element) {
            if (!confirm('Are you sure to do it?')) {
                return false; // cancel event
            }
        }
    );
});
```


## For Developers Who Want To Contribute

### Installation

**Alternative 1: Zip Package**

Download [the package](https://github.com/larukedi/laroux.js/archive/master.zip) and launch `npm install && gulp`.

**Alternative 2: Git**

On Terminal or Command Prompt:
``` bash
git clone https://github.com/larukedi/laroux.js project
cd project
npm install
gulp
```


### Requirements

* NPM (https://npmjs.org)
* Gulp (http://gulpjs.com)


## License

See [LICENSE](LICENSE)


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes and suggestions are welcome.

* Fork the repo, push your changes to your fork, and submit a pull request.
* If something does not work, please report it using GitHub issues.
