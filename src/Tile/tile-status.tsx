import * as React from 'react';
import styled from "styled-components";

import { ReactComponent as SolvedIcon } from '../assets/solved-icon.svg';

// Styled component named StyledTileStatus
const StyledTileStatus = styled.div`
      display: flex;
      justify-content: space-between;
      width: 302px;
      margin-bottom: 8px;
`;

const StyledTileStatusValue =  styled.div`
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #38a169;
      display: flex;
      justify-content: space-between;
      flex-basis: 22%;
`;

export const TileStatus = () => {
      // Use it like any other component.
      return <StyledTileStatus> 
            <SolvedIcon />
            <StyledTileStatusValue>Solved</StyledTileStatusValue>
      </StyledTileStatus>
}