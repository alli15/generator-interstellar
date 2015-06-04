import {Inject, Intent} from 'interstellar-core';
import {Keypair} from 'stellar-base';

@Inject("interstellar-core.Config", "interstellar-core.IntentBroadcast", "interstellar-sessions.Sessions")
class IndexController {
  constructor(Config, IntentBroadcast, Sessions) {
    this.IntentBroadcast = IntentBroadcast;
    this.Sessions = Sessions;
    this.seed = Config.getString('defaultSeed');
  }

  submit() {
    let secret = this.seed;
    let signer = Keypair.fromSeed(secret);
    let address = signer.address();
    let username = 'test user';
    let data = {};
    let permanent = false;
    this.Sessions.createDefault({username, address, secret, data, permanent})
      .then(() => {
        this.IntentBroadcast.sendBroadcast(
          new Intent(
            Intent.TYPES.SHOW_DASHBOARD
          )
        );
      });
  }
}

module.exports = function(mod) {
  mod.controller("IndexController", IndexController);
};
