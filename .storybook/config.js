import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import Alert from '../src/components/Alert';

// Install Vue plugins.
// Vue.use(Vuex);

// Register custom components.
Vue.component('kintone-alert', Alert);


function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);