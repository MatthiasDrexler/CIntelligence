import * as yaml from 'yaml';

export default class YamlParser {

    public parse(stringToParse: string) : yaml.Document.Parsed {
        return yaml.parseDocument(stringToParse);
    }
}
