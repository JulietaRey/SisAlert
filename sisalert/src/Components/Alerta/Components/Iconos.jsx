import React from 'react';
import {Icon} from 'antd';

class Iconos extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '100%',
            textAlign: 'right',
            paddingRight: '10px'
        }
        const iconStyle = {
            fontSize: '32px',
            color: 'white',
        }
        return (
            <div style={FullWidth}>
               <Icon type="cloud" style={iconStyle} />
               <Icon type="dingding" style={iconStyle}/>
            </div>
        );
    }
}

export default Iconos;