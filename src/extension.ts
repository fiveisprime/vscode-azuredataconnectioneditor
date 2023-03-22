import * as vscode from "vscode";
import { DataAPIEditorProvider } from "./dataeditor";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(DataAPIEditorProvider.register(context));
}
