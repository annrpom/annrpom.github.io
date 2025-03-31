---
layout: default
title: "posts · annie pompa"
---

<section class="posts">
    <h1>posts</h1>

    <div style="display: none;">
        Debug - All Posts:
        {% for post in site.posts %}
            - {{ post.title }} ({{ post.date }}) [{{ post.url }}]
        {% endfor %}
    </div>

    {% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
    {% for year in postsByYear %}
    <div class="year-section">
        <h2>{{ year.name }}</h2>
        <ul>
            {% for post in year.items %}
                <li>
                    <a href="{{ post.url | relative_url }}">
                        {{ post.title }}
                        <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
                    </a>
                </li>
            {% endfor %}
        </ul>
    </div>
    {% else %}
        <p>No posts found in any year!</p>
    {% endfor %}
</section> 