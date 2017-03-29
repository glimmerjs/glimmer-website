import Component from '@glimmer/component';

export default class LinkTo extends Component {
  click(evt: Event) {
    const target = <HTMLElement>evt.target;
    const path = target.getAttribute('href');

    window.history.pushState({ path }, 'Glimmer', path);
    evt.preventDefault();
  }
};
