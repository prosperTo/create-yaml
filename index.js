// Core
const YAML = require('yaml')

const start =  async () => {

  // Core
  const core = require('@actions/core')
  const fs = require('fs')

  const fileName = core.getInput('file-name')
  const typeFile = core.getInput('type')
  const path = require("path")
  const fullPath = path.join(process.env.GITHUB_WORKSPACE, fileName + typeFile)
  
  await fs.writeFile(fullPath, YAML.stringify(JSON.parse(core.getInput('params'))), 'utf-8', (error) => {
    if (error) core.setFailed(error.message)
    console.log(`Successfully written file ${fullPath} `)
    core.setOutput("full-path", fullPath)
  })
}

start()
