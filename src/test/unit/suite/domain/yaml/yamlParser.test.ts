import { expect } from 'chai';
import * as path from 'path';
import { YAMLMap } from 'yaml/types';
import ResourceLoader from '../../../../resources/resourceLoader';
import YamlParser from '../../../../../domain/yaml/yamlParser';

describe("YamlParser", () => {
    it("parses empty yaml file", () => {
        const resourceFile = path.join("yaml", "empty.yml");
        const yamlContent = new ResourceLoader().load(resourceFile);

        const parsedYaml = new YamlParser().parse(yamlContent);

        expect(parsedYaml.contents).to.be.null;
    });

    it("parses gitlab-ci yaml file with two jobs", () => {
        const resourceFile = path.join("yaml", "gitlab", "gitlab-ci.twoJobs.yml");
        const yamlContent = new ResourceLoader().load(resourceFile);

        const parsedYaml = new YamlParser().parse(yamlContent);

        const parsedYamlContents = parsedYaml.contents as YAMLMap;
        expect(parsedYamlContents.items.length).to.be.equal(2);
        // Job 1
        const parsedYamlContentsJob1 = parsedYamlContents.items[0];
        expect(parsedYamlContentsJob1.key.value).to.be.equal("job-1");
        expect(parsedYamlContentsJob1.value.items.length).to.be.equal(2);
        expect(parsedYamlContentsJob1.value.items[0].key.value).to.be.equal("stage");
        expect(parsedYamlContentsJob1.value.items[0].value.value).to.be.equal("build");
        expect(parsedYamlContentsJob1.value.items[1].key.value).to.be.equal("script");
        expect(parsedYamlContentsJob1.value.items[1].value.items.length).to.be.equal(1);
        expect(parsedYamlContentsJob1.value.items[1].value.items[0].value).to.be.equal("yarn compile");
        // Job 2
        const parsedYamlContentsJob2 = parsedYamlContents.items[1];
        expect(parsedYamlContentsJob2.key.value).to.be.equal("job-2");
        expect(parsedYamlContentsJob2.value.items.length).to.be.equal(2);
        expect(parsedYamlContentsJob2.value.items[0].key.value).to.be.equal("stage");
        expect(parsedYamlContentsJob2.value.items[0].value.value).to.be.equal("test");
        expect(parsedYamlContentsJob2.value.items[1].key.value).to.be.equal("script");
        expect(parsedYamlContentsJob2.value.items[1].value.items.length).to.be.equal(1);
        expect(parsedYamlContentsJob2.value.items[1].value.items[0].value).to.be.equal("yarn test");
    });
});
