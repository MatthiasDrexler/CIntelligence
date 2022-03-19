import * as fs from 'fs';
import * as path from 'path';

export default class RessourceLoader {

    public load(resourceFile: string): string {
        const resolvedPath = path.join("src", "test", "resources", resourceFile);
        return fs.readFileSync(resolvedPath, 'utf8');
    }
}
