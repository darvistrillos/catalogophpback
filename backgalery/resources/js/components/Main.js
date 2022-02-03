import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Main extends Component {

    render() {
        /* Some css code has been removed for brevity */
        return (
            <div className="container">
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col-6 col-md-6 bg-warning">
                        <a href="/listarcatalogos" className="link-primary" >Listar Catalogos</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
 */

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
