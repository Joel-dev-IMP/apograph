import * as vscode from "vscode";

import * as commands from "./commands";
import * as typst from "./typst";

export function activate(context: vscode.ExtensionContext) {
  commands.activate(context);
  typst.activate(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}
