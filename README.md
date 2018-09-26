## How to use React.createContext()
- `npm i`
- `npm start`


`React.createContext`

1. `Provider` - accepts a value as a prop that will be passed to Consumers that are descendants of the Provider.
   - one `Provider` cand be connected to many Consumers

Basically the `Provider` is external component that acts like a Redux Store where you can add as many methods/functions as you want.
The normal flow of passing value through props from parent to child components,
I think it would be deprecated especially when you were trying to pass data from parent to level 5 child.


2. `Consumer` - (requires a function as a child - the function receives the current context value)
    - any `Consumer` is a descendant of a `Provider`