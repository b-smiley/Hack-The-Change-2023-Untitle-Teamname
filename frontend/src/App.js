import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#843e4b' }}>
      <nav className="Tabs">
        <a href="#home" className="Logo">
          <img src="Icon.png" alt="FF_Logo" className="Inverted" />
        </a>
        <ul>
        <li><a href="#buy" style={{ color: '#fcfcfc' }}>BUY</a></li>
        <li><a href="#sell" style={{ color: '#fcfcfc' }}>SELL</a></li>
        <li><a href="#recipes" style={{ color: '#fcfcfc' }}>RECIPES</a></li>
        <li><a href="#login" className="LoginTab" style={{ color: '#fcfcfc' }}>LOGIN</a></li>
        </ul>
      </nav>

      <div className="Container">
        <div className="Welcome">
          <img src="Logo(3).png" alt="Main Logo" className="WelcomeLogo" />
        </div>

        <div className="Content">
          {/* Scrollable content */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce et semper metus. Integer et tellus quis justo eleifend mattis.
            Nulla facilisi. Sed eu tristique velit. In hac habitasse platea dictumst.
            Integer non metus sit amet sem pulvinar semper in ac libero.
            Mauris in nibh ut justo euismod fermentum. Sed ut arcu nec sapien finibus interdum.
            Duis eget tortor eu metus auctor scelerisque. Ut vehicula diam sit amet accumsan vehicula.
            Donec condimentum cursus velit, in volutpat arcu bibendum ut.
            Integer ut mauris vel quam posuere pellentesque sit amet id metus.
            Nam id erat a sem dictum bibendum. Donec eu velit ut felis eleifend scelerisque.
            Vivamus ut varius elit. Sed ac risus vel dui fermentum hendrerit.
            Morbi vitae lacus vel odio consectetur elementum. Curabitur nec orci sed nulla varius
            bibendum nec nec tortor. Vivamus quis felis sed turpis fringilla ullamcorper.
            Integer fermentum, justo quis luctus cursus, tortor nulla rhoncus justo,
            nec aliquam mi sapien vitae nisi. Sed quis metus quis justo venenatis mattis.
            Sed auctor, odio a accumsan rhoncus, justo libero ultrices leo,
            vel laoreet sem elit ut lacus. Integer vitae turpis ac sapien aliquet lobortis.
            Nam tincidunt sapien vitae justo elementum, a elementum odio auctor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
