import * as React from 'react';
import styled from "styled-components";

import { ReactComponent as StackoverflowIcon } from  '../assets/stackoverflow.svg';
import { ReactComponent as DiscourseIcon } from  '../assets/discourse.svg';
import { ReactComponent as ViewsIcon } from  '../assets/views-icon.svg';
import { ReactComponent as LikesIcon } from  '../assets/likes-icon.svg';
import { ReactComponent as ViewsActiveIcon } from  '../assets/views-active-icon.svg';
import { ReactComponent as LikesActiveIcon } from  '../assets/likes-active-icon.svg';

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
      cursor: pointer;

`

const getHeaderIcon = (type: string) => {
      console.log("type:", type);
      switch(type) {
            case 'discourse':
                  return <DiscourseIcon />;
            case 'views':
                  return <ViewsIcon />;
            case 'activeViews':
                  return <ViewsActiveIcon />;
            case 'likes':
                  return <LikesIcon />;
            case 'activeLikes':
                  return <LikesActiveIcon />
            case 'stackoverflow':
                  return <StackoverflowIcon />;
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

      const [viewHovered, setViewHovered] = React.useState(false);
      const [likeHovered, setLikeHovered] = React.useState(false);

      return <StyledTileCardHeaderContainer>
                  {getHeaderIcon(headerIcon)}
                  <StylesTileCardHeaderViewsLikesContainer>
                        <TileCardViewLikeWrapper 
                              onMouseEnter={() => {console.log("mpuse hobvered");setViewHovered(true)}} 
                              onMouseLeave={() => setViewHovered(false)}
                        >
                              {viewHovered ? getHeaderIcon('activeViews') : getHeaderIcon('views')}
                              <TileCardViews>{views}</TileCardViews>
                        </TileCardViewLikeWrapper>
                        <TileCardViewLikeWrapper
                              onMouseEnter={() => setLikeHovered(true)} 
                              onMouseLeave={() => setLikeHovered(false)}
                        >
                              {likeHovered ? getHeaderIcon('activeLikes') : getHeaderIcon('likes')}
                              <TileCardLikes>{likes}</TileCardLikes>
                        </TileCardViewLikeWrapper>
                  </StylesTileCardHeaderViewsLikesContainer>
            </StyledTileCardHeaderContainer>
}