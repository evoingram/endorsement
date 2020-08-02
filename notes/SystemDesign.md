# System Design

## [Conference Talk given by Venkat Subramaniam](https://www.youtube.com/watch?v=llGgO74uXMI)

The previous link is a really informative and interesting video about software design principles, and he's a pretty funny guy. It is an old video but it's not coding, so the principles are not really outdated in that sense.

Here's some notes from that talk.

## What's a good design?

- When cost of changing is minimal
- easy to change
- subject to change along the way and see how it stands up to changing.

Sofftware is never written, always rewritten; it has to constantly evolve

## How to create good design

- keep it simple
- first step is let go of ego
  - be unemotional
- important to have people who can challenge each other
- take time to review design and code

- people who are dangerous to work with:
  - those who can't follow instructions
  - those who can only follow instructions

## **KISS**:  Keep It Simple Stupid

## less complexity because it makes code difficult to change

1. Simple keeps you focused.
    - **imperative code** confuses, going all over and trying to figure out where things are
    - **declarative code** tells you what to do, is a lot simpler
2. Simple solves only real problem we know about
3. Simple fails less
4. Simple is easier to understand
    - inherent complexity:  from problem domain; nothing you can do about it; nature of app, domain
    - accidental complexity:  comes from solution used to problem-solve; solution brings in complexities; example concurrency
5. Simple is not necessarily familiar

Good design hides inherent complexity and eliminates accidental complexity.

## **YAGNI**: You Aren't Going To Need It (Yet)

### When should i implement something?

- How much do you know about it?
- Cost of implementing now versus later?

Good design is automatically verifiable (automated testing).  Without automated testing, it is very difficult to postpone stuff.

**cohesion**:  narrow, focused, does one thing well; not taking on more than one responsibility; lowers cost of developing software
**coupling**:  degree of connectivity among things; inheritance is worst form of it; remove if you can

### Knock out before you mock out

Do not keep mocking when you can knock out your dependencies

Can't remove all dependencies, but:

1. Get rid of it
2. Make it loose instead of tight coupling.
3. Use caution

**tight coupling**:  
**loose coupling**:  
