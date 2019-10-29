import React from 'react';
import Item from './Item';
import './css/list.css'

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemList:[],
            inputValue: ''
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputValueChange = this.handleInputValueChange.bind(this);
    }
    
    handleDelete(index){
        let itemList = [...this.state.itemList];
        itemList.splice(index,1);
        this.setState({
            itemList: itemList
        });
    }

    getItemList(){
        return (
            this.state.itemList.map((item,index)=>{
                return (
                    <Item content={item} key={index} index={index} onClickDelete={this.handleDelete}>
                    </Item>
                )
            })
        )
    }

    handleSubmit(e){
        e.preventDefault();
        let newItem = this.state.inputValue;
        if(newItem.trim()){
            let newItemList = [...this.state.itemList,newItem];
            this.setState({
                itemList: newItemList,
                inputValue: ''
            });
        }
    }

    handleInputValueChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    render(){
        return (
            <React.Fragment>
                <div className='header'>
                    <form onSubmit={this.handleSubmit} className='addItemForm'>
                        <span>输入需要添加的项</span>
                        <input value={this.state.inputValue} onChange={this.handleInputValueChange}/>
                    </form>
                </div>
                <div>
                    {this.getItemList()}
                </div>
            </React.Fragment>    
        );
    }
}

export default List;