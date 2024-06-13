import { promises as fs } from 'fs';

export async function fetchData(): Promise<number> {
    const dir = './src/app/(projects)';

    try {
        const files = await fs.readdir(dir);
        return files.length;
    } catch (error) {
        console.error('Error reading directory:', error);
        throw error;
    }
}
