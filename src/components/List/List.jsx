import React, { useState, useEffect } from 'react';
import styles from './List.module.css';
import {Card, Loader} from '../index';
import getDataFromApi from '../../api/index';
const CoalitionList = (props) => {

    function capitalize(string) { 
        return string[0].toUpperCase() +  
          string.slice(1); 
      } 

    function sleep(){
        return new Promise(requestAnimationFrame);
    }
    async function mapDataToComponents(data) {
        let ret = [];
        do{
            for(let i = 0; i < 10; i++){
            let dat = data.pop()
            if(!dat){
                break;
            }
            ret.push(<Card key = {dat.name} callback = {refreshParent} type = {props.type} side = {props.side} value = {dat.name} url = {dat.url ? dat.url : dat.imgUrl}></Card>) 
            }
            await sleep();
        }while(data.length>0);
        return ret;
    }

    const getPlaceholders = () => {
        let ret = [];
        while(ret.length < 30){
            ret.push(<Loader key ={ret.length} width = {250} heigth = {250} style = {{margin: '4%'}}/>);
        }
        return ret;
    }
    const refreshParent = () => {
        if(props.callback){
        props.callback();
        setData(getPlaceholders());
        setNeedsUpdate(true);
        }
    }
    const getAndMapData = async () => {
        let data = await getDataFromApi(props.path);
        return await mapDataToComponents(data);
    }
    const [needsUpdate, setNeedsUpdate] = useState(true);
    const [data, setData] = useState(getPlaceholders());
    useEffect(() => {
        let mounted = true;
        if(needsUpdate){
            getAndMapData()
            .then(data => {
                if(mounted){
                        setData(data);
                        setNeedsUpdate(false)
                }                   //setData(data.map(dat => <Card key = {dat.name} callback = {refreshParent} type = {props.type} side = {props.side} value = {dat.name} url = {dat.url ? dat.url : dat.imgUrl}></Card>));
            });
        }
        return () => {mounted = false};
    })
    return <div>
        <h1>{capitalize(props.type)}</h1>
    <div className = {styles.container}>
        {data}
    </div>
    </div>
}

export default CoalitionList;