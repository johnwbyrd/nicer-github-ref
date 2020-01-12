const core = require('@actions/core');
const github = require('@actions/github');

try {
  inputRef = core.getInput('ref');
  outputRef = inputRef.replace(/\//g, '-');
  outputRef = outputRef.replace('refs-', '');
  outputRef = outputRef.replace('heads-', '');
  outputRef = outputRef.replace('tags-', '');
  core.setOutput("ref", outputRef);
  console.log( outputRef );
} catch (error) {
  core.setFailed(error.message);
}