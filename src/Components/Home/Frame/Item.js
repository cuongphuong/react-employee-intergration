import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import renderHTML from 'react-render-html';

class CategoryItem extends Component {

    render() {
        return (
            <div className="pg_class_drawer_block">
                <Link to={this.props.url}>
                    <p id="pg_block_icon">
                    {renderHTML(this.props.images)}
                    </p>
                    <p id="pg_block_name">{this.props.title}</p>
                </Link>
            </div>
        );
    }
}

export default CategoryItem;