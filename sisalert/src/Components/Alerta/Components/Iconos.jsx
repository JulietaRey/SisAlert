import React from 'react';
import {Icon} from 'antd';

class Iconos extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '100%',
            textAlign: 'center'
        }
        return (
            <div style={FullWidth}>
               <Icon type="cloud" />
               <Icon type="dingding" />
            </div>
        );
    }
}

export default Iconos;