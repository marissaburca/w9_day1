import { Component } from "react";

 class ImageContent extends Component{
    render(){
        return <img src={this.props.NewAddress} alt={this.props.NewAlt}   />
    }
 }
 export default ImageContent