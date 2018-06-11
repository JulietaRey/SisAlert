import React from 'react';
import {Icon} from 'antd';
class Sites extends React.Component {
    render(){
        const listStyle = {
            padding: '0px 30px', 
            color: 'white'
        }
        return (
            <span style={listStyle}>
                <a href=""style={listStyle}>Prevención</a> 
                <Icon type="right"/>
                <a href=""style={listStyle}>Acción</a>
                <Icon type="right"/>
                <a href=""style={listStyle}>Contención</a> 
                <Icon type="right"/>
                <a href=""style={listStyle}>Reportes</a> 
                <Icon type="right"/>
                <a href=""style={listStyle}>Noticias</a> 
            </span>
        );
    }
}

export default Sites;