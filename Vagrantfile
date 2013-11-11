# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.define :web1 do |role|
    role.vm.hostname = "web.internal"
    role.vm.network :private_network, ip: "10.69.1.10 "
  end
end

