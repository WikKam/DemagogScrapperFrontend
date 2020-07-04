import React, { useState, useEffect } from 'react';
import styles from './TopList.module.css';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import getDataFromApi from '../../api/index';
import CountUp from 'react-countup';
import {Loader} from '../index';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LazyLoad from 'react-lazyload'


const TopList = (props) => {
    const getPlaceholders = () => {
        let ret = [];
        while(ret.length < 30){
            ret.push(<Loader key = {ret.length} width = {'100%'} heigth = {130}/>);
        }
        return ret;
    }

    function sleep(){
        return new Promise(requestAnimationFrame);
    }
    async function mapDataToComponents(data) {
        let ret = [];
        let maxlen = data.length;
        do{
            for(let i = 0; i<20;i++){
                let index = maxlen - data.length;
                let chunk = data.pop()
                if(!chunk){
                    break;
                }
                ret.push(<li key = {chunk.name} onClick = {function(){history.push(`/${props.type}/` + chunk.name)}}><span>{index + 1}.</span><span><LazyLoadImage className = {styles.image} src = {chunk.url ? chunk.url : chunk.imgUrl}/></span><span><Link to ={`/${props.type}/` + chunk.name}>{chunk.name}</Link></span><span><CountUp  duration = {2.5} start={0} end = {chunk.trueStatements}/></span><span>{index+1 <= 3 && <i className="fas fa-medal"></i>}</span></li>) 
            }
            await sleep();
        }while(data.length>0);
        return ret;
    }
    const getAndParseData = async () => {
        let needsCaching = false;
        let dat = JSON.parse(sessionStorage.getItem(props.match.url))
         if(!dat){
            console.log('fetching...');
            dat = await getDataFromApi(props.path);
            needsCaching = true;
         }
        let sortedData = dat.sort((a,b) => a.trueStatements - b.trueStatements);
        if(needsCaching){
            sessionStorage.setItem(props.match.url,JSON.stringify(dat))
        }
        return await mapDataToComponents(sortedData);
}
    const[data, setData] = useState(getPlaceholders());
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();
    useEffect(() => {
        let mounted = true;
        if(!isLoaded){
            getAndParseData().then(result => {
                if(mounted){
                    setData(result);
                    setIsLoaded(true);
                }
            });
            return () => mounted = false;
        }
    })
return(<div className = {styles.container}>
    <ul>
        <li><span>Place</span><span style = {{width:'100px'}}></span><span>Name</span><span>True statements</span></li>
        {data}
    </ul>
    </div>)
}

export default TopList;