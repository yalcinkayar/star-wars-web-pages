import React from 'react';
import axios from 'axios';
import FetchData from './FetchData';
import FetchDataItem from './FetchDataItem';

class HomeDetailItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fromAppItem: props.location.item,
          data:[],
          urls:[],
          vehicles:[],
          species:[],
          starships:[]
        }
      }

    async componentDidMount() {
        const url = this.state.fromAppItem.val;
        const res = await axios.get(url);
        this.setState({data: res.data, urls: res.data.films,vehicles: res.data.vehicles, species: res.data.species, starships: res.data.starships});
    }

    _renderObjectFilm(){
        const {urls} = this.state;
        return Object.entries(urls).map(([key, value], i) => {
            return (
                <div key={key}>
                    <FetchData val={value}/>
                </div>
            )
        })
    }
    _renderObjectSpecies(){
        const {species} = this.state;
        return Object.entries(species).map(([key, value], i) => {
            return (
                <div key={key}>
                    <FetchDataItem val={value}/>
                </div>
            )
        })
    }
    _renderObjectVehicles(){
        const {vehicles} = this.state;
        return Object.entries(vehicles).map(([key, value], i) => {
            return (
                <div key={key}>
                    <FetchDataItem val={value}/>                </div>
            )
        })
    }
    _renderObjectStarShips(){
        const {starships} = this.state;
        return Object.entries(starships).map(([key, value], i) => {
            return (
                <div key={key}>
                    <FetchDataItem val={value}/>
                </div>
            )
        })
    }

    render() {
       const {data} = this.state;
       const {urls} = this.state;
        return(
            <div style={{border: '1px solid #000',color:'black',padding:50,height:350,width:820,marginTop:10,marginLeft:200}}>
                <h1>Star Details</h1>
                <div style={{float:'left',width:350}}>  
                <b>Star Name:</b> {data.name} <br/>
                <b>Height:</b> {data.height}<br/>
                <b>Mass:</b> {data.mass}<br/>
                <b>Hair Color:</b> {data.hair_color}<br/>
                <b>Skin Color:</b> {data.skin_color}<br/>
                <b>Gender:</b> {data.gender}<br/>
                <div style={{width:120,height:5}}><div style={{float:'left'}}><b>Species:</b></div>
                <div style={{float:'right'}}>{this._renderObjectSpecies()}</div></div><br/>
                <div style={{width:280,height:15}}><div style={{float:'left'}}><b>Vehicles:</b></div>
                <div style={{float:'right',width:200}}>{this._renderObjectVehicles()}</div></div><br/>
                <div style={{width:280}}><div style={{float:'left'}}><b>StarShips:</b></div>
                <div style={{float:'right',width:200}}>{this._renderObjectStarShips()}</div></div>                    
                </div>
                <div style={{float:'left',width:400}}> 
                    <div style={{width:230}}><div style={{float:'left'}}><b>Films:</b></div>
                    <div style={{float:'right'}}>{this._renderObjectFilm()}</div></div><br/>
                </div> 
            </div>
        );
    }
}

export default HomeDetailItemPage;