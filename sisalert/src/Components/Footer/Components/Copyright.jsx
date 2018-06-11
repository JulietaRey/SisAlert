import React from "react"

class Copyright extends React.Component{
    render() {
        const copyrightStyle = {
            color: '#a5a3a3'
        }
        return(
            <div style={copyrightStyle}>
                Copyright - 2018. Lorem ipsum dolor sit amet, consectetur adispiscing eit. Nunc maximus nulla ut commodo sagittis, sapien dui mattis dui
            </div>
        );
    }
}

export default Copyright;
