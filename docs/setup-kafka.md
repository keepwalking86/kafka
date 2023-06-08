# I. Setup Kafka

Requirement: Java

## Step1: Create a kafka account to run services

```bash
sudo useradd kafka -m -s /bin/bash
echo "kafka ALL=(ALL) NOPASSWD:ALL" |sudo tee /etc/sudoers.d/kafka
```

## Step2: Download kafka

```bash
wget https://downloads.apache.org/kafka/3.1.2/kafka_2.12-3.1.2.tgz
tar zxvf kafka_2.12-3.1.2.tgz
sudo mv kafka_2.12-3.1.2 /usr/local/kafka
sudo chown -R kafka. /usr/local/kafka
```

## Step3: run kafka as systemd

- Create a systemd unit file for Zookeeper

`sudo vi /etc/systemd/system/zookeeper.service`

```
[Unit]
Description=Apache Zookeeper server
Documentation=http://zookeeper.apache.org
Requires=network.target remote-fs.target
After=network.target remote-fs.target

[Service]
Type=simple
User=kafka
ExecStart=/usr/local/kafka/bin/zookeeper-server-start.sh /usr/local/kafka/config/zookeeper.properties
ExecStop=/usr/local/kafka/bin/zookeeper-server-stop.sh
Restart=on-abnormal

[Install]
WantedBy=multi-user.target
```

- Create a systemd unit file for kafka

`sudo vi /etc/systemd/system/kafka.service`

```
[Unit]
Description=Apache Kafka Server
Documentation=http://kafka.apache.org/documentation.html
Requires=zookeeper.service
After=zookeeper.service

[Service]
Type=simple
User=kafka
Group=kafka
Restart=on-failure
#Enter correct JAVA_HOME path
#Environment="JAVA_HOME=/usr/lib/jvm/java-1.11.0-openjdk-amd64"
Environment="JAVA_HOME=/usr/lib/jvm/jre"
ExecStart=/usr/local/kafka/bin/kafka-server-start.sh /usr/local/kafka/config/server.properties
ExecStop=/usr/local/kafka/bin/kafka-server-stop.sh

[Install]
WantedBy=multi-user.target
```

- Configure Kafka/Zookeeper options

Edit kafka configuration file **/usr/local/kafka/config/server.properties** and change log path

vi /usr/local/kafka/config/server.properties

```
log.dirs=/home/kafka/logs
#The minimum age of a log file to be eligible for deletion due to age
log.retention.hours=72
listeners=PLAINTEXT://kafka01:9092
host.name=kafka01
advertised.listeners=PLAINTEXT://kafka01:9092
advertised.host.name=kafka01
advertised.port=9092
#option disable delete topic (default allow delete topic)
delete.topic.enable=false
auto.create.topics.enable=false
```

Edit Zookeeper configuration file **/usr/local/kafka/config/zookeeper.properties** and change the directory where the snapshot is stored

vi /usr/local/kafka/config/zookeeper.properties

```
#the directory where the snapshot is stored
dataDir=/home/kafka/zookeeper
```


- Start Kafka and Zookeeper Service

```sh
sudo systemctl daemon-reload
sudo systemctl start zookeeper
sudo systemctl start kafka
sudo systemctl enable zookeeper
sudo systemctl enable kafka
```
