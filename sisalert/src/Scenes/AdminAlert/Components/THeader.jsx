import React from 'react';
class THeader extends React.Component {
    render(){
        return (
            <span style={{textAlign:'center'}}>{this.props.name.text}</span>
        );
    }
}
export default THeader;
