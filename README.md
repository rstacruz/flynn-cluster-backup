# flynn-cluster-backup

Simple tool to backup your ~/.flynnrc clusters. (`npm i -g rstacruz/flynn-cluster-backup`)

Given this config file (`~/.flynnrc`):

```ini
default = flynn-1234

[[cluster]]
  Name = "flynn-1234"
  Key = "deadbeef"
  TLSPin = "pinpin+"
  ControllerURL = "https://controller.abcd.flynnhub.com"
  GitURL = ""
  GitHost = "https://git.abcd.flynnhub.com"
```

Gives this output:

```sh
$ flynn-cluster-backup
flynn cluster add --force --default \
  --git-host "https://git.abcd.flynnhub.com" \
  -p "pinpin+" flynn-1234 abcd.flynnhub.com deadbeef
```
