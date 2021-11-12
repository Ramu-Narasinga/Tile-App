import * as React from 'react';
import styled from "styled-components";

const StyledTileCardTags = styled.div`
      display: flex;
      flex-wrap: wrap;
      margin-top: 12px;
`

const TileCardTag = styled.div`
      margin-right: 8px;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 126.3%;
      letter-spacing: 0.02em;
      color: #545DEA;
`

export const TileCardTags = () => {
      return <StyledTileCardTags>
            <TileCardTag>#tag</TileCardTag>
            <TileCardTag>#tag-1</TileCardTag>
            <TileCardTag>#tag-2</TileCardTag>
            <TileCardTag>#tag-3</TileCardTag>
      </StyledTileCardTags>
}
