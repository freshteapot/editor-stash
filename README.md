#Initial Setup

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


#Get Logstash
wget "https://download.elasticsearch.org/logstash/logstash/logstash-1.2.2-flatjar.jar"