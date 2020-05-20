import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    fetch('/api/hello').then(res => res.json()).then((res) => setText(res.text))
  }, [])
  return (
    <h1>{text}</h1>
  )
}

render(<App />, document.getElementById('app'))
