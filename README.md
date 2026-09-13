# DevStack

DevStack is a simple and responsive React web application where users can explore different development technologies and build their own technology stack. Users can select technologies, view their selected stack, remove individual technologies, or remove all selected technologies.

## Technologies Used

* React
* JavaScript
* Tailwind CSS
* DaisyUI
* React Toastify
* JSON data
* Vite

## Features

### 1. Explore Technologies

Users can see different technologies with their name, category, description, and icon.

### 2. Build Your Own Stack

Users can select technologies and add them to their own stack.

### 3. Manage Your Stack

Users can remove a single technology or remove all selected technologies from their stack.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React code easier to write and understand because we can create the UI structure directly inside the component.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only.

State is used to store and manage data inside a component. When state changes, React updates the UI.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React hook used to create and manage state in a component.

In this project, I used `useState` to store the selected technologies. When a user selects or removes a technology, the state is updated and the UI changes.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React hook that runs code after the component renders.

I used `useEffect` to load the technology data from the JSON file when the application starts. This allows the technology data to be loaded automatically.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

Each item in a `.map()` list needs a unique `key` so React can identify each item correctly.

It helps React understand which item was added, removed, or changed and update the UI efficiently.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the `YourStack` component. When there are no selected technologies, I show an empty stack message.

For example:

```jsx
{selectedTechnologies.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    // Show selected technologies
)}
```

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using props.

If the child needs to send data or an action back to the parent, the parent can pass a function as a prop. The child can then call that function.

In this project, the parent passes `selectedTechnologies` and `setSelectedTechnologies` to the `YourStack` component. The child uses `setSelectedTechnologies` to update the selected technologies.
