'use babel';

import Angular2StyleguideSnippets from '../lib/angular2-styleguide-snippets';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Angular2StyleguideSnippets', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('angular2-styleguide-snippets');
  });

  describe('when the angular2-styleguide-snippets:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.angular2-styleguide-snippets')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'angular2-styleguide-snippets:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.angular2-styleguide-snippets')).toExist();

        let angular2StyleguideSnippetsElement = workspaceElement.querySelector('.angular2-styleguide-snippets');
        expect(angular2StyleguideSnippetsElement).toExist();

        let angular2StyleguideSnippetsPanel = atom.workspace.panelForItem(angular2StyleguideSnippetsElement);
        expect(angular2StyleguideSnippetsPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'angular2-styleguide-snippets:toggle');
        expect(angular2StyleguideSnippetsPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.angular2-styleguide-snippets')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'angular2-styleguide-snippets:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let angular2StyleguideSnippetsElement = workspaceElement.querySelector('.angular2-styleguide-snippets');
        expect(angular2StyleguideSnippetsElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'angular2-styleguide-snippets:toggle');
        expect(angular2StyleguideSnippetsElement).not.toBeVisible();
      });
    });
  });
});
