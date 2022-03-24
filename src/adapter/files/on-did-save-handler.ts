import * as vscode from 'vscode';
import * as path from 'path';
import GitlabCiJobExtractor from '../../domain/gitlab/gitlab-ci-job-extractor';
import IHandler from '../i-handler';
import YamlParser from '../../domain/yaml/yaml-parser';

export default class OnDidSaveHandler implements IHandler {
    public register(): void {
        vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
            this.invokeAnalysis(document);
        });
    }

    private async invokeAnalysis(document: vscode.TextDocument): Promise<void> {
        const associatedWorkspace = vscode.workspace.getWorkspaceFolder(document.uri);
        if (!associatedWorkspace) {
            return;
        }

        const pathToMainGitlabYaml = path.join(associatedWorkspace.uri.fsPath, ".gitlab-ci.yml");
        const mainGitlabYaml = vscode.workspace.textDocuments.find(it => it.fileName === pathToMainGitlabYaml);
        if (!mainGitlabYaml) {
            return;
        }

        const mainGitlabYamlContent = mainGitlabYaml.getText();
        const parsedMainGitlabYaml = new YamlParser().parse(mainGitlabYamlContent);
        const retrievedJobs = new GitlabCiJobExtractor().extract([parsedMainGitlabYaml]);

        console.debug('document saved:' + retrievedJobs.map(j => j.name).join(", "));
    }
}
