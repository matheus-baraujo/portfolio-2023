import { expect, test } from 'vitest'
import { fetchData } from './fetchProjects'; 

test('should return the number of files in the directory', async () => {
        const result = await fetchData();
        console.log(result)
        expect(result).toBe(2);
    });