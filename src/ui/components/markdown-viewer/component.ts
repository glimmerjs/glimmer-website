import Component, { tracked } from '@glimmer/component';

const hljs = window.hljs;
const MarkdownIt = window.markdownit({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

export default class MarkdownViewer extends Component {

  /**
   * Property that contains the Markdown with the documentation that needs to be rendered.
   * Supports syntax highlighting.
   */
  text: string = null;

  /**
   * Renders the Markdown text with syntax highlighting for code blocks.
   */
  @tracked('args')
  get renderedText() {
    return MarkdownIt.render(this.args.text);
  }
};
