import React from 'react';
import {connect} from 'react-redux';
import * as selectors from '../model/mapSelectors'
import {Gmaps, Marker} from 'react-gmaps';

class Map extends React.Component {

    render() {
        var map;
        if (this.props.coordinates) {
            map = <Gmaps width="100%" height="260" lat={this.props.coordinates.lat} lng={this.props.coordinates.lng} zoom={12}><Marker lat={this.props.coordinates.lat} lng={this.props.coordinates.lng}/></Gmaps>;
        }

        return <div>
            {map}
        </div>;
    }

}

Map = connect(state => ({
    coordinates: selectors.selectCoordinates(state),
}))(Map);

export default Map;
