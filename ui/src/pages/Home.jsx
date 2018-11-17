import React from 'react';
import FacebookLogin from 'react-facebook-login';

export default function Home() {
  return (
    <FacebookLogin
      appId="1088597931155576"
      autoLoad={true}
      fields="name,email,picture"
      callback={console.log}
    />
  );
}
