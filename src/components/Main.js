import React from 'react';
import {Profile} from "./Profile";
import nba from '../nba-client';
import DataViewContainer from "./DataViewContainer";
import SearchBar from "./SearchBar";
import {DEFAULT_PLAYER_INFO} from "../constants";

export class Main extends React.Component {
    // constructor() {
    //     super();
    //     const NBA = require("nba");
    //     const curry = NBA.findPlayer('Stephen Curry');
    //     console.log(curry);
    // }
    state = {
        playerInfo: DEFAULT_PLAYER_INFO,
    }

    handleSelectPlayer = (playerName) => {
        this.loadPlayerInfo(playerName);
        console.log(playerName);
    }

    loadPlayerInfo = (playerName) => {
        //const curry = nba.findPlayer('Stephen Curry');
        //console.log(curry);
        // window.nba = nba;
        nba.stats.playerInfo({PlayerID: nba.findPlayer(playerName).playerId})
            .then((response) => {
                console.log(response);
                const {commonPlayerInfo, playerHeadlineStats} = response;
                const playerInfo = {...commonPlayerInfo[0], ...playerHeadlineStats[0]};
                this.setState({playerInfo})
            });
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    }

    render() {
        return (
            <div className="main">
                    <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }
}