import * as vscode from "vscode";

import * as formatting from "./formatting";

export function activate(context: vscode.ExtensionContext) {
  formatting.activate(context);
}
