// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'add a participant and draw': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('.container', 1000)
      .assert.containsText('li:nth-of-type(1) a', 'Participants')
      .assert.containsText('li:nth-of-type(2) a', 'Drawing')
      .assert.containsText('li.active a', 'Participants')
      .setValue('input[name=name]', 'Mickey Mouse')
      .setValue('input[name=numberOfTickets]', 1337)
      .click('.btn-primary')
      .setValue('input[name=name]', 'Dolly Duck')
      .setValue('input[name=numberOfTickets]', 1)
      .click('.btn-primary')
      .pause(50)
      .assert.containsText('table thead td', 'Name')
      .assert.containsText('table thead td:nth-of-type(2)', '# tickets')
      .assert.containsText('table tbody tr:nth-of-type(1) td:nth-of-type(1)', 'Mickey Mouse')
      .assert.containsText('table tbody tr:nth-of-type(1) td:nth-of-type(2)', '1337')
      .assert.containsText('table tbody tr:nth-of-type(2) td:nth-of-type(1)', 'Dolly Duck')
      .assert.containsText('table tbody tr:nth-of-type(2) td:nth-of-type(2)', '1')
      .click('li:nth-of-type(2) a')
      .assert.containsText('li.active a', 'Drawing')
      .click('.btn-success')
      .assert.containsText('ul li.winnerName:nth-of-type(1)', 'Mickey Mouse')
      .end()
  }
}
