import * as React from 'react';
import styled from "styled-components";

import { TileCardHeader } from "./tile-card-header";
import { TileCardTags } from "./tile-card-tags";

const StyledTileCardContainer = styled.div`
      background: #ffffff;
      padding: 12px;
      width: 100%;
`;

const TileCardContent = styled.div`
      margin-top: 12px;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 122.3%;
      letter-spacing: 0.02em;
      color: #1c1c1c;
`

export const TileCard = () => {
      return <StyledTileCardContainer>
            <TileCardHeader></TileCardHeader>
            <TileCardContent>Issue with using localhost:8080 and adding multiple authorized redirect_url</TileCardContent>
            <TileCardTags></TileCardTags>
      </StyledTileCardContainer>
}