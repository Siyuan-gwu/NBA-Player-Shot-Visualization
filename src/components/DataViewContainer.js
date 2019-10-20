import React, {Component} from 'react';
import {ShotChart} from "./ShotChart";
import CountSlider from "./CountSlider";
import _ from 'lodash';
import { Radio, Row, Col, Switch } from 'antd';

const RadioGroup = Radio.Group;
class DataViewContainer extends Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true,
    }
    onCountSliderChange = (count) => {
        this.setState({minCount : count});
    }
    onChartTypeChange = (e) => {
        this.setState({chartType : e.target.value});
    }
    onToolTipChange = (displayTooltip) => {
        this.setState({displayTooltip});
    }
    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                    displayTooltip={this.state.displayTooltip}/>
                <div className="filters">
                    {this.state.chartType === 'hexbin' ?
                        <CountSlider value={this.state.minCount}
                                     onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/> : null}
                    <br/>
                    <Row>
                        <Col span={9}>
                            <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={4}>
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                onChange={this.onToolTipChange}
                                defaultChecked />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default DataViewContainer;