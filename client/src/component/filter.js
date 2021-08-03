import React, { Component } from "react";
import Select from 'react-select'
import "../css/filter.css";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                amenities: [],
                range: 40,
            }
        };
    }
    
    amenities = [
        { value: 'free_parking', label: 'free_parking' },
        { value: 'free_wifi', label: 'free_wifi' },
        { value: 'gym', label: 'gym' },
        { value: 'pets', label: 'pets' },
        { value: 'pool', label: 'pool' },
        { value: 'restaurant', label: 'restaurant' },
        { value: 'spa', label: 'spa' },
    ]

    onAmenitiesChange(amenities) {
        this.setState(prevState => {
            return {
                filters: {
                    ...prevState.filters,
                    amenities: amenities
                }
            }
        }, () => this.props.updateOnFilter(this.state.filters))
    }

    render() {
        return (
            <div>
                <div className="filterHead">FILTERS:</div>

                <div className="filterAmenities">
                    <label><h3>Amenities:</h3></label>
                    <Select
                        options={this.amenities}
                        isMulti
                        className="amenities-multi-select"
                        classNamePrefix="select"
                        placeholder="Choose Amenities"
                        onChange={this.onAmenitiesChange.bind(this)}
                    />
                </div>
            </div>

        );
    }
}
export default Filter;