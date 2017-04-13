import Component, { tracked } from '@glimmer/component';

interface Window { docs: any; }
declare var window: Window;

export default class GuidesPage extends Component {
  args: {
    currentGuidePage: (string)
  };

  @tracked('args')
  get guideText() {
    if (window.docs.guides.hasOwnProperty(this.args.currentGuidePage)) {
      return window.docs.guides[this.args.currentGuidePage];
    } else {
      return `# Not found \r\n ### Whoops. Looks like what you're looking for can't be found.`;
    }
  }

  didInsertElement() {
    document.body.classList.remove('index');
    document.body.classList.add('guides');
  }
};
