const fs = require('fs')
// const { Writable, Readable } = require('stream');
const path = require('path')
const util = require('util')
const resolve = p => path.resolve(process.cwd(), p)
const css = resolve('./css/main.css')
const minicss = resolve('./css/main.min.css')
const index = resolve('./index.html')
const fsReadFile = util.promisify(fs.readFile)

function miniFileByPath(path) {
  return fsReadFile(path, {
    encoding: 'utf-8'
  }).then(data => {
    return data.replace(/\s|\n|\r/g, '')
  }).catch(e => {
    console.log(e);
  })
}

async function minisize () {
  try {
    const data = await miniFileByPath(css)
    const file = fs.createWriteStream(minicss)
    file.write(data)
  } catch (e) {
    console.log(e);
  }
}

minisize()