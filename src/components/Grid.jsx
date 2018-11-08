import React from 'react';
import { Shape } from 'react-konva';
import 'konva';

const Grid = ({ gridBlockSize }) => (
  <Shape
    sceneFunc={(ctx, shape) => {
      ctx.beginPath();
      for (let x = 0; x < window.innerWidth; x += gridBlockSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
      }
      for (let y = 0; y < window.innerHeight; y += gridBlockSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
      }
      ctx.closePath();
      ctx.fillStrokeShape(shape);
    }}
    fill="transparant"
    stroke="#444"
    opacity={0.4}
    strokeWidth={2}
  />
);

export default Grid;
