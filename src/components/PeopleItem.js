import React from 'react';
import FetchData from './FetchData';
import FetchDataItem from './FetchDataItem';

 class PeopleItem extends React.Component{
     state ={
         data:[]
     }

     _renderObjectFilm(){
         const {data} = this.props;
         return Object.entries(data.films).map(([key, value], i) => {
             return (
                 <div key={key}>
                     <FetchData val={value}/>
                 </div>
             )
         })
     }

     _renderObjectSpecies(){
        const {data} = this.props;
        return Object.entries(data.species).map(([key, value], i) => {
            return (
                <div key={key}>
                    <FetchDataItem val={value}/>
                </div>
            )
        })
    }
    _renderObjectVehicles(){
        const {data} = this.props;
        return Object.entries(data.vehicles).map(([key, value], i) => {
            return (
                <div key={key}>
                    <FetchDataItem val={value}/>                </div>
            )
        })
    }
    _renderObjectStarShips(){
        const {data} = this.props;
        return Object.entries(data.starships).map(([key, value], i) => {
            return (
                <div key={key}>
                    <FetchDataItem val={value}/>
                </div>
            )
        })
    }

     render(){
         return (
                 <div style={{border: '1px solid #000',color:'black', margin: 10, padding: 10,height:210,width:900,marginLeft:200}}>  
                    <div style={{float:'left',width:260}}>    
                        <b>Star Name:</b> {this.props.data.name} <br/>
                        <b>Height:</b> {this.props.data.height}<br/>
                        <b>Mass:</b> {this.props.data.mass}<br/>
                        <b>Hair Color:</b> {this.props.data.hair_color}<br/>
                        <b>Skin Color:</b> {this.props.data.skin_color}<br/>
                        <b>Gender:</b> {this.props.data.gender}<br/>
                    </div>
                    <div style={{float:'left',width:240,marginRight:50}}> 
                         <div><div style={{float:'left',height:130,marginRight:5}}><b>Films:</b></div><div>{this._renderObjectFilm()}</div></div><br/>
                    </div> 
                    <div style={{float:'left',width:350}}> 
                        <div style={{width:120,height:5}}><div style={{float:'left'}}><b>Species:</b></div><div style={{float:'right'}}>{this._renderObjectSpecies()}</div></div><br/>
                        <div style={{width:280,height:5}}><div style={{float:'left'}}><b>Vehicles:</b></div><div style={{float:'right',width:200}}>{this._renderObjectVehicles()}</div></div><br/>
                        <div style={{width:280}}><div style={{float:'left'}}><b>StarShips:</b></div><div style={{float:'right',width:200}}>{this._renderObjectStarShips()}</div></div>
                    </div> 
                 </div>
         );
     }
 }

 export default PeopleItem;