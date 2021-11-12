import * as React from 'react';
import styled from "styled-components";

import { ReactComponent as StackoverflowIcon } from  '../assets/stackoverflow.svg';
import { ReactComponent as ViewsIcon } from  '../assets/views-icon.svg';
import { ReactComponent as LikesIcon } from  '../assets/likes-icon.svg';

const StyledTileCardHeaderContainer = styled.div`
      display: flex;
      justify-content: space-between;
`

const StylesTileCardHeaderViewsLikesContainer = styled.div`
      display: flex;
      justify-content: space-between;
      flex-basis: 28%;
`

const TileCardViews = styled.div`
      margin-left: 4.6px;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.02em;
`

const TileCardLikes = styled.div`
      margin-left: 4.6px;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.02em;
`

export const TileCardHeader = () => {

      return <StyledTileCardHeaderContainer>
                  <StackoverflowIcon />
                  <StylesTileCardHeaderViewsLikesContainer>
                        <div>
                              <ViewsIcon />
                        </div>
                        <TileCardViews>66</TileCardViews>
                        <div>
                              <LikesIcon />
                        </div>
                        <TileCardLikes>20</TileCardLikes>
                  </StylesTileCardHeaderViewsLikesContainer>
            </StyledTileCardHeaderContainer>
}