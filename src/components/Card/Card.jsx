import React from 'react';
import styles from './Card.module.css';
import {Link} from 'react-router-dom';

const PartyCard = (props) => {
    const click = () => {
        console.log(props.callback);
        if(props.callback){
            console.log(props.callback);
            props.callback();
            console.log('click from card');
        }
    }
    return (
    <div className= {[styles.container, mapPropsToClass(props)].join(' ')} style = {{maxWidth: props.side + 70}}>
            <Link onClick = {click} to = {`/${props.type}/${props.value}`}>
        <img alt = '' className = {styles.image} src = {props.url} style = {{width: props.side, heigth: props.side}}/>
        <div className = {styles.footer}>{props.value}</div>
        </Link>
    </div>
    )
}
const mapPropsToClass = (props) => {
    switch(props.value){
        case 'Koalicja Polska':
            return styles.kp;
        case 'Koalicja Obywatelska':
            return styles.ko;
        case 'Lewica':
            return styles.lewica;
        case 'Zjednoczona Prawica':
            return styles.zp;
        case 'Konfederacja':
            return styles.konf;
        default:
            return ''
    }
} 


export default PartyCard;