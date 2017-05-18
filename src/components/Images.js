import React, {Component} from 'react'

class Image extends Component {
    render(){
        const {type, name, cssClass, textAlt} = this.props;
        const imgUrl = require(`../images/${name}.${type}`);  
        return (
            <img src={imgUrl} className={cssClass} alt={textAlt} />
        );
    }       
}
 export default Image