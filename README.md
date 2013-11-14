#Initial Setup

```
sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get -y install git curl python g++ make screen default-jre vim
```

Ubuntu version before 12.10:
```
sudo apt-get install -y python-software-properties
```

Ubuntu version from 12.10:
```
sudo apt-get install -y software-properties-common
```

```
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get -y install nodejs
```

#Get Logstash
```
cd ~/
wget "https://download.elasticsearch.org/logstash/logstash/logstash-1.2.2-flatjar.jar"
```

To test logstash is working :)
```
java -jar ~/logstash-1.2.2-flatjar.jar agent -f /vagrant/config/logstash/basic.conf
```

Then paste
```
{"hello": "world"}
```
You should hopefully see some output where hello is a property under "line", for more information read ./config/logstash/basic.conf