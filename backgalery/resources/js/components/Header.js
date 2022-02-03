import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Header extends Component {

    render() {
        /* Some css code has been removed for brevity */
        return (
            <div className="container">
                                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <small class="text-muted"><div className="card-header">Horario {new Date().toLocaleTimeString()}.</div></small>

                            <div className="card-body">Listado de productos por catalogos</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
 */

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
