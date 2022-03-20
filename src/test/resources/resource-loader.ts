import * as fs from 'fs';
import * as path from 'path';

export default class ResourceLoader {

    public load(resourcePath: string): string {
        const resolvedPath = path.join("src", "test", "resources", resourcePath);
        return fs.readFileSync(resolvedPath, 'utf8');
    }
}
