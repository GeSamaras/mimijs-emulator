// EmulatorComponent.jsx

import React from 'react';

const EmulatorComponent = () => {
  return (
    <div className="emulator">
      <iframe src="./EmulatorJS/index.html">
        <div style={{ width: '640px', height: '480px', maxWidth: '100%' }}>
          <div id="game"></div>
        </div>

        <script type="text/javascript">
          {`
            EJS_player = '#game';
            EJS_core = 'gba';
            EJS_biosUrl = '';
            EJS_gameUrl = '';
            EJS_pathtodata = 'data/';
          `}
        </script>

        <script src="./EmulatorJS/data/loader.js"></script>
      </iframe>
    </div>
  );
};

export default EmulatorComponent;
