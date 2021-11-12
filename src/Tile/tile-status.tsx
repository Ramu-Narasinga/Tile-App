import * as React from 'react';
import styled from "styled-components";

import { ReactComponent as SolvedIcon } from '../assets/solved-icon.svg';
import { ReactComponent as PendingIcon } from '../assets/pending.svg';

type TileStatusProps = {
      status: string;
};

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
      display: flex;
      justify-content: space-between;
      flex-basis: 22%;
`;

const UpdatedTime = styled.div`
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      text-align: right;
      color: #8C8C8C;
`

const TileSolvedStatusInfo = styled.span`
      margin-left: 12px;
      color: #38a169;
`

const TilePendingStatusInfo = styled.span`
      margin-left: 12px;
      color: #FAA251;
`

const SolvedStatusComponent = <StyledTileStatus> 
      <StyledTileStatusValue>
            <SolvedIcon />
            <TileSolvedStatusInfo>Solved</TileSolvedStatusInfo>
      </StyledTileStatusValue>
      <UpdatedTime>1 hour ago</UpdatedTime>
</StyledTileStatus>

const PendingStatusComponent = <StyledTileStatus> 
      <StyledTileStatusValue>
            <PendingIcon />
            <TilePendingStatusInfo>Pending</TilePendingStatusInfo>
      </StyledTileStatusValue>
      <UpdatedTime>1 hour ago</UpdatedTime>
</StyledTileStatus>

function renderStatus(status: string) {
      switch(status) {
        case 'solved':
          return SolvedStatusComponent;
        default:
          return PendingStatusComponent;
      }
}

export const TileStatus = ({ status }: TileStatusProps) => {
      // Use it like any other component.
      return renderStatus(status)
}