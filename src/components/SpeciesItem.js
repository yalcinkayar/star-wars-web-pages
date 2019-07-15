import React from 'react';

class SpeciesItem extends React.Component{
   
    render(){
        const {data} = this.props;
        return (
                <div style={{border: '1px solid #000',color:'black',textDecorationLine: 'none', margin: 10, padding: 10,width:900,marginLeft:200}}>
                    <b>Name:</b> {data.name} <br/>
                    <b>Classification:</b> {data.classification} <br/>
                    <b>Average Height:</b> {data.average_height} <br/>
                    <b>Skin Colors:</b> {data.skin_colors} <br/>
                    <b>Hair Colors:</b> {data.hair_colors} <br/>
                    <b>Eye Colors:</b> {data.eye_colors} <br/>
                    <b>Average Lifespan:</b> {data.average_lifespan} <br/>
                </div>
        );
    }
}

export default SpeciesItem;