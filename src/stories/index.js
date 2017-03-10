import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Aaa from 'share/module/git/common/bar';


storiesOf('bar', module)
  .add('with text', () => (
    <Aaa onClick={action('clicked')}>Hello utton</Aaa>
  ))

