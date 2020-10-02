import {
  readdir as readdirOld,
  symlink as symlinkOld,
  access as accessOld,
  stat as statOld,
  unlink as unlinkOld,
  rmdir as rmdirOld,
  readFile as readFileOld,
  writeFile as writeFileOld
} from 'fs';
import { promisify } from 'util';

export const readdir = promisify(readdirOld);
export const symlink = promisify(symlinkOld);
export const access = async path => {
  try {
    await promisify(accessOld)(path);
    return true;
  } catch (e) {
    return false;
  }
};
export const stat = promisify(statOld);
export const unlink = promisify(unlinkOld);
export const rmdir = promisify(rmdirOld);
export const readFile = promisify(readFileOld);
export const writeFile = promisify(writeFileOld);

export default {
  readdir,
  symlink,
  access,
  stat,
  unlink,
  rmdir,
  readFile,
  writeFile
};
