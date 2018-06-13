import React from 'react'
import { Icon } from 'antd';

class Info extends React.Component{
    render(){
        return (
            <span>
                <Icon type={this.props.showInfo.icon}/>
                <b>{this.props.showInfo.title}:</b>
                {this.props.showInfo.text}
            </span>
        );
    }
}

export default Info;