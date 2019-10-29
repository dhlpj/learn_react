import React from 'react';
import './css/item.css';

class Item extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        this.props.onClickDelete(e.target.key);    
    }

    render() {
        return (
            <div className='item'>
                <span>
                    {this.props.content}
                </span>
                <button onClick={this.handleDelete} index={this.props.index} className='deleteBtn'>
                    delete
                </button>
            </div>
        );
    }
}

export default Item;