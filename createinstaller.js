const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('D:\calci')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'D:\calci\Foo Bar-win32-x64'),
    authors: 'balasubramanya',
    noMsi: true,
    outputDirectory: path.join(outPath, 'D:\calci\installables'),
    exe: 'calcu.exe',
    setupExe: 'calcuInstaller.exe',
   // setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'icon.ico')
  })
}