import ReactDom from 'react-dom';

export const withPortal = (Component) => (props) => {
  return (
    ReactDom.createPortal(<Component {...props} />, document.body)
  );
};