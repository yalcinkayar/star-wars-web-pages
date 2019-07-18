    
import React from 'react';
import axios from 'axios';
import PeopleItem from '../components/PeopleItem';

class PeoplePage extends React.Component {
    state = {
        people: [],
        Film: []
    };

    async componentDidMount() {
        const response = await axios.get('https://swapi.co/api/people/?format=json');
      
        this.setState({people: response.data.results});
    }

    render() {
        const {people} = this.state;
        return (
            <div>
            <h1 style={{ color: '#ffaa3b',marginLeft:200}}>Character Informations</h1>      
            {people ?
            <div>
                {people.map((star, index) =>
                    <PeopleItem
                        key={index}
                        data={star}
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

export default PeoplePage;