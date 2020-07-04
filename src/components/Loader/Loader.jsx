import React from 'react';
import styles from './Loader.module.css';

const Loader = (props) => {
    return(
        <div className = {styles.loader} style = {{ ...props.style, width: props.width, height: props.heigth}}></div>
    )
}

export default Loader;