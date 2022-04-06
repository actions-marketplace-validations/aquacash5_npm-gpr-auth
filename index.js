const { promisify } = require(`util`);
const appendFile = promisify(require(`fs`).appendFile);
const core = require(`@actions/core`);

const run = async () => {
  const token = core.getInput(`token`);
  const basePath = core.getInput(`base-path`) || `.`;
  try {
    await appendFile(`${basePath}/.npmrc`, `//npm.pkg.github.com/:_authToken=${token}`);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
