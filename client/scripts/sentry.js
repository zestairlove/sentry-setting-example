const SentryCli = require('@sentry/cli');
const version = require('../package.json').version;

async function createReleaseAndUpdate() {
  const release = version;
  if (!release) {
    console.warn('release version is not set');
    return;
  }

  const cli = new SentryCli();

  try {
    await cli.releases.new(release);

    console.log('Uploading source map');
    await cli.releases.uploadSourceMaps(release, {
      include: ['build/static/js'],
      urlPrefix: '~/static/js',
    });

    console.log('Finalizing release');
    await cli.releases.finalize(release);
  } catch (err) {
    console.error(`Source maps uploading falied: ${err}`);
  }
}

createReleaseAndUpdate();
