var fb = require('../bin/flynn-cluster-backup')
describe('my project', function () {
  it('works with GitURL', function () {
    var config = [
      'default = "flynn-1234"',
      '',
      '[[cluster]]',
      '  Name = "flynn-1234"',
      '  Key = "deadbeef"',
      '  TLSPin = "pinpin+"',
      '  ControllerURL = "https://controller.abcd.flynnhub.com"',
      '  GitHost = ""',
      '  GitURL = "https://git.abcd.flynnhub.com"', ''
    ].join('\n')

    var output = fb.toCommands(fb.parseConfig(config))
    expect(output).toEqual([
      'flynn cluster add --force --default ' +
      '--git-url "https://git.abcd.flynnhub.com" ' +
      '-p "pinpin+" ' +
      'flynn-1234 abcd.flynnhub.com deadbeef'
    ])
  })

  it('works with GitHost', function () {
    var config = [
      'default = "flynn-1234"',
      '',
      '[[cluster]]',
      '  Name = "flynn-1234"',
      '  Key = "deadbeef"',
      '  TLSPin = "pinpin+"',
      '  ControllerURL = "https://controller.abcd.flynnhub.com"',
      '  GitHost = "abcd.flynnhub.com:2222"',
      '  GitURL = ""', ''
    ].join('\n')

    var output = fb.toCommands(fb.parseConfig(config))
    expect(output).toEqual([
      'flynn cluster add --force --default ' +
      '--git-host "abcd.flynnhub.com:2222" ' +
      '-p "pinpin+" ' +
      'flynn-1234 abcd.flynnhub.com deadbeef'
    ])
  })

  it('omits --default', function () {
    var config = [
      '[[cluster]]',
      '  Name = "flynn-1234"',
      '  Key = "deadbeef"',
      '  TLSPin = "pinpin+"',
      '  ControllerURL = "https://controller.abcd.flynnhub.com"',
      '  GitHost = "abcd.flynnhub.com:2222"',
      '  GitURL = ""', ''
    ].join('\n')

    var output = fb.toCommands(fb.parseConfig(config))
    expect(output).toEqual([
      'flynn cluster add --force ' +
      '--git-host "abcd.flynnhub.com:2222" ' +
      '-p "pinpin+" ' +
      'flynn-1234 abcd.flynnhub.com deadbeef'
    ])
  })
})
