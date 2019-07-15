    
import React from 'react';
import axios from 'axios';
import FilmItem from '../components/FilmItem';

class FilmsPage extends React.Component {
    state = {
        films: []
    };

    async componentDidMount() {
        const response = await axios.get('https://swapi.co/api/films/?format=json');
        this.setState({films: response.data.results});
       // console.log(response.data.results);
    }

    render() {
        const {films} = this.state;
        return (
            <div>
            <h1 style={{ color: '#ffaa3b',marginLeft:200}}>Film Informations</h1>    
            {films ?
            <div>
                {films.map((film, index) =>
                    <FilmItem
                        key={index}
                        data={film}
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

export default FilmsPage;