import * as yaml from 'yaml';

export default class YamlParser {

    public parse(stringToParse: string){
        return yaml.parseDocument(stringToParse);
    }
}
