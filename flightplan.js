var plan = require('flightplan');

var appName = 'FruitBasket3';
var username = 'deploy';
var startFile = './server/bin/www';

var tmpDir = appName+'-' + new Date().getTime();

// configuration
plan.target('staging', [
  {
    host: '128.199.74.176',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);

plan.target('production', [
  {
    host: '128.199.74.176',
    username: username,
    privateKey: '/Users/thuyaaung/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK
  },
//add in another server if you have more than one
// {
//   host: '104.131.93.216',
//   username: username,
//   agent: process.env.SSH_AUTH_SOCK
// }
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('gulp build');

  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Move folder to root');

  //Copy folder from Temp to ~ Home folder
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  //Remove Folder from Temp
  remote.rm('-R /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.sudo('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});
  
  remote.with('cd ~/'+tmpDir, function() {
    remote.exec('bower install');
  });

  remote.log('Reload application');
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});
  //remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});
  //remote.exec('forever start ~/'+appName+'/'+startFile);


  remote.with('cd ~/'+appName, function() {
    remote.exec('forever stop ' + startFile, {failsafe: true});
    remote.exec('forever start ' + startFile);
  });



});