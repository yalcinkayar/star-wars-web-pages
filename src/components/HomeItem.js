import React from 'react';
import {Link} from 'react-router-dom';

 class HomeItem extends React.Component{
     state ={
         data:[]
     }

     render(){
         const {data} = this.props;
         
         return (
                 <Link to={{pathname: '/homedetailitem',item: {
                    val: data.url
                  }}} style={{ textDecoration: 'none' }}>
                 <div style={{border: '1px solid #000',color:'black', margin: 10, padding: 10,height:130,width:900,marginLeft:200}}>                     
                        <b>Star Name:</b> {this.props.data.name} <br/>
                        <b>Height:</b> {this.props.data.height}<br/>
                        <b>Mass:</b> {this.props.data.mass}<br/>
                        <b>Hair Color:</b> {this.props.data.hair_color}<br/>
                        <b>Skin Color:</b> {this.props.data.skin_color}<br/>
                        <b>Gender:</b> {this.props.data.gender}     
                 </div>
                 </Link>      
         );
     }
 }

 export default HomeItem;
