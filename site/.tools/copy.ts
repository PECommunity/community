const fs = require('fs-extra')

const folders = [
  'about',
  'articles',
  'events',
  'glossary',
  'jobs',
  'mindmap',
]

// Copy folders sync
folders.forEach(folder => {
  fs.copySync(`../${folder}`, `./pages/${folder}`)
})
