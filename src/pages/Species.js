    
import React from 'react';
import axios from 'axios';
import SpeciesItem from '../components/SpeciesItem';

class SpeciesPage extends React.Component {
    state = {
        species: []
    };

    async componentDidMount() {
        const response = await axios.get('https://swapi.co/api/species/?format=json');
        this.setState({species: response.data.results});
    }

    render() {
        const {species} = this.state;
        return (
            <div>
            <h1 style={{ color: '#ffaa3b',marginLeft:200}}>Species Informations</h1>      
            {species ?
            <div>
                {species.map((species, index) =>
                    <SpeciesItem
                        key={index}
                        data={species}
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

export default SpeciesPage;