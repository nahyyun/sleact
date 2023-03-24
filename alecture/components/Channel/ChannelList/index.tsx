import React from 'react';
import { IChannel } from '../../../types/index';

const ChannelList = ({ channels }: { channels: IChannel[] }) => {
  return (
    <>{channels?.map((channel) => channel.name)}</>
    // <>
    //   <h2>
    //     <CollapseButton collapse={channelCollapse} onClick={toggleChannelCollapse}>
    //       <i
    //         className="c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline"
    //         data-qa="channel-section-collapse"
    //         aria-hidden="true"
    //       />
    //     </CollapseButton>
    //     <span>Channels</span>
    //   </h2>
    //   <div>
    //     {!channelCollapse &&
    //       channels?.map((channel) => {
    //         return <EachChannel key={channel.id} channel={channel} />;
    //       })}
    //   </div>
    // </>
  );
};

export default ChannelList;
