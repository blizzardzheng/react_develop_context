import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import MediaList from 'share/module/project/git/detail/mediaList';



// first  tabName:
// second  number
// third  active or not
const fakeData = [{
    icon: 'https://dn-coding-net-avatar.qbox.me/a96232ab-b9e6-461d-83c5-92cc51549fde.jpg',
    mainTitle: '关联分支',
    subTitle: '关联的任务将会在时间轴重现实合并请求动态'
}]

const fakeAction = {
  reviewerArea: () => null
}
storiesOf('DetailMenuList', module)
  .add('all', () => (
    <MediaList
      data={fakeData}
      action={fakeAction}
      handleTabClick={action('tab clicked')}>Hello utton
    </MediaList>
  ))