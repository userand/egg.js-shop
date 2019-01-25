/**
 * MIT License
   Copyright (c) 2017 Kris Hollenbeck
   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
   documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
   rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
   persons to whom the Software is furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
   Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
   TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
   OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
   OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict';

const child_process = require('child_process').execFile;

let methods = {
  unzip: function () {},
  zip: function () {}
};

let nodeZip = Object.create(methods);

nodeZip.unzip = function (pathToArchive, target, overwrite = false)
{
  console.log('Unzipping from ' + pathToArchive + ' to ' + target);

  const process = new Promise((resolve, reject) => {
    var args = ['x', pathToArchive, '-o' + target, '-r'];
    if (overwrite)
    {
      args.push('-aoa');
    }
    else
    {
      args.push('-aos');
    }

    child_process(__dirname + '/bin/7za.exe', args, (error, stdout, stderr) =>
    {
      if (error)
      {
        console.error('stderr', stderr);
        reject(stderr);
        throw error;
      }
      resolve('stdout', stdout)
    });
  });

  return process;
};

nodeZip.unzip1 = function (pathToArchive, target, overwrite = false)
{
  console.log('Unzipping from ' + pathToArchive + ' to ' + target);

  const process = new Promise((resolve, reject) => {
    var args = ['x', pathToArchive, '-o' + target, '-r'];
    if (overwrite)
    {
      args.push('-aoa');
    }
    else
    {
      args.push('-aot');
    }

    child_process(__dirname + '/bin/7za.exe', args, (error, stdout, stderr) =>
    {
      if (error)
      {
        console.error('stderr', stderr);
        reject(stderr);
        throw error;
      }
      resolve('stdout', stdout)
    });
  });

  return process;
};

nodeZip.unzip2 = function (pw,pathToArchive, target, overwrite = false) {
  console.log('Unzipping from ' + pathToArchive + ' to ' + target);

  const process = new Promise((resolve, reject) => {
    var args = ['x', pathToArchive, '-o' + target, '-r','-p'+pw];
    if (overwrite) {
      args.push('-aoa');
    }
    else {
      args.push('-aos');
    }

    child_process(__dirname + '/bin/7za.exe', args, (error, stdout, stderr) => {
      if (error) {
        console.error('stderr', stderr);
        reject(stderr);
        throw error;
      }
      resolve('stdout', stdout)
    });
  });

  return process;
};

nodeZip.zip = function(input, output)
{
  console.log('Zipping from ' + input + ' to ' + output);
  const process = new Promise((resolve, reject) => {
    child_process(__dirname + '/bin/7za.exe', ['a', '-t7z', output, input + '/*', '-r'], (error, stdout, stderr) => {
      if (error) {
        console.error('stderr', stderr);
        reject(stderr);
        throw error;
      }
      resolve('stdout', stdout);
    });
  });

  return process;
}

module.exports = nodeZip;
