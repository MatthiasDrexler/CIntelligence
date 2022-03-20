import * as path from 'path';
import ResourceParser from '../../../../resources/resource-parser';
import GitlabCiJobExtractor from '../../../../../domain/gitlab/gitlab-ci-job-extractor';
import { expect } from 'chai';

describe("GitlabCiJobExtractor", () => {

    it("should return empty list for empty yaml file", () => {
        const resourceFile = path.join("yaml", "empty.yml");
        const yamlDocument = new ResourceParser().parse(resourceFile);

        const extractedJobs = new GitlabCiJobExtractor().extract([yamlDocument]);

        expect(extractedJobs).to.have.length(0);
    })

    it("should return empty list for scalar yaml file", () => {
        const resourceFile = path.join("yaml", "scalar.yml");
        const yamlDocument = new ResourceParser().parse(resourceFile);

        const extractedJobs = new GitlabCiJobExtractor().extract([yamlDocument]);

        expect(extractedJobs).to.have.length(0);
    })

    it("should return job-1 and job-2 for gitlab-ci.twoJobs.yml", () => {
        const resourceFile = path.join("yaml", "gitlab", "gitlab-ci.twoJobs.yml");
        const yamlDocument = new ResourceParser().parse(resourceFile);

        const extractedJobs = new GitlabCiJobExtractor().extract([yamlDocument]);

        expect(extractedJobs).to.have.length(2);

    })
})
