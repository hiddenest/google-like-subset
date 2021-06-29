import { exec } from 'child_process';

interface ShellResolveType {
  stdout: string;
  stderr: string;
};

const shell = async (cmd: string) =>
  new Promise<ShellResolveType>((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });


export default shell;
