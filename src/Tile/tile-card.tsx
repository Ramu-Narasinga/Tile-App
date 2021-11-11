import styled from "styled-components";

import { ReactComponent as StackoverflowIcon } from  '../assets/stackoverflow.svg';
import { ReactComponent as ViewsIcon } from  '../assets/views-icon.svg';
import { ReactComponent as LikesIcon } from  '../assets/likes-icon.svg';

const StyledTileCardContainer = styled.div`
      background: #ffffff;
      width: inherit;
      padding: 12px;
`;

const StyledTileCardHeaderContainer = styled.div`
      display: flex;
      justify-content: space-between;
`

const StylesTileCardHeaderViewsLikesContainer = styled.div`
      display: flex;
      justify-content: space-between;
      flex-basis: 28%;
`

const TileCardViews = styled.span`
      margin-left: 4.6px;
`

const TileCardLikes = styled.span`
      margin-left: 4.6px;
`

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

const TileCardTags = styled.div`
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

export const TileCard = () => {
      // Use it like any other component.
      return <StyledTileCardContainer>
            <StyledTileCardHeaderContainer>
                  <StackoverflowIcon />
                  <StylesTileCardHeaderViewsLikesContainer>
                        <ViewsIcon />
                        <TileCardViews>66</TileCardViews>
                        <LikesIcon />
                        <TileCardLikes>66</TileCardLikes>
                  </StylesTileCardHeaderViewsLikesContainer>
            </StyledTileCardHeaderContainer>
            <TileCardContent>Issue with using localhost:8080 and adding multiple authorized redirect_url</TileCardContent>
            <TileCardTags>
                  <TileCardTag>#tag</TileCardTag>
                  <TileCardTag>#tag-1</TileCardTag>
                  <TileCardTag>#tag-2</TileCardTag>
                  <TileCardTag>#tag-3</TileCardTag>
            </TileCardTags>
      </StyledTileCardContainer>
}