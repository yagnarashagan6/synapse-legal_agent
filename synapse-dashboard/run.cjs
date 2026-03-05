const { execSync } = require('child_process');
try {
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  console.log('No errors');
} catch (e) {
  require('fs').writeFileSync('ts_out.txt', e.stdout.toString() + '\\n' + e.stderr.toString());
  console.log('Errors written to ts_out.txt');
}
