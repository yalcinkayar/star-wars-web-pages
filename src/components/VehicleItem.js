import React from 'react';

class VehicleItem extends React.Component{
   
    render(){
        const {data} = this.props;
        return (
                <div style={{border: '1px solid #000',color:'black',textDecorationLine: 'none', margin: 10, padding: 10,width:900,marginLeft:200}}>
                    <b>Name:</b> {data.name} <br/>
                    <b>Model:</b> {data.model} <br/>
                    <b>Manufacturer:</b> {data.manufacturer} <br/>
                    <b>Cost In Credits:</b> {data.cost_in_credits} <br/>
                    <b>Length:</b> {data.length} <br/>
                    <b>Consumables:</b> {data.consumables} <br/>
                    <b>Vehicle Class:</b> {data.vehicle_class} <br/>
                </div>
        );
    }
}

export default VehicleItem;