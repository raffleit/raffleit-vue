// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'add a participant': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('.container', 5000)
      .assert.containsText('a', 'Participants')
      .assert.containsText('li.active a', 'Participants')
      .setValue('input[name=name]', 'Mickey Mouse')
      .setValue('input[name=numberOfTickets]', 1337)
      .assert.containsText('input[name=name]', '')
      .assert.containsText('input[name=numberOfTickets]', '')
      .click('.btn-primary')
      .pause(50)
      .assert.containsText('table thead td', 'Name')
      .assert.containsText('table thead td:nth-of-type(2)', '# tickets')
      .assert.containsText('table tbody td:nth-of-type(1)', 'Mickey Mouse')
      .assert.containsText('table tbody td:nth-of-type(2)', '1337')
      .end()
  }
}
