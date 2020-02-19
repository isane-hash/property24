import React, { Component } from 'react';
import defaultBcg from '../images/house-1.jpg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
export default class SingleRoom extends Component {
   
  constructor(props) {
    super(props);
    //setting up properties that i will reuse throughout the project

    this.state = {
      //geting a unique slug name when opening house details
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    //running getroom function
    const house = getRoom(this.state.slug);
    
    // check if the roo if is avvails
    //when available desplay its details

    if (!house) {
      return (
        <div className="error">
          <h3> no such house could be found</h3>
          <Link to="/rooms" className="btn-primary">
            back to home page
          </Link>
        </div>
      );
    }
    // if the house is definded
    // construct the room
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      images
    } = house;
    const [ ...defaultImages] = images;
    
// pass the currnt image in the styledhero function if not pass the default image
    return (
      <>
      
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} house`}>
            <Link to="/rooms" className="btn-primary">
                back to home page
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-house">
          <div className="single-house-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-house-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price : R{price}</h6>
              <h6>size : {size} SQM</h6>
              <h6>
                Rooms :{capacity > 1 ? `${capacity} rooms` : `${capacity} room`}
              </h6>
              
            </article>
          </div>
        </section>
        <section className="house-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
