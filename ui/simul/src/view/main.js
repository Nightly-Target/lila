var m = require('mithril');

var created = require('./created');
var started = require('./started');
var finished = require('./finished');

module.exports = function(ctrl) {
  var handler;
  if (ctrl.data.isRunning) handler = started;
  else if (ctrl.data.isFinished) handler = finished;
  else handler = created;

  return [
    m('aside.simul__side', {
      config(el, done) {
        if (done) return;
        console.log(el);
        $(el).replaceWith(ctrl.env.$side);
        ctrl.env.chat && window.lichess.makeChat(ctrl.env.chat);
      }
    }),
    m('div.simul__main.box', handler(ctrl))
  ];
};
