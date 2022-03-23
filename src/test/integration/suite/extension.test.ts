import { expect } from 'chai';
import * as vscode from 'vscode';

describe('CIntelligence', function () {
    const CINTELLIGENCE_EXTENSION_ID = "cintelligence.cintelligence";
    const MAX_LOADING_THRESHOLD_IN_MILLISECONDS = 100;

    it('should be activated if workspace with .gitlab-ci.yaml file is opened', async function () {
        await new Promise(it => setTimeout(it, MAX_LOADING_THRESHOLD_IN_MILLISECONDS));

        const cintelligence = vscode.extensions.getExtension(CINTELLIGENCE_EXTENSION_ID);

        expect(cintelligence?.isActive).to.be.true;
    });
});
