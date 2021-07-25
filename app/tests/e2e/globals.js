module.exports = {
  abortOnAssertionFailure: true,

  waitForConditionPollInterval: 500,

  waitForConditionTimeout: 5000,

  default: {
    //
    // The globals defined here are available everywhere in any test env
    //
    //
    // myGlobal: function() {
    // return 'I\'m a method';
    // }
    //
  },

  // / //////////////////////////////////////////////////////////////
  // Global hooks
  // - simple functions which are executed as part of the test run
  // - take a callback argument which can be called when an async
  //    async operation is finished
  // / //////////////////////////////////////////////////////////////
  /**
   * executed before the test run has started, so before a session is created
   */
  //
  // before(cb) {
  // //console.log('global before')
  // cb();
  // },
  //

  /**
   * executed before every test suite has started
   */
  //
  // beforeEach(browser, cb) {
  // //console.log('global beforeEach')
  // cb();
  // },
  //

  /**
   * executed after every test suite has ended
   */
  //
  // afterEach(browser, cb) {
  // browser.perform(function() {
  //     //console.log('global afterEach')
  //     cb();
  // });
  // },
  //

  /**
   * executed after the test run has finished
   */
  //
  // after(cb) {
  // //console.log('global after')
  // cb();
  // },
  //

  // / //////////////////////////////////////////////////////////////
  // Global reporter
  //  - define your own custom reporter
  // / //////////////////////////////////////////////////////////////
  //
  // reporter(results, cb) {
  // cb();
  // }
  //
}
