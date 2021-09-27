# React Course

This project was generated using [Nx](https://nx.dev).

It is meant to be a 3 days long course on React fundamentals, but especially on **managing the state** and **dealing with hooks**.

## Table of Contents

- [Requirements](#requirements)
- [Introduction](#introduction)
  - [Exercise architecture](#exercise-architecture)
  - [Knowledge Prerequisites](#knowledge-prerequisites)
- [Getting Started](#getting-started)
- [What you'll learn](#what-youll-learn)
  - [react](#react)
  - [react-router](#react-router)
  - [styling](#styling)
  - [redux\*](#redux)
- [Workflow](#workflow)
  - [Index](#index)
    - [1/ Fetching, persisting data locally and list rendering](#1-fetching-persisting-data-locally-and-list-rendering)
    - [2/ Using react-router-dom to create pages](#2-using-react-router-dom-to-create-pages)
    - [3/ Wrapping pages, building layout with Material-UI](#3-wrapping-pages-building-layout-with-material-ui)
    - [4/ Component composition, modules architecture, understanding responsibility](#4-component-composition-modules-architecture-understanding-responsibility)
    - [5/ Event Driven Design and shared store, the Redux philosophy within React Context](#5-event-driven-design-and-shared-store-the-redux-philosophy-within-react-context)
    - [6/ Sharing state between providers and components](#6-sharing-state-between-providers-and-components)
    - [7/ Providers cold shower, a global state struggle](#7-providers-cold-shower-a-global-state-struggle)
    - [8/ Custom routing, good practices. Adding checkout](#8-custom-routing-good-practices-adding-checkout)
    - [9/ Controlled Forms and re-renders](#9-controlled-forms-and-re-renders)
    - [10/ Migrate to redux](#10-migrate-to-redux)
- [Resources](#resources)Done in 0.49s.

## Requirements

[![Generic badge](https://img.shields.io/badge/Node->=12-lightgreen.svg)](https://shields.io/) [![Generic badge](https://img.shields.io/badge/Yarn->=1.22-lightgreen.svg)](https://shields.io/)

## Introduction

Here is the tree architecture of the project.

```txt
.
├── README.md
├── apps
│   ├── exercise-1
│   ├── exercise-1-e2e
│   ├── exercise-2
│   ├── exercise-2-e2e
│   ├── exercise-3
│   ├── exercise-3-e2e
│   ├── exercise-4
│   ├── exercise-4-e2e
│   ├── exercise-5
│   ├── exercise-5-e2e
│   ├── exercise-6
│   ├── exercise-6-e2e
│   ├── exercise-7
│   ├── exercise-7-e2e
│   ├── exercise-8
│   ├── exercise-8-e2e
│   ├── exercise-9
│   ├── exercise-9-e2e
│   ├── react-course-demo
│   └── react-course-demo-e2e
├── babel.config.json
├── examples
│   ├── react
│   ├── redux
│   └── styling
├── jest.config.js
├── jest.preset.js
├── libs
│   ├── api
│   └── course-hints
├── nx.json
├── package.json
├── tools
│   ├── generators
│   └── tsconfig.tools.json
├── tsconfig.base.json
├── tslint.json
├── workspace.json
└── yarn.lock
```

Each `exercise-*` directory is the solution of the previous one.
Validation of an exercise is made through passing the e2e tests, it is a **BDD approach** with the tests already written in Cypress.

### Knowledge Prerequisites

- Knowing the basics of React, having already done something basic like a to do list. [See Documentation](https://reactjs.org/)

- Being familiar with JS Native Objects and their methods (Array, String, Object, Number, Boolean) [See Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

- Having notions of destructuring, spreading, currying, functional programming, immutability is a huge plus.

- Read **Kent C. Dodds** articles [Application state management](https://kentcdodds.com/blog/application-state-management-with-react)
  and [How to use Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

## Getting Started

In your terminal

- Install the project locally: `git clone https://github.com/generous-folks/react-course-v2.git`
- Install the dependencies: `cd react-course && yarn`

Starting the app:

- For the demo: `yarn start react-course-demo`
- For an exercise: `yarn start exercise-$exerciseNumber`
  > e.g. : `yarn start exercise-1`

Testing your exercise completion

- `yarn test exercise-$exerciseNumber`
  > e.g. : `yarn test exercise-1`

## What you'll learn

You will create a simple shopping app step by step.
From the basic vanilla React example to a nicely featured one with routing, global state management, lazy loading and so on.
It consists on a shared layout, a list of products, a product page, a shopping cart and a checkout form mostly.

We can't cover everything in this course, but we try to give a good overview of some common ways to build react apps.

> \* = optional

### react

- Understanding of React principles
- Using Class\* and Functional components
- Managing state and props
- PropTypes checking
- Understanding components life cycles
- Context API
- Using hooks
- Architecture and good practices

### react-router

- Basic Routing
- Param Matching
- Dynamic Routing and Code splitting\*

### styling

- CSS\*
- CSS-in-JS
- Material-UI library
- Styled-Components\*
- Global Theme usage\*

### redux\*

- Configuration and Architecture
- Basic global state management usage
- Middleware
- Connected Router

## Workflow

The repository contains a bunch of folders like :

- **examples** : samples of everything you need to develop the app and to avoid spending time on google/stack overflow
- **theory** : some important concepts you should know to master this course
- **final-version** : a demo, or the actual final version of the app we're aiming to develop.
- **exercise-X** : All the exercises folders. We thought it was important to jump from an exercise to another having a corrected version of the previous exercise. It also makes more sense for group learning to always be on an equal state while going further.

### Index

#### 1/ Fetching, persisting data locally and list rendering

See [instructions](./apps/exercise-1/src/assets/README.md)

#### 2/ Using react-router-dom to create pages

See [instructions](./apps/exercise-2/src/assets/README.md)

#### 3/ Wrapping pages, building layout with Material-UI

See [instructions](./apps/exercise-3/src/assets/README.md)

#### 4/ Component composition, modules architecture, understanding responsibility

See [instructions](./apps/exercise-4/src/assets/README.md)

#### 5/ Event Driven Design and shared store, the Redux philosophy within React Context

See [instructions](./apps/exercise-5/src/assets/README.md)

#### 6/ Sharing state between providers and components

See [instructions](./apps/exercise-6/src/assets/README.md)

#### 7/ Providers cold shower, a global state struggle

See [instructions](./apps/exercise-7/src/assets/README.md)

#### 8/ Custom routing, good practices. Adding checkout

See [instructions](./apps/exercise-8/src/assets/README.md)

#### 9/ Controlled Forms and re-renders

See [instructions](./apps/exercise-9/src/assets/README.md)

#### 10/ Migrate to redux\*

See [instructions](./apps/exercise-10/src/assets/README.md)

## Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [React docs](https://reactjs.org/)
- [hooks lifecycles schema](https://wavez.github.io/react-hooks-lifecycle/)
- **Kent C. Dodds** articles [Application state management](https://kentcdodds.com/blog/application-state-management-with-react)
  and [How to use Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

## Contributions

Feel free to create an issue or fork this repository and submit a PR.

- if something is not correct or outdated in an exercise

Shit happens, I might have made something wrong

- if you want to create more exercises with non-covered concepts

Using Nx allows to develop many apps into a single monorepo with a certain ease.
If you want to create new exercises, be my guest. It could also be something totally different as long as it's related to react, hence the repository title.

- if you want to add translations to give this course in your language of choice

This course contains some README files for exercises instructions and for theory parts in english.
I hope a documented system will be in place when you'll read these lines to add translations seamlessly.

TODO:

- Test React Contexts with testing library
- Add article page $id navigation to all e2e past exercise 5
