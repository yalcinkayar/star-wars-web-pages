import React from 'react';
import {Link} from 'react-router-dom';

class FilmItem extends React.Component{
   
    render(){
        const {data} = this.props;
        return (
                <Link to={{pathname: '/filmdetailitem',item: {
                    val: data.url
                }}} style={{ textDecoration: 'none' }}>
                <div style={{width:1100, border: '1px solid #000',color:'black',textDecorationLine: 'none', margin: 10, padding: 10,width:900,marginLeft:200}}>
                    <b>Title:</b> {data.title} <br/>
                    <b>Episode Id:</b> {data.episode_id} <br/>
                    <b>Director:</b> {data.director} <br/>
                    <b>Producer:</b> {data.producer} <br/>
                    <b>Opening Crawl:</b> {data.opening_crawl}
                </div>
                </Link>
        );
    }
}

export default FilmItem;