import * as yaml from 'yaml';
import CiJob from './ci-job';

export interface CiJobExtractor {

    extract(documents: yaml.Document.Parsed[]): CiJob[];
}
