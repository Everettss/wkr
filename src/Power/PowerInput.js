import React, { Component } from 'react';
import "./PowerInput.css";
import { powMod, euklides } from './calculate';


class PowerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base: this.props.base,
            power: this.props.power,
            mod: this.props.mod,
        };
    }

    render() {
        return (
            <div className="App">
                <form action="#" className="input__wrapper">
                    <input
                        type="text"
                        className="input"
                        value={this.state.base}
                        onChange={e => {
                            this.setState({
                                base: e.target.value,
                            });
                            this.props.onChange(e.target.value, this.state.power, this.state.mod);
                        }}
                    />
                    <input
                        type="text"
                        className="input input--power"
                        value={this.state.power}
                        onChange={e => {
                            this.setState({
                                power: e.target.value,
                            });
                            this.props.onChange(this.state.base, e.target.value, this.state.mod);
                        }}
                    />
                    mod
                    <input
                        type="text"
                        className="input"
                        value={this.state.mod}
                        onChange={e => {
                            this.setState({
                                mod: e.target.value,
                            });
                            this.props.onChange(this.state.base, this.state.power, e.target.value);
                        }}
                    />
                    = {this.state.power === -1 ?
                    euklides(this.props.base, this.props.mod)[euklides(this.props.base, this.props.mod).length - 1].v % this.props.mod :
                    powMod(this.props.base, this.props.power, this.props.mod)[powMod(this.props.base, this.props.power, this.props.mod).length - 1].x}

                </form>

            </div>
        );
    }
}

export default PowerInput;
