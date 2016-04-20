'use babel';

import Angular2StyleguideSnippetsView from './angular2-styleguide-snippets-view';
import { CompositeDisposable } from 'atom';

export default {

  angular2StyleguideSnippetsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.angular2StyleguideSnippetsView = new Angular2StyleguideSnippetsView(state.angular2StyleguideSnippetsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.angular2StyleguideSnippetsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'angular2-styleguide-snippets:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.angular2StyleguideSnippetsView.destroy();
  },

  serialize() {
    return {
      angular2StyleguideSnippetsViewState: this.angular2StyleguideSnippetsView.serialize()
    };
  },

  toggle() {
    console.log('Angular2StyleguideSnippets was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
