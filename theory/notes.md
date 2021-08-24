# Notes

:construction: This is WIP :construction:
This is the "teacher" place here.
The plan is to share some vision and good practices as well as what we expect from react as opposed to what we shouldn't expect from it.
It should be **translated** at some point, first in french, and then it's open to contributions.

## React

`A JavaScript library for building user interfaces`

- Composition over Inheritance
- ...

### The view

React itself just stands for the View.

### The Props

### The State

### The Lifecycles

![lifecycles-schema](https://user-images.githubusercontent.com/25172711/69901965-9c7ae080-1388-11ea-86c6-541586a3f8c1.jpg)

## Global State Management

---

## Ideas for remote groups learning

### Mob programming

A well organized and timed mob programming could be a good format for a remote session. See how Live share + Teams|Meet|Slack screen sharing works

### Live share on common branch

- Create a set of User Stories for each participant
- Each participant should see every concepts (unless if able to target different needs for each participant => very personalized but hard to coordinate)
- Format cannot be the same as this one. There should be a set of visual components / business modules and state management => see to add features (user account, search, product customizing)

---

## My insights

- Most problems are avoided by keeping components single purposed.

What is this component role ? Should it display something ? Ok then, that's the only thing it does. Should it fetch some data ? Ok, if it must, but all the logic should be factorize elsewhere, components are not the place for business functions definitions.

---

- Prefer using the state setter callback to access the state current value in your effects. Return the current value in case you shouldn't update the state, it will do nothing.

```js
export const Counter = ({ changingProp }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // if "count" was used to do the addition, we'll get an infinite loop
    setCount(currentCount => currentCount + 1);
  }, [changingProp, setCount]);
};
```

---

- BE VERY CAREFUL ABOUT REFERENCES, everywhere.

Anonymous Objects, Functions, whatever, are bad. Always use constants for almost everything: strings, objects and functions. Generally create any object or function outside the scope of the component. If you must, then memoize them with useCallback and useMemo. Doing something like the following could lead to dramatic events :

```js
// BAD
const Component = (props) => {
  // imagine some props or state that makes it re-renders...
  // until props.bar is defined, the reference of foo will change because on each re-render a new object is created
  const foo = props.bar || {};

  return <OtherComponent someProp={foo}>
}
```

Instead do

```js
// GOOD
const emptyFoo = {};

const Component = (props) => {
  // Waw, you saved the planet and get to the next stage
  return <OtherComponent someProp={props.bar || emptyFoo}>
}
```

---

- KEEP YOUR EFFECTS CLEAN: use eslint plugin hooks to be warned about needed dependencies, you can't rely on let and refs to trigger your effects.

While effects dependencies allow to detect changes between updates and trigger the effect consequently, react does only update on props and state change. If your value is mutated after a re-render, or before, you might not get the expected behavior. Embrace immutability the most you can.

---

- Learn redux, it is hard to grasp at first but it feels very natural after you clearly visualize each piece and its underlying mechanics. Everything fits together and enforce the event driven design. Be careful as you can only store static data and limit the amount of it.

---

- Whatever I say, react was thought to let you free in implementation details choices
