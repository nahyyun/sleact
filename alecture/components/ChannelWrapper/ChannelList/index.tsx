import React from 'react';
import { IChannel } from '../../../types/index';
import Channel from '@components/ChannelWrapper/Channel';
import CollapseButton from '@components/common/CollapseButton';
import useCollapse from '@hooks/useCollapse';

const ChannelList = ({ workspace, channels }: { workspace: string; channels: IChannel[] }) => {
  const { collapse: channelCollapse, toggleCollapse: toggleChannelCollapse } = useCollapse();

  return (
    <>
      <h2>
        <CollapseButton collapse={channelCollapse} onToggle={toggleChannelCollapse}>
          <span>Channels ▾</span>
        </CollapseButton>
      </h2>
      <div>
        {channelCollapse &&
          channels?.map((channel) => <Channel key={channel.id} channel={channel} workspace={workspace} />)}
      </div>
    </>
  );
};

export default ChannelList;
