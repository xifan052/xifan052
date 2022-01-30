const child_process = require('child_process')
child_process.exec('deploy.sh', function (err, stdin, stderr) {
  console.log(
    'Go to gitee to update the website information:https://gitee.com/xifan_t/xifan052/pages'
  )
  console.log('Preview git page:https://xifan052.github.io/xifan052/')
  if (err) {
    console.log('err----')
    console.log(err)
  }
  if (stdin) {
    console.log('stdin----')
    console.log(stdin)
  }
  if (stderr) {
    console.log('stderr----')
    console.log(stderr)
  }
})
