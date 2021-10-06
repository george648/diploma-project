import ReactDom from 'react-dom';

export const withPortal = (Component) => (props) =>
  ReactDom.createPortal(<Component {...props} />, document.body);
