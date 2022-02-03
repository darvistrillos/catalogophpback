
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Products extends Component {


    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            products: [],
        }
    }
    /*componentDidMount() is a lifecycle method
* that gets called after the component is rendered
*/

    componentDidMount() {
        /* fetch API in action */
        fetch('/api/v1/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                //Fetched product is stored in the state
                this.setState({ products });
            });
    }

    renderProducts() {
        return this.state.products.map(products => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */

                <div className="row" key={products.id}>
                    <div className="col-sm">
                        {products.title}
                    </div>
                    <div className="col-sm">
                        {products.description}
                    </div>
                    <div className="col-sm">
                        {products.price}
                    </div>
                </div>

            );
        })
    }


    render() {
        return (
            <div className="container">
                <br></br>
                <div className='text-center'><h3>Listado Catalogos</h3></div>
                <div>
                    <div className="container">

                        {this.renderProducts()}

                    </div>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <div class="row">
                        <div class="col-4 col-sm-4 bg-warning">
                            <a href="/" className="link-primary" >Pincipal</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Products;

if (document.getElementById('products')) {
    ReactDOM.render(<Products />, document.getElementById('products'));
}
