// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';
// setup instructions at links below
// https://jestjs.io/docs/en/tutorial-react (jest react settings)
// https://babeljs.io/docs/en/configuration (specify babel config in package.json)
it('renders without crashing', () => {
  renderer.create(<div>
    <App baseUrl='http://localhost:3000' />
  </div>);
});