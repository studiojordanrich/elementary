---
title: blog 
eleventyNavigation:
   key: blog
---





<ul>
    {% for post in collections.posts %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
    {% endfor %}
    </ul>