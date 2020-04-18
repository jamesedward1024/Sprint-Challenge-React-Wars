# Answers

- [x] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
      - React is a library developed to make interacting with the DOM easier and more performant, by using the virtual DOM. React uses the virtual DOM and a copy to compare what has changed with the original and only updated the changed content to the DOM.

- [x] What does it mean to _think_ in react?
      - To think in “blocks” or “components” so see what you can reuse in other parts of your application.

- [x] Describe state.
      - State is the current condition of a component.

- [x] Describe props.
      - Props allow us to pass data and functionality to child from parent state.

- [x] What are side effects, and how do you sync effects in a React component to state or prop changes?
        - Side effects in React are effects that happens outside of the scope of React, such as getting data from an API or using timers. In React we have to option to run blocks of code when a certain effect happens. We can do that using the useEffect hook. Its first argument is the a callback function specifying the code block we want to run and the second argument is the dependencies that we could sync to it.