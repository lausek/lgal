# lgal

lgal is a tiny file for creating dynamic galleries. It also offers you:

- small footprint (dev ~5,5 kB; [uglified](https://www.uglifyjs.net/) ~2,3 kB)
- thumbnails
- backwards compatibility

## How to use

Include script itself (and maybe also the standard css file) inside `<head>`

``` html
    <head>
        <!-- more -->
        <link rel="stylesheet" type="text/css" href="https://rawgit.com/lausek/lgal/master/lgal.min.css" />
        <script type="text/javascript" src="https://rawgit.com/lausek/lgal/master/lgal.min.js"></script>
    </head>
```

Now you only need to add `lgal-peek` to the image you want to display. If your gallery has more than one picture, you can group them together by wrapping all tags inside a container with the class `lgal-gallery`.

``` html
<div class="lgal-gallery">
    <a>
        <img class="lgal-peek" src="..." />
    </a>
    <a>
        <img class="lgal-peek" src="..." />
    </a>
    <a>
        <img class="lgal-peek" src="..." />
    </a>
</div>
```

To use a different image as thumbnail, the `full` attribute on the image will become what is displayed on click.


``` html
<div class="lgal-gallery">
    <a>
        <img class="lgal-peek" full="big_image" src="thumbnail" />
    </a>
    <a>
        <img class="lgal-peek" full="big_image" src="thumbnail" />
    </a>
    <a>
        <img class="lgal-peek" full="big_image" src="thumbnail" />
    </a>
</div>
```
