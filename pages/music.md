---
layout: page
title: Music
permalink: /music/
---

Before being an engineer I dedicated a lot of time to the art and music, I studied at the national arts school of music my career as a percusionist, nevertheless I wasnt really a lot into drums and hitting instruments lol. Currently I have a musical project called `leo es un cabron` where I compose and produce my own music.

I have in studio a keyboard, an accoustic guitar, a classical guitar, a ukelele, a peruvian box, a harmonica and other instruments.

<article class="page-container">
  <div class="categories-title">
    <h3>Songs I wrote</h3>
    <br>
  </div>
    {% assign target_category = "Music" %}
  {% assign posts_in_category = site.categories[target_category] | sort: "date" | reverse %}

  {% if posts_in_category and posts_in_category.size > 0 %}
    <ul class="categories-list">
      {% for post in posts_in_category %}
       <li><span>{{ post.date | date: "%b %e, %Y" }}: </span><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No posts in “{{ target_category }}”.</p>
  {% endif %}

</article>