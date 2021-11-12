import * as React from 'react';
import styled from "styled-components";

import { TileCardHeader } from "./tile-card-header";
import { TileCardTags } from "./tile-card-tags";

type TileProps = {
      headerIcon: string;
      views: number;
      likes: number;
      content: string;
      tags: string[];
}

type TileCardProps = {
      tile: TileProps
};

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

export const TileCard = (props: TileCardProps): JSX.Element => {

      const {
            headerIcon,
            views,
            likes,
            content,
            tags
      } =  props.tile;

      return <StyledTileCardContainer>
            <TileCardHeader
                  likes={likes}
                  views={views}
                  headerIcon={headerIcon}
            ></TileCardHeader>
            <TileCardContent
            >{content}</TileCardContent>
            <TileCardTags
                  tags={tags}
            ></TileCardTags>
      </StyledTileCardContainer>
}