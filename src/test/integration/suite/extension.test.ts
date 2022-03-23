import { expect } from 'chai';
import * as vscode from 'vscode';

describe('Extension', function () {
    const EXTENSION_ID = "cintelligence.cintelligence";
    const MAX_LOADING_THRESHOLD_IN_MILLISECONDS = 100;

    it('should be activated if workspace with .gitlab-ci.yaml file is opened', async function () {
        await new Promise(it => setTimeout(it, MAX_LOADING_THRESHOLD_IN_MILLISECONDS));

        const extension = vscode.extensions.getExtension(EXTENSION_ID);

        expect(extension?.isActive).to.be.true;
    });
});
