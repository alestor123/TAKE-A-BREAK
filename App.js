var option = require('minimist')(process.argv.slice(2)),
message = option.m || option.message || 'Take A Break',
notify = require('node-notifier');