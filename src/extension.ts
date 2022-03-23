import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.debug('Extension was activated: ' + context.extension.id);
}

export function deactivate() {}
