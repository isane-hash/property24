import React from 'react';
import Room from './Room';
const RoomsList = ({ rooms }) => {

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} house={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
