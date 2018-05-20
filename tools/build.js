import path from 'path';
import { transformFileSync } from '@babel/core';
import fse from 'fs-extra';

const buildFile = (sourcePath, destPath) => {
  const output = transformFileSync(sourcePath).code;
}
