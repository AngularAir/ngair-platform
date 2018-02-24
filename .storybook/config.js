import { configure } from '@storybook/angular';

const req = require.context('../', true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
