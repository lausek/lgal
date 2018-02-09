---
layout: default
---

{{ site.description }}

{% assign images = site.static_files | where: "image", true %}

### Single
<img class="lgal-peek" src="{{ site.baseurl }}{{ images[1].path }}" />

### Gallery 1
{% include gallery.html %}

### Gallery 2
{% include gallery.html %}
