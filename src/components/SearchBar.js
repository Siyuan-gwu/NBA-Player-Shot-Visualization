import React, {Component} from 'react';
import {Icon, Button, Input, AutoComplete} from 'antd';
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX} from "../constants";

const {Option} = AutoComplete;

class SearchBar extends Component {
    state = {
        dataSource: [],
    };
    //controlled component
    handleSearch = (value) => {
        console.log(value);

        this.setState({
            dataSource: !value ?
                [] : nba.searchPlayers(value).map(player => ({
                    fullName: player.fullName,
                    playerId: player.playerId,
                }))
        });
    }

    onSelect = (playerName) => {
        this.props.handleSelectPlayer(playerName);
    }

    render() {
        const {dataSource} = this.state;
        const options = dataSource.map((player) => (
            <Option key={player.fullName} value={player.fullName}
                    className="player-option">
                <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}/>
                <span className="player-option-label">{player.fullName}</span>
            </Option>
        ));
        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={options}
                onSearch={this.handleSearch}
                onSelect={this.onSelect}
                placeholder="Search NBA Player"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon"/>}/>
            </AutoComplete>
        );
    }
}

export default SearchBar;