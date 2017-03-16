import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import PrMenuBar from 'share/module/project/git/detail/PrMenuBar';


// first  tabName:
// second  number
// third  active or not

const fakeData  = {
  referenceId: '#112624',
  ngBinding: {
    icon: 'https://dn-coding-net-avatar.qbox.me/a96232ab-b9e6-461d-83c5-92cc51549fde.jpg',
    nickName: 'Tank'
  },
  reviewerArea: [{
    icon: 'https://dn-coding-net-avatar.qbox.me/a96232ab-b9e6-461d-83c5-92cc51549fde.jpg',
    nickName: 'candy'
  }],
  labels: [{
    type: 'green',
    text: 'E/设计工作量/M'
  }, {
    type: 'green',
    text: 'E/设计工作量/N'
  }],
  subscribersArea: [{
    icon: 'https://dn-coding-net-avatar.qbox.me/a96232ab-b9e6-461d-83c5-92cc51549fde.jpg',
    nickName: 'candy'
  }]
}

const fakeAction = {
  reviewerArea: () => null
}
storiesOf('PrMenuBar', module)
  .add('all', () => (
    <PrMenuBar 
      data={fakeData}
      action={fakeAction}
      handleTabClick={action('tab clicked')}>Hello utton
    </PrMenuBar>
  ))