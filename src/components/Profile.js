import React from 'react';
import {PROFILE_PIC_URL_PREFIX} from "../constants";
import {TEAM_PIC_URL_PREFIX} from "../constants";

export class Profile extends React.Component {
    render() {
        const {
            playerId,
            teamAbbreviation,
            teamCity,
            teamName,
            playerName,
            height,
            weight,
            pts, reb, ast, pie,
        } = this.props.playerInfo;
        return (
            <div className="profile">
                <div className="profile-entry player-name">{`${playerName}`}</div>
                <img
                    className="profile-pic"
                    src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                    alt="Profile"
                />
                <div className="profile-entry">
                    <div className="profile-entry-left">Team</div>
                    <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
                </div>
                <img
                    className="team-logo"
                    src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                    alt="Team"
                />
                <div className="profile-entry">
                    <div className="profile-entry-left">Height</div>
                    <div className="profile-entry-right">{`${!height? "unknown" : height}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Weight</div>
                    <div className="profile-entry-right">{`${!weight? "unknown" : weight}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PTS</div>
                    <div className="profile-entry-right">{`${!pts? "unknown" : pts}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">REB</div>
                    <div className="profile-entry-right">{`${!reb? "unknown" : reb}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">AST</div>
                    <div className="profile-entry-right">{`${!ast? "unknown" : ast}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PIE</div>
                    <div className="profile-entry-right">{`${!pie? "unknown" : pie}`}</div>
                </div>

            </div>
        );
    }
}