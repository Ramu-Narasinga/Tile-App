import * as React from 'react';
import styled from "styled-components";

import './App.scss';

import { TileStatus } from './Tile/tile-status';
import { TileCard } from './Tile/tile-card';

type TileProps = {
      status: string,
      views: number,
      likes: number,
      headerIcon: string,
      content: string,
      tags: string[]
}

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
      margin-bottom: 48px;
`

function Tile() {

      const tiles: TileProps[] = [{
            status: "solved",
            views: 66,
            likes: 20,
            headerIcon: "stackoverflow",
            content: "Issue with using localhost:8080 and adding multiple authorized redirect_url",
            tags: ["tag", "tag-1", "tag-2", "tag-3"]
      }, {
            status: "pending",
            views: 66,
            likes: 20,
            headerIcon: "discourse",
            content: "Issue with using localhost:8080 and adding multiple authorized redirect_url",
            tags: ["tag", "tag-1"]
      }, {
            status: "solved",
            views: 66,
            likes: 20,
            headerIcon: "stackoverflow",
            content: "Issue with using localhost:8080 and adding multiple authorized redirect_url",
            tags: ["tag", "tag-1", "tag-2", "tag-3"]
      }]

  return (
      <>
            {
                  tiles.map(tile => <StyledTile>
                        <TileStatus status={tile.status}></TileStatus>
                        <TileCard tile={tile}></TileCard>
                  </StyledTile>)
            }
      </>
  );
}

export default Tile;
