---
layout: layout.njk
title: HELLO in the Pikachu Programming Language
tags: ['blog','rss','code']
date: 2023-12-01
---

`HELLO WORLD` in the [Pikachu Language][4] can be [quite terrifying][2]. But it doesn't have to be. 

Presented below is a significantly shorter solution to `HELLO` that makes more use of the [varied commands available][4]. Attentive readers may recognize that this closely relates to an optimal solution to one of the puzzles in [Human Resource Machine][3].


[2]: https://trove42.com/introducing-pikachu-programming-language/
[3]: https://tomorrowcorporation.com/humanresourcemachine
[4]: https://trove42.com/pikachu-syntax-rules/
[5]: https://esolangs.org/wiki/Pikalang
[6]: https://en.wikipedia.org/wiki/Pikachu

```pikachu
pi pi pika pi pi pika pi pikachu        # Push 6 on the pi pikachu stack.
pi pi pika pi pi pika pi pikachu        # Push 6 onto the pi pikachu stack.
pi pikachu pi pikachu                   # Multiply the top 2 elements of the pi pikachu stack.
pika pika pi pikachu                    # Push 2 onto the pi pikachu stack.
pi pikachu pi pikachu                   # Multiply the top 2 elements of the pi pikachu stack.
pi pika                                 # Copy the top element of pi pikachu to pika pikachu
pikachu pikachu pi pikachu              # Pop top element of pi pikachu and write as ASCII (H)
pika pi                                 # Copy the top element of pika pikachu to pi pikachu.
pi pi pika pi pikachu                   # Push 3 onto the pi pikachu stack.
pika pi pi pikachu                      # Push the result of subtract the top 2 elements of pi pikachu stack onto the pi pikachu stack.
pi pika                                 # Copy the top element of pi pikachu to pika pikachu
pikachu pikachu pi pikachu              # Pop top element of pi pikachu and write as ASCII (E)
pika pi                                 # Copy the top element of pika pikachu to pi pikachu.
pi pi pika pika pi pi pika pi pikachu   # Push 7 onto the pi pikachu stack.
pi pika pi pikachu                      # Add the top two elements of the pikachu stack. (gets us to L)
pi pika                                 # Copy the top element of pi pikachu to pika pikachu
pikachu pikachu pi pikachu              # Pop top element of pi pikachu and write as ASCII (L)
pika pi                                 # Copy the top element of pika pikachu to pi pikachu. (Get our L back.)
pikachu pikachu pi pikachu              # Pop top element of pi pikachu and write as ASCII (L)
pika pi                                 # Copy the top element of pika pikachu to pi pikachu. (Get our L back.)
pi pi pika pi pikachu                   # Push 3 onto the pi pikachu stack.
pi pika pi pikachu                      # Add the top two elements of the pikachu stack. (gets us to O)
pikachu pikachu pi pikachu              # Pop top element of pi pikachu and write as ASCII (O)
```

> Ouput
```
HELLO
```

I leave ` WORLD` as an exercise for the reader, who is hopefully more fluent in `Pikachu` than I am.

Note that [Pikachu Language][4] is distinct from [Pikalang][5], which is, I hesitate to say, more reasonable for humans, and turing robots, but perhaps less convenient for the [intendend audience][6].
