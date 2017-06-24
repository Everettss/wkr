import React, { Component } from 'react';
import { powMod, euklides } from './calculate';
import './PowerResults.css';

class PowerResults extends Component {
    render() {
        let table;
        if (parseInt(this.props.power, 10) === -1) {
            const res = euklides(this.props.base, this.props.mod);
            table = (
                <table>
                    <tbody>
                    <tr>
                        <th>i</th>
                        <th>u</th>
                        <th>u'</th>
                        <th>v</th>
                        <th>v'</th>
                        <th>n</th>
                        <th>a</th>
                        <th>q</th>
                        <th>r</th>
                    </tr>
                    {res.map(x => (
                        <tr key={x.i}>
                            <td>{x.i}</td>
                            <td>{x.u}</td>
                            <td>{x.uPrim}</td>
                            <td className="important">{x.v}</td>
                            <td>{x.vPrim}</td>
                            <td>{x.n}</td>
                            <td>{x.a}</td>
                            <td>{x.q}</td>
                            <td>{x.r}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            );
        } else {
            const res = powMod(this.props.base, this.props.power, this.props.mod);
            table = (
                <table>
                    <tbody>
                    <tr>
                        <th>i</th>
                        <th>x</th>
                        <th>a</th>
                        <th>t</th>
                    </tr>
                    {res.map(x => (
                        <tr key={x.i}>
                            <td>{x.i}</td>
                            <td className="important">{x.x}</td>
                            <td>{x.a}</td>
                            <td>{x.t}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            );
        }
        return (
            <div>
                {table}
            </div>
        );
    }
}

export default PowerResults;
