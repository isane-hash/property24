import React, { Component } from 'react';
import items from './data';


const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    airconditioning: false,
    garden: false
  };


  componentDidMount() {
    let rooms = this.formatData(items);
    //
 
    this.setState({
      rooms,
      sortedRooms: rooms,
      loading: false,
      //
      
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let house = { ...item.fields, images, id };
      return house;
    });
    return tempItems;
  }
  //filter and get the slug of the room selected and connect 
  //it with the singleroom page (details page)

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    // get a rrom that is the same and the house.slug room
    const house = tempRooms.find(house => house.slug === slug);
    return house;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  
  render() {
    return (

      <RoomContext.Provider
      // this function will help finding a specific room to open up asingle room page
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
