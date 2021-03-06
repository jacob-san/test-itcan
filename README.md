# test-itcan

A React + Redux + NodeJS + MongoDB Application

## Getting Started

### Requirements

- Mac OS X, Windows, or Linux
- [NPM] package + [Node.js](https://nodejs.org/) v8.9.1 or newer
- [Yarn](https://yarnpkg.com/) package + [Node.js](https://nodejs.org/) v8.9.1 or newer
- Text editor or IDE pre-configured with React/JSX/Flow/ESlint

### Quick Start (Instructions for running on your local machine)

1.  Get the latest version

Clone the repo

```
git clone <<repo-name>>
```

2.  Install packages

```
npm install
```

3.  Start the server

```
npm run dev
```

# How application works

Both server/client are run using single npm script using concurrently.

```
npm run dev
```

# Libraries

> React,
> Ant Design,
> Redux,
> Redux-Thunk,
> ExpressJS,
> Mongoose ODM,
> React-GA

## Google Analytics

Google Analytics Page views and event tracking is managed by the Higher Order Component `withAnalytics`. It Uses `react-ga` for Google Analytics.

```javascript
import React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-146426298-1');

export default function withAnalytics(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      this.logPageView();
    }

    logPageView = () => {
      console.log('log Analytics');
      ReactGA.pageview(window.location.pathname);
    };

    logEvent = ({ category, action }) => {
      ReactGA.event({
        category,
        action
      });
    };

    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <WrappedComponent
          logPageView={this.logPageView}
          logEvent={this.logEvent}
          {...this.props}
        />
      );
    }
  };
}
```

## Redux Thunk

Redux Thunk is used for async actions

```javascript
export const login = ({ userName, password }) => async dispatch => {
  const res = await axios.post(`${process.env.API_URL}/api/login`, {
    userName,
    password
  });
  dispatch({ type: SET_AUTH, payload: res.data });
  return res.data;
};
```
