// @ts-check

(function () {

  // @ts-ignore
  const vscode = acquireVsCodeApi();


  const mainContainer = /** @type {HTMLElement} */ (document.querySelector('.main'));

  // const addButtonContainer = document.querySelector('.add-button');
  // addButtonContainer.querySelector('button').addEventListener('click', () => {
  //   vscode.postMessage({
  //     type: 'add'
  //   });
  // });

  const errorContainer = document.createElement('div');
  document.body.appendChild(errorContainer);
  errorContainer.className = 'error';
  errorContainer.style.display = 'none';

  /**
   * Render the document in the webview.
   */
  function updateContent(/** @type {string} */ text) {
    let json;
    try {
      if (!text) {
        text = '{}';
      }
      json = JSON.parse(text);
    } catch {
      mainContainer.style.display = 'none';
      errorContainer.innerText = 'Error: Document is not valid json';
      errorContainer.style.display = '';
      return;
    }
    mainContainer.style.display = '';
    errorContainer.style.display = 'none';

    // Render the scratches
    mainContainer.innerHTML = '';

    Object.keys(json.entities || {}).forEach(entity => {
      const element = document.createElement('div');
      element.className = 'entity';
      mainContainer.appendChild(element);

      const name = document.createElement('div');
      name.className = 'name';
      const textContent = document.createElement('span');
      textContent.innerText = entity;
      name.appendChild(textContent);
      element.appendChild(name);

      // TODO: source, permissions.
    });
  }

  // Handle messages sent from the extension to the webview
  window.addEventListener('message', event => {
    const message = event.data; // The json data that the extension sent
    switch (message.type) {
      case 'update':
        const text = message.text;

        // Update our webview's content
        updateContent(text);

        // Then persist state information.
        // This state is returned in the call to `vscode.getState` below when a webview is reloaded.
        vscode.setState({ text });

        return;
    }
  });

  // Webviews are normally torn down when not visible and re-created when they become visible again.
  // State lets us save information across these re-loads
  const state = vscode.getState();
  if (state) {
    updateContent(state.text);
  }
}());
