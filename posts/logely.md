---
title: "Building LogEly"
excerpt: "Creating a minimalistic logging middleware for ElysiaJS."
date: "2024-03-16T05:35:07.322Z"
---

### Introduction

In the world of web development, logging is essential for monitoring and debugging applications. However, many logging tools are either too complex or overly cumbersome, especially when working with modern frameworks like [Elysia](https://elysiajs.com).

That’s why I created **LogEly**—a simple, sleek, and minimalistic logging middleware designed specifically for the [Elysia](https://elysiajs.com) web framework and optimized for [Bun](https://bun.sh). With Logely, the goal is to provide an easy-to-use solution that requires minimal setup, allowing developers to quickly and effectively log server events without getting bogged down by unnecessary customization.

In this blog post, I’ll share the journey of building Logely, from the initial concept to overcoming development challenges, and finally, publishing it on npm. Whether you're new to Elysia or just looking for a straightforward logging solution, I hope you find this story both informative and inspiring.

### Idea and Motivation

The idea for **LogEly** started when I began developing my own application using the [Elysia](https://elysiajs.com) web framework. As any developer knows, having a reliable logging system is crucial for monitoring and debugging. Naturally, I turned to the official [Elysia plugins page](https://elysiajs.com/plugins/overview) to find a suitable logging middleware.

I tested every logging plugin available, hoping to find one that fit my needs. However, I quickly ran into several issues. Some plugins required a lot of customization just to get basic logging up and running, which felt like unnecessary overhead. Others simply didn’t work as expected or were incompatible with my setup. And then there were those that, while functional, had a cluttered or unattractive output that made parsing the logs a chore.

Faced with these challenges, I decided to create my own logging solution—one that would work out of the box with minimal setup. I wanted a logger that would allow developers to focus on building their applications without worrying about configuring endless settings. Thus, **LogEly** was born: a simple, sleek, and minimalistic logging middleware that integrates seamlessly with Elysia and requires almost no configuration to start logging server events effectively.

### Setting Up the Development Environment

When I started developing **LogEly**, I chose to use [Bun](https://bun.sh) for both package management and as the JavaScript runtime. Bun is my go-to tool because of its speed and modern features, making development fast and efficient.

Given that the [Elysia](https://elysiajs.com) framework also utilizes Bun for development, it made perfect sense to use the same stack for building my logging middleware.
