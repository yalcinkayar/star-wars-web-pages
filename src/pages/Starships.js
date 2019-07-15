    
import React from 'react';
import axios from 'axios';
import StarshipItem from '../components/StarshipItem';

class StarshipPage extends React.Component {
    state = {
        starships: []
    };

    async componentDidMount() {
        const response = await axios.get('https://swapi.co/api/starships/?format=json');
        this.setState({starships: response.data.results});
    }

    render() {
        const {starships} = this.state;
        return (
            <div>
            <h1 style={{ color: '#ffaa3b',marginLeft:200}}>Starships Informations</h1>  
            {starships ?
            <div>
                {starships.map((starships, index) =>
                    <StarshipItem
                        key={index}
                        data={starships}
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

export default StarshipPage;