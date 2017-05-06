/**
 * BetterDiscord UI Button Component
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
 */

'use strict';

const { React } = require('../../vendor');
import { Component } from 'React';
import CToolTip from './tooltip';

class CUiButton extends Component {

    constructor(props) {
        super(props);
        this.bindings();
        this.setInitialState();
    }

    bindings() {
        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
    }

    setInitialState() {
        this.state = {
            'tooltipVisible': false
        }
    }

    render() {
        let self = this;
        return self.props.tooltip ? self.renderWithTooltip : self.renderWithoutTooltip;
    }

    get renderWithTooltip() {
        let self = this;
        let { tooltip, content, type, disabled } = self.props;
        let { tooltipVisible } = self.state;

        let cn = ['ui-button', 'filled', 'small', 'grow', type, disabled ? 'disabled' : ''];


        return (
            <button ref="button" className={cn.join(' ')} onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} type="button" onClick={this.props.onClick}>
                <CToolTip visible={tooltipVisible} ref="tooltip" text={tooltip.text} pos={tooltip.pos} top={-25} left="auto"/>
                <div className="ui-button-contents">{content}</div>
            </button>
        );
    }

    get renderWithoutTooltip() {
        let self = this;
        let { content } = self.props;
        return (
            <button type="button" onClick={this.props.onClick}>
                <div className="ui-button-contents">{content}</div>
            </button>
        );
    }

    showTooltip() {
        this.setState({ 'tooltipVisible': true });
    }

    hideTooltip() {
        this.setState({ 'tooltipVisible': false });
    }

}

export default CUiButton;