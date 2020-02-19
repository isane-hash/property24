import React from 'react';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

import RoomsList from './RoomsList';

function RoomContainer({ context }) {
  const { loading, sortedRooms} = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
     
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

