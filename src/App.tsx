import * as React from 'react';
import styled from "styled-components";

import './App.scss';

import { TileStatus } from './Tile/tile-status';
import { TileCard } from './Tile/tile-card';


const StyledTile = styled.div`
      width: 302px;
      height: 145px;
      border: 1px solid #ebebeb;
      box-sizing: border-box;
      box-shadow: 0px 2px 10px rgba(235, 235, 235, 0.65);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 12px;
`

function Tile() {
  return (
      <StyledTile>
            <TileStatus></TileStatus>
            <TileCard></TileCard>
      </StyledTile>
  );
}

export default Tile;
