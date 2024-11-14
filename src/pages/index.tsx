import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  return (
    <Redirect
      to={`${
        process.env.NODE_ENV === 'production' ? '/ctfl-documentation' : ''
      }/docs/intro`}
    />
  );
}
