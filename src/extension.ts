import * as vscode from "vscode";

import * as commands from "./commands";

export function activate(context: vscode.ExtensionContext) {
  commands.activate(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}
