import fs from 'fs';

export function folders() {
    return fs.readdirSync('.', {withFileTypes: true}).filter(dirent => (
        dirent.isDirectory() 
        && !dirent.name.startsWith('.') 
        && dirent.name !== 'site'
        && dirent.name !== 'tools'
    )).map(dirent => dirent.name);
}

export default {
    folders
};