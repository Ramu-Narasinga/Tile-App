import * as React from 'react';
import styled from "styled-components";

import { ReactComponent as StackoverflowIcon } from  '../assets/stackoverflow.svg';
import { ReactComponent as DiscourseIcon } from  '../assets/discourse.svg';
import { ReactComponent as ViewsIcon } from  '../assets/views-icon.svg';
import { ReactComponent as LikesIcon } from  '../assets/likes-icon.svg';

type TileCardHeaderprops = {
      likes: number,
      views: number,
      headerIcon: string
}

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
      color: #444444;
      position: relative;
      bottom: 2px;
`

const TileCardLikes = styled.div`
      margin-left: 4.6px;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: #444444;
      position: relative;
      bottom: 2px;
`

const TileCardViewLikeWrapper = styled.div`
      display: flex;

`

const getHeaderIcon = (type: string) => {
      switch(type) {
            case 'views':
                  return <ViewsIcon />;
            case 'likes':
                  return <LikesIcon />;
            case 'stackoverflow':
                  return <StackoverflowIcon />;
            case 'likes':
                  return <DiscourseIcon />;
            default:
                  return <StackoverflowIcon />;
      }
}



export const TileCardHeader = (props: TileCardHeaderprops): JSX.Element => {

      const {
            likes,
            views,
            headerIcon
      } = props;

      return <StyledTileCardHeaderContainer>
                  {getHeaderIcon(headerIcon)}
                  <StylesTileCardHeaderViewsLikesContainer>
                        <TileCardViewLikeWrapper>
                              {getHeaderIcon('views')}
                              <TileCardViews>{views}</TileCardViews>
                        </TileCardViewLikeWrapper>
                        <TileCardViewLikeWrapper>
                              {getHeaderIcon('likes')}
                              <TileCardLikes>{likes}</TileCardLikes>
                        </TileCardViewLikeWrapper>
                  </StylesTileCardHeaderViewsLikesContainer>
            </StyledTileCardHeaderContainer>
}