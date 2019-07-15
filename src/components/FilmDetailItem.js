import React from 'react';
import axios from 'axios';
import FetchDataPeople from './FetchDataPeople';

class FilmDetailItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fromAppItem: props.location.item,
          data:[],
          people:[]
        }
      }
    async componentDidMount() {
        const url = this.state.fromAppItem.val;
        const res = await axios.get(url);
        this.setState({data: res.data, people: res.data.characters});
    }  
    _renderObjectPeople(){
        const {people} = this.state;
        return Object.entries(people).map(([key,value], i) => {
            return (
                    <div style={{float:'left',marginRight:5}}>
                    <FetchDataPeople val={value}/>
                    </div>
            )
        })
    }
    render() {
        const {data} = this.state;
         return(
             <div class='FilmDetail' style={{border: '1px solid #000',color:'black',padding:50,height:400,width:820,marginTop:10,marginLeft:200}}>
                 <h1>Film Details</h1>
                 <b>Title:</b> {data.title} <br/>
                 <b>Episode Id:</b> {data.episode_id} <br/>
                 <b>Director:</b> {data.director} <br/>
                 <b>Producer:</b> {data.producer} <br/>
                 <b>Opening Crawl:</b> {data.opening_crawl}
                 <div style={{float:'left'}}> 
                     <div style={{width:820}}><div style={{float:'left',marginRight:10}}><b>Characters:</b></div>
                     <div style={{widtfloat:'right'}}>{this._renderObjectPeople()}</div></div><br/>
                 </div> 
             </div>
         );
     }
}      
export default FilmDetailItemPage;