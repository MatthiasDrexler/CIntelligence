import * as yaml from 'yaml';
import { Type } from 'yaml/util';
import CiJob from '../ci-job';
import { CiJobExtractor } from '../ci-job-extractor';

export default class GitlabCiJobExtractor implements CiJobExtractor {
    private static readonly noExtractedJobs = [];
    private static readonly globalKeywords = new Set()
        .add("stages")
        .add("default")
        .add("workflow")
        .add("variables")
        .add("include");

    public extract(documents: yaml.Document.Parsed[]): CiJob[] {
        return documents.flatMap(this.extractFromDocument);
    }

    private extractFromDocument(document: yaml.Document.Parsed): CiJob[] {
        if (!document || !document.contents) {
            return GitlabCiJobExtractor.noExtractedJobs;
        }

        const content = document.contents;
        if (content.type !== Type.MAP) {
            return GitlabCiJobExtractor.noExtractedJobs;
        }

        return content.items
            .filter(topLevelItem => !GitlabCiJobExtractor.globalKeywords.has(topLevelItem.key.value))
            .map(topLevelItem => new CiJob(topLevelItem.key.value));
    }
}
