import Component, { tracked } from "@glimmer/component";

export default class GlimmerWebsite extends Component {
  @tracked path: string;

  constructor() {
    super(arguments);
    this.path = window.location.pathname;
  }

  @tracked('path')
  get currentGuidePage() {
    return this.path.replace(/\/guides\//, '');
  }

  @tracked('path')
  get currentPage() {
    if (this.path === '/' || !this.path) {
      return 'index';
    }
    return 'guides';
  }

  @tracked('currentPage')
  get isIndex() {
    return this.currentPage === 'index';
  }

  bindInternalLinks() {
    document.addEventListener('click', (evt: Event) => {
      const target = <HTMLElement>evt.target;
      if (target.tagName === 'A' && target.classList.contains('internal-link-to')) {
        evt.preventDefault();
        this.path = target.getAttribute('href');
      }
    });
  }

  setupRouting() {
    this.bindInternalLinks();
    window.onpopstate = (evt) => {
      if (evt.state) {
        this.path = evt.state.path;
      }
    }
  }
  didInsertElement() {
    this.setupRouting();
  }
}
