import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Amplify from "aws-amplify";
import aws_config from './aws-config';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: aws_config.REGION,
    userPoolId: aws_config.cognito.USER_POOL_ID,
    identityPoolId: aws_config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: aws_config.cognito.APP_CLIENT_ID
  }
  // Storage: {
  //   region: config.s3.REGION,
  //   bucket: config.s3.BUCKET,
  //   identityPoolId: config.cognito.IDENTITY_POOL_ID
  // },
  // API: {
  //   endpoints: [
  //     {
  //       name: "notes",
  //       endpoint: config.apiGateway.URL,
  //       region: config.apiGateway.REGION
  //     },
  //   ]
  // }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
