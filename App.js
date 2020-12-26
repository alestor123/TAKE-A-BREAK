var option = require('minimist')(process.argv.slice(2)),
message = option.m || option.message || 'Take A Break',
time = option.t || option.time || 1,
notify = require('node-notifier');
setInterval(() => {  
notify.notify({
    title: option.h || option.head || 'Take A Break',
    message: message
  });
}
, time*60*1000);