# React Native Sample Project

### What is this?

This is an attempt at capturing an extremely simple version of the current architecture we're using to develop apps in React Native using a variety of tools including:

- [Expo](https://expo.io/)
- [Redux](https://redux.js.org/)
- [Redux Thunk Routines](https://github.com/zzdjk6/redux-thunk-routine#readme)

Some other guiding principles:

- Support things like light and dark mode, environment variables and a simple content load state right out of the box
- Use component views to reduce code duplication, simplify themeing and speed up prototyping

### Not sure where to start?

- UI is contained in `src/views`, and interacts with the model layer primarily through reducers, located in `src/reducers`.
- Reducers listen for actions, which in turn communicate with services to modify the global state.
