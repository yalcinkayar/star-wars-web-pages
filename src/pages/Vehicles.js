    
import React from 'react';
import axios from 'axios';
import VehicleItem from '../components/VehicleItem';

class VehiclePage extends React.Component {
    state = {
        vehicles: []
    };

    async componentDidMount() {
        const response = await axios.get('https://swapi.co/api/vehicles/?format=json');
        this.setState({vehicles: response.data.results});
    }

    render() {
        const {vehicles} = this.state;
        return (
            <div>
            <h1 style={{ color: '#ffaa3b',marginLeft:200}}>Vehicle Informations</h1>      
            {vehicles ?
            <div>
                {vehicles.map((vehicles, index) =>
                    <VehicleItem
                        key={index}
                        data={vehicles}
                    />
                )}
            </div>
            :
                <div> yükleniyor...</div>
            }
            </div>
        );
    }
}

export default VehiclePage;