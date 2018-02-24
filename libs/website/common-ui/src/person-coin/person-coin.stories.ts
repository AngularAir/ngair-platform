import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {PersonCoinComponent} from "@ngair-platform/website/common-ui";

storiesOf('Person Coin', module)
  .add('with some emoji', () => ({
    component: PersonCoinComponent,
    props: {
      person: {fullName: '😀 😎 👍 💯'},
    },
  }));
