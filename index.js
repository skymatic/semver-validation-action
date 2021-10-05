const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `version` input defined in action metadata file
  const version = core.getInput('version');
  console.log(`Checking version: ${version}!`);
  
  //regex taken from semver.org, see https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
  var re = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
  if (re.exec(version) == null) {
    core.setFailed("Invalid version");
  }

} catch (error) {
  core.setFailed(error.message);
}
