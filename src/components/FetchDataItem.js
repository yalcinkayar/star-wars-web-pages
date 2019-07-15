import React from 'react';
import axios from 'axios';

class FetchDataItem extends React.Component {
    state = {
        data : []
    }
    async componentDidMount(){
        const response = await axios.get(this.props.val);
        this.setState({ data: response.data.name });
    }
    render(){
        return(
            <div>
                {this.state.data}
            </div>
        )
    }
}
export default FetchDataItem;