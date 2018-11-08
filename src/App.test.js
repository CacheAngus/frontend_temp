import React from 'react';
import ReactDOM from 'react-dom';
import CompanyLogin from './loginCompany';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompanyLogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
