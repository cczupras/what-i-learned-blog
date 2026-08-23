---
layout: default
title: Blog Home
---

## All Posts

<ul>
{% for post in site.pages %}
  {% if post.title %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>
