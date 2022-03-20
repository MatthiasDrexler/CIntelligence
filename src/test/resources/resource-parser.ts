import * as yaml from 'yaml';
import YamlParser from '../../domain/yaml/yaml-parser';
import ResourceLoader from './resource-loader';

export default class ResourceParser {

    public parse(resourcePath: string): yaml.Document.Parsed {
        const resource = new ResourceLoader().load(resourcePath);
        return new YamlParser().parse(resource);
    }
}
