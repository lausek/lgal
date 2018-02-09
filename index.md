---
layout: default
---

{{ site.description }}

{% assign images = site.static_files | where: "image", true %}

### Single
<div class="lgal-gallery">
<a><img class="lgal-peek" src="{{ site.baseurl }}{{ images[1].path }}" /></a>
</div>

### Gallery 1
{% include gallery.html %}

### Gallery 2
{% include gallery.html %}
