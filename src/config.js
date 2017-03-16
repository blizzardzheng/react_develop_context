import { configure } from '@kadira/storybook';
require('./initialize');

function loadStories() {
  require('./stories/PrMenuBar');
  require('./stories/DetailMenuList');  
  // You can require as many stories as you need.
}

configure(loadStories, module);