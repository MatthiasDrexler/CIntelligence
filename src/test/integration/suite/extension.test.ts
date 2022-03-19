import { expect } from 'chai';
import * as path from 'path';
import * as vscode from 'vscode';

describe('CIntelligence', () => {
    const CINTELLIGENCE_EXTENSION_ID = "cintelligence.cintelligence";
    const YAML_FILE_PATH = path.join("resources", "yaml", "empty.yml");
    const MAX_LOADING_THRESHOLD_IN_MILLISECONDS = 100;

    it('should be activated if yaml file is opened', async () => {
        const testWorkspace = vscode.workspace.workspaceFolders![0];
        const pathToYamlFile = path.join(testWorkspace.uri.fsPath, YAML_FILE_PATH);
        const openedYamlFile = await vscode.workspace.openTextDocument(vscode.Uri.file(pathToYamlFile));
        await vscode.window.showTextDocument(openedYamlFile);
        await new Promise(it => setTimeout(it, MAX_LOADING_THRESHOLD_IN_MILLISECONDS));

        const cintelligence = vscode.extensions.getExtension(CINTELLIGENCE_EXTENSION_ID);

        expect(cintelligence?.isActive).to.be.true;
    });
});
