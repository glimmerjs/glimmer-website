import Component, { tracked } from '@glimmer/component';

export default class GuidesPage extends Component {
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
