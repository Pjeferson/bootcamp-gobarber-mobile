import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './createRouter';

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  const Router = createRouter(signed);

  return <Router />;
}
