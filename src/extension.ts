import * as vscode from 'vscode';
import OnDidSaveHandler from './adapter/files/on-did-save-handler';

export function activate(context: vscode.ExtensionContext) {
	console.debug('Extension was activated: ' + context.extension.id);

    new OnDidSaveHandler().register();
}

export function deactivate(context: vscode.ExtensionContext) {
    console.debug('Extension was deactivated: ' + context.extension.id);
}
