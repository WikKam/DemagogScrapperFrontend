import React, { useState, useEffect } from 'react';
import styles from './Details.module.css';
import getDataFromApi from '../../api/index';
import {Card, List} from '../index';
import { Pie } from 'react-chartjs-2'
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import CountUp from 'react-countup';

const CoalitionDetails = (props) =>{
    const getLowerType = (type) => {
        switch(type){
            case 'coalitions':
                return 'parties';
            case 'parties':
                return 'members';
            default:
                return undefined;
        }
    }

    window.onpopstate = (event) =>{
        if (event){
            setNeedsUpdate(true);
        }
    }
    const checkIfAnyExists = (array) => {
        return array.reduce((a,b) => a+b) > 0;
    }

    const fetchAndParseData = async () => {
        const data = await getDataFromApi(props.match.url + '/results');
        const result = {
            data:{
            labels: ['True Statements', 'False Statements', 'Manipulation Statements'],
            datasets:[{
                label: 'Amount',
                data: [data.trueStatements, data.falseStatements, data.manipulationStatements],
                backgroundColor: ['rgba(0, 230, 64, 1)','rgba(242, 38, 19, 1)','rgba(238, 238, 0, 1)']
            }]
        },
        url: data.url ? data.url : data.imgUrl,
        party: data.party ? data.party : null,
        position: data.position ? data.position : null
    }
        return result;
    }
    const [data, setData] = useState('');
    const [needsUpdate, setNeedsUpdate] = useState(true);

    const onCardClicked = () => {
        setNeedsUpdate(true);
        console.log('click')
    }
    useEffect(() => {
        let mounted = true;
        if(needsUpdate){
                fetchAndParseData().then(data => {
                    if(mounted){
                    setData(data);
                    setNeedsUpdate(false);
                    }
                });
            }
        
        return () => {mounted = false};
        }
    )
    return <div>
    <div className = {styles.wrapper}>
        <div className = {styles.left}>
            <Card key = {props.match.params.name}  type = {props.type} side = {250} value = {props.match.params.name} url = {data.url}></Card>
            {props.type === 'members' && <PersonalInfo party = {data.party} position = {data.position}></PersonalInfo>}        
            {data.data &&<div className = {styles.data}>
                <div style = {{textAlign: 'center', fontSize: '22px', marginBottom: '5%'}}>Checked statements: <CountUp  duration = {2.5} start={0} end = {data.data.datasets[0].data.reduce((a,b) => a+b)}/></div>
                <div><i className="fas fa-check-circle" style = {{fontSize: '20px', color: 'green'}}></i>True statements: <CountUp  duration = {2.5} start={0} end = {data.data.datasets[0].data[0]}/></div>
                <div><i className="fas fa-times-circle" style = {{fontSize: '20px', color: 'red'}} ></i>False statements: <CountUp  duration = {2.5} start={0} end = {data.data.datasets[0].data[1]}/></div>
                <div><i className="fas fa-exclamation-circle" style = {{fontSize: '20px', color: 'yellow'}}></i>Manipulation statements: <CountUp duration = {2.5}  start={0} end = {data.data.datasets[0].data[2]}/></div>
            </div>}
        </div>
        <div className = {styles.right}>
            {data.data ? checkIfAnyExists(data.data.datasets[0].data) ? <Pie key={props.match.params.name} data = {data.data} width = {430} height = {430}></Pie> : <span>Couldn't find any data for this name :(</span> : <span>loading...</span>}
        </div>
    </div>
       { props.type !== 'members' && <List key = {props.match.params.name} callback = {onCardClicked} type = {getLowerType(props.type)} side = {'150px'} path = {`/${props.match.url.split('/')[1]}/` + props.match.params.name + '/members'}></List>}
    </div>
}

export default CoalitionDetails;