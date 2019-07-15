    
import React from 'react';
import axios from 'axios';
import HomeItem from '../components/HomeItem';

class HomePage extends React.Component {
    state = {
        people: []
    };

    async componentDidMount() {
        const response = await axios.get('https://swapi.co/api/people/?format=json');
      
        this.setState({people: response.data.results});
    }

    render() {
        const {people} = this.state;
        return (
            <div>
            <h1 style={{ color: '#ffaa3b',marginLeft:200}}>Star Wars Information Page</h1>
            {people ?
            <div>
            
                {people.map((star, index) =>
                    <HomeItem
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

export default HomePage;