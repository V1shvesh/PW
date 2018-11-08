import React from 'react';
import { connect } from 'react-redux';
import { Stage, Layer } from 'react-konva';
import 'konva';

import Grid from './components/Grid';

const mapState = state => ({ ...state });

const AppFrame = ({ blocks }) => (
  <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
      <Grid gridBlockSize={40} />
    </Layer>
  </Stage>
);

const App = connect(mapState)(AppFrame);

export default App;
