import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Bar from 'share/module/project/git/detail/bar';

// first  tabName:
// second  number
// third  active or not
const fakeData  = [
    [
        '动态', null, false,
    ],
    [
        '提交纪录', 2, true,
    ],
    ['文件改动', 10, false],
];

storiesOf('menuBar', module)
  .add('ui', () => (
    <Bar 
      data={fakeData} 
      handleTabClick={action('tab clicked')}>Hello utton
    </Bar>
  ))