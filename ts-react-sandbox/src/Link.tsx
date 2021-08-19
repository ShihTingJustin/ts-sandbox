import React from 'react';

const Link = (props:{content: string}) => {
  const {content} = props;
  return (
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
};

export default Link;