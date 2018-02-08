---
layout: default
---

## {{ site.title }}

{{ site.description }}

{% assign images = site.statis_files | where: "image", true %}

### Single
<img class="gallery-peek" src="{{ images[1].path }}" />

### Gallery 1
{% for image in images %}
	<img class="gallery-peek" src="{{ image.path }}" />
{% endfor %}

### Gallery 2
{% for image in images %}
	<img class="gallery-peek" src="{{ image.path }}" />
{% endfor %}