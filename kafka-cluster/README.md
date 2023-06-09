- Create and start containers

`docker-compose up -d`

```
[+] Running 16/16
 ⠿ Network kafka-cluster_default             Created                                                                                                                                                                  0.1s
 ⠿ Volume "kafka-cluster_zookeeper-03_log"   Created                                                                                                                                                                  0.0s
 ⠿ Volume "kafka-cluster_kafka-01_data"      Created                                                                                                                                                                  0.0s
 ⠿ Volume "kafka-cluster_zookeeper-01_log"   Created                                                                                                                                                                  0.0s
 ⠿ Volume "kafka-cluster_zookeeper-02_log"   Created                                                                                                                                                                  0.0s
 ⠿ Volume "kafka-cluster_zookeeper-03_data"  Created                                                                                                                                                                  0.0s
 ⠿ Volume "kafka-cluster_zookeeper-01_data"  Created                                                                                                                                                                  0.0s
 ⠿ Volume "kafka-cluster_kafka-02_data"      Created                                                                                                                                                                  0.0s
 ⠿ Volume "kafka-cluster_zookeeper-02_data"  Created                                                                                                                                                                  0.0s
 ⠿ Volume "kafka-cluster_kafka-03_data"      Created                                                                                                                                                                  0.0s
 ⠿ Container kafka-cluster-zookeeper-2-1     Started                                                                                                                                                                  0.5s
 ⠿ Container kafka-cluster-zookeeper-3-1     Started                                                                                                                                                                  0.5s
 ⠿ Container kafka-cluster-zookeeper-1-1     Started                                                                                                                                                                  0.5s
 ⠿ Container kafka-cluster-kafka-1-1         Started                                                                                                                                                                  0.8s
 ⠿ Container kafka-cluster-kafka-2-1         Started                                                                                                                                                                  0.7s
 ⠿ Container kafka-cluster-kafka-3-1         Started                                                                                                                                                                  0.8s
```

- List containers

`docker-compose ps`

```
NAME                          IMAGE                              COMMAND                  SERVICE             CREATED             STATUS              PORTS
kafka-cluster-kafka-1-1       confluentinc/cp-kafka:latest       "/etc/confluent/dock…"   kafka-1             22 minutes ago      Up 22 minutes       9092/tcp, 0.0.0.0:19092->19092/tcp, :::19092->19092/tcp
kafka-cluster-kafka-2-1       confluentinc/cp-kafka:latest       "/etc/confluent/dock…"   kafka-2             22 minutes ago      Up 22 minutes       9092/tcp, 0.0.0.0:29092->29092/tcp, :::29092->29092/tcp
kafka-cluster-kafka-3-1       confluentinc/cp-kafka:latest       "/etc/confluent/dock…"   kafka-3             22 minutes ago      Up 22 minutes       9092/tcp, 0.0.0.0:39092->39092/tcp, :::39092->39092/tcp
kafka-cluster-zookeeper-1-1   confluentinc/cp-zookeeper:latest   "/etc/confluent/dock…"   zookeeper-1         22 minutes ago      Up 15 minutes       0.0.0.0:12181->2181/tcp, :::12181->2181/tcp, 0.0.0.0:12888->2888/tcp, :::12888->2888/tcp, 0.0.0.0:13888->3888/tcp, :::13888->3888/tcp
kafka-cluster-zookeeper-2-1   confluentinc/cp-zookeeper:latest   "/etc/confluent/dock…"   zookeeper-2         22 minutes ago      Up 22 minutes       0.0.0.0:22181->2181/tcp, :::22181->2181/tcp, 0.0.0.0:22888->2888/tcp, :::22888->2888/tcp, 0.0.0.0:23888->3888/tcp, :::23888->3888/tcp
kafka-cluster-zookeeper-3-1   confluentinc/cp-zookeeper:latest   "/etc/confluent/dock…"   zookeeper-3         22 minutes ago      Up 22 minutes       0.0.0.0:32181->2181/tcp, :::32181->2181/tcp, 0.0.0.0:32888->2888/tcp, :::32888->2888/tcp, 0.0.0.0:33888->3888/tcp, :::33888->3888/tcp
```
