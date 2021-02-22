import React from 'react';
import logo from './logo.svg';
// import './App.css';

import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'

import Button, { ButtonType, ButtonSize } from './components/Button/button'

import MenuItem from './components/Menu/menuItem'
import Menu from './components/Menu/menu';


function App() {
  const positions = useMousePosition()

  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}>
          <MenuItem index={0}>
            cool link
          </MenuItem>
          <MenuItem index={1}>
            cool link 2
          </MenuItem>
          <MenuItem index={2}>
            cool link 3
          </MenuItem>
        </Menu>
        <Button autoFocus onClick={(e) => { alert(11) }} className="aaa" >Hello</Button>
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
        <Button disabled btnType={ButtonType.Link} href="https://www.baidu.com">Hello</Button>


        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <Hello message="hello world" />
        <p>x: {positions.x}, y: {positions.y}</p>

        <LikeButton />
        <MouseTracker /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
