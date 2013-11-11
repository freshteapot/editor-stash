#Initial Setup

```
sudo -s
apt-get -y update
apt-get -y upgrade
apt-get -y install git
apt-get -y install curl

sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get -y install nodejs


sudo apt-get -y install screen

sudo apt-get install -y default-jre
sudo apt-get install -y vim
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