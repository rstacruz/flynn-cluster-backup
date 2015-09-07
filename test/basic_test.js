var fb = require('../bin/flynn-backup')
describe('my project', function () {
  it('works', function () {
    var config = [
      'default = "flynn-1234"',
      '',
      '[[cluster]]',
      '  Name = "flynn-1234"',
      '  Key = "deadbeef"',
      '  TLSPin = "pinpin+"',
      '  ControllerURL = "https://controller.abcd.flynnhub.com"',
      '  GitURL = ""',
      '  GitHost = "https://git.abcd.flynnhub.com"', ''
    ].join('\n')

    var output = fb.toCommands(fb.parseConfig(config))
    expect(output).toEqual([
      'flynn cluster add --force --default ' +
      '--git-host "https://git.abcd.flynnhub.com" ' +
      '-p "pinpin+" ' +
      'flynn-1234 abcd.flynnhub.com deadbeef'
    ])
  })
})
