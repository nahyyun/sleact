import React from 'react';
import { IChannel } from '../../../types/index';
import { NavLink } from 'react-router-dom';

const Channel = ({ channel, workspace }: { channel: IChannel; workspace: string }) => {
  return <NavLink to={`/workspace/${workspace}/channel/${channel.name}`}># {channel.name}</NavLink>;
};

export default Channel;
