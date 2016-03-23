# Toggle Dummy

Toggle Dummy makes it clear what elements on the page are "dummy" info (i.e.
still need to be implemented on the backend).

## Usage

In your main application styling page, add a script for toggle dummy and a link
to it's stylesheet.

```
<script src="https://rawgit.com/thoughtbot/toggle_dummy/master/toggle-dummy.js">
</script>
<link rel="stylesheet" type="text/css"
href="https://rawgit.com/thoughtbot/toggle_dummy/master/toggle-dummy.css">
```

You will need to add the "dummy" class to any elements in your UI that
aren't complete on the backend. Then, add appropriate styling for when the dummy
class is active. For example:

```scss
//dummy.scss

.dummy {
  &.is-active{
    opacity: 0.4;
  }
}
```
## Contributing

See the [CONTRIBUTING] document.
Thank you, [contributors]!

  [CONTRIBUTING]: CONTRIBUTING.md
  [contributors]: https://github.com/thoughtbot/$(REPO_NAME)/graphs/contributors

## License

Toggle Dummy is Copyright (c) 2016 thoughtbot, inc.
It is free software, and may be redistributed
under the terms specified in the [LICENSE] file.

  [LICENSE]: /LICENSE

## About

![thoughtbot](https://thoughtbot.com/logo.png)

Toggle Dummy is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community]
or [hire us][hire] to help build your product.

  [community]: https://thoughtbot.com/community?utm_source=github
  [hire]: https://thoughtbot.com/hire-us?utm_source=github
