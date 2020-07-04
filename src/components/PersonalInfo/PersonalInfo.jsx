import React from 'react';
import styles from './PersonalInfo.module.css'

const PersonalInfo = (props) => {
    console.log('position:' + props.position);
    return (
        <div className = {styles.container}>
            <table>
                <tbody>
                <tr>
                    <td>Party:</td>
                    <td>{props.party}</td>
                </tr>
                <tr>
                    <td>Position:</td>
                    <td>{props.position ? props.position : 'Członek'}</td>
                </tr>
            </tbody>
            </table>
        </div>
    ) 

}

export default PersonalInfo;