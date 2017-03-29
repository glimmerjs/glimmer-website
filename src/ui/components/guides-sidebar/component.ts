import Component from '@glimmer/component';

export default class GuidesSidebar extends Component {
  get menuItems() {
    return [
      {
        slug: 'installing',
        title: 'Installing'
      },
      {
        slug: 'getting-started',
        title: 'Getting Started'
      },
      {
        slug: 'filesystem-layout',
        title: 'Filesystem Layout'
      },
      {
        slug: 'templates-and-helpers',
        title: 'Templates and Helpers'
      },
      {
        slug: 'components-and-actions',
        title: 'Components and Actions'
      },
      {
        slug: 'using-glimmer-as-web-components',
        title: 'Using Glimmer as Web Components'
      },
      {
        slug: 'tracked-properties',
        title: 'Change Tracking with Tracked Properties'
      }
    ]
  }
};
