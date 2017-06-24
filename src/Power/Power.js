import React, { Component } from 'react';
import PowerInput from './PowerInput';
import PowerResults from './PowerResults';
import { powMod, euklides } from './calculate';

class Power extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base: 0,
            power: 1,
            mod: 1,
            res: 0,
        };

        // This binding is necessary to make `this` work in the callback
        this.onChange = this.onChange.bind(this);
    }

    onChange(base, power, mod) {
        this.setState({
            base,
            power,
            mod,
        });
    }

    render() {
        return (
            <div>
                <PowerInput
                    onChange={this.onChange}
                    base={this.state.base}
                    power={this.state.power}
                    mod={this.state.mod}
                />
                <PowerResults
                    base={this.state.base}
                    power={this.state.power}
                    mod={this.state.mod}
                />
            </div>
        );
    }
}

export default Power;
