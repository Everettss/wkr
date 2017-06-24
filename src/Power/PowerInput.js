import React, { Component } from 'react';
import "./PowerInput.css";
import { powMod, euklides } from './calculate';


const calculate = (_base, _power, _mod) => {
    const base = parseInt(_base, 10);
    const power = parseInt(_power, 10);
    const mod = parseInt(_mod, 10);
    console.log(base, power, mod);
    const euqlidesRes = euklides(base, mod)[euklides(base, mod).length - 1].v;

    const res = euqlidesRes < 0 ? euqlidesRes + parseInt(mod, 10) : euqlidesRes;
    return power === -1 ?
        res :
        powMod(base, power, mod)[powMod(base, power, mod).length - 1].x
};

class PowerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base: this.props.base,
            power: this.props.power,
            mod: this.props.mod,
            res: 0,
        };
    }

    render() {
        console.log(this.state.res);

        return (
            <div className="App">
                <form action="#" className="input__wrapper">
                    <input
                        type="text"
                        className="input"
                        value={this.props.base}
                        onChange={e => {
                            this.setState({
                                base: e.target.value,
                                res: calculate(e.target.value, this.state.power, this.state.mod)
                            });
                            this.props.onChange(e.target.value, this.state.power, this.state.mod);
                        }}
                    />
                    <input
                        type="text"
                        className="input input--power"
                        value={this.props.power}
                        onChange={e => {
                            this.setState({
                                power: e.target.value,
                                res: calculate(this.state.base, e.target.value, this.state.mod)
                            });
                            this.props.onChange(this.state.base, e.target.value, this.state.mod);
                        }}
                    />
                    mod
                    <input
                        type="text"
                        className="input"
                        value={this.props.mod}
                        onChange={e => {
                            this.setState({
                                mod: e.target.value,
                                res: calculate(this.state.base, this.state.power, e.target.value)
                            });
                            this.props.onChange(this.state.base, this.state.power, e.target.value);
                        }}
                    />
                    = {this.state.res}
                </form>

            </div>
        );
    }
}

export default PowerInput;
