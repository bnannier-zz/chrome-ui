# Instructions
```
yarn && yarn start
```

# Consuming Project's Rubric
Is the application that consumes Chrome UI easy to install and start?
The application should only require ```yarn && yarn start``` to install and launch.

Does the application include README with clear installation and launch instructions?

Is application state managed by Chrome UI's Redux store?
State-based props are mapped from the store rather than stored as component state.

Does application state update correctly?
- Updates are triggered by dispatching action creators to reducers.
- Reducers and actions are written properly and correctly return updated state to the store.