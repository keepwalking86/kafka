- Create and start containers

`docker-compose up -d`

```
[+] Running 16/16
 ⠿ Network kafka-cluster_default             Created                                                                                                                                                                    0.1s
 ⠿ Volume "kafka-cluster_zookeeper-01_data"  Created                                                                                                                                                                    0.0s
 ⠿ Volume "kafka-cluster_zookeeper-03_log"   Created                                                                                                                                                                    0.0s
 ⠿ Volume "kafka-cluster_kafka-01_data"      Created                                                                                                                                                                    0.0s
 ⠿ Volume "kafka-cluster_kafka-02_data"      Created                                                                                                                                                                    0.0s
 ⠿ Volume "kafka-cluster_zookeeper-02_log"   Created                                                                                                                                                                    0.0s
 ⠿ Volume "kafka-cluster_zookeeper-03_data"  Created                                                                                                                                                                    0.0s
 ⠿ Volume "kafka-cluster_kafka-03_data"      Created                                                                                                                                                                    0.0s
 ⠿ Volume "kafka-cluster_zookeeper-01_log"   Created                                                                                                                                                                    0.0s
 ⠿ Volume "kafka-cluster_zookeeper-02_data"  Created                                                                                                                                                                    0.0s
 ⠿ Container kafka-cluster-zookeeper-2-1     Started                                                                                                                                                                    1.2s
 ⠿ Container kafka-cluster-zookeeper-3-1     Started                                                                                                                                                                    0.9s
 ⠿ Container kafka-cluster-zookeeper-1-1     Started                                                                                                                                                                    1.2s
 ⠿ Container kafka-cluster-kafka-3-1         Started                                                                                                                                                                    1.7s
 ⠿ Container kafka-cluster-kafka-2-1         Started                                                                                                                                                                    1.6s
 ⠿ Container kafka-cluster-kafka-1-1         Started 
```

- List containers

`docker-compose ps`

```
NAME                          IMAGE                              COMMAND                  SERVICE             CREATED             STATUS              PORTS
kafka-cluster-kafka-1-1       confluentinc/cp-kafka:latest       "/etc/confluent/dock…"   kafka-1             3 minutes ago       Up 3 minutes        9092/tcp, 0.0.0.0:19092->19092/tcp, :::19092->19092/tcp
kafka-cluster-kafka-2-1       confluentinc/cp-kafka:latest       "/etc/confluent/dock…"   kafka-2             3 minutes ago       Up 3 minutes        9092/tcp, 0.0.0.0:29092->29092/tcp, :::29092->29092/tcp
kafka-cluster-kafka-3-1       confluentinc/cp-kafka:latest       "/etc/confluent/dock…"   kafka-3             3 minutes ago       Up 3 minutes        9092/tcp, 0.0.0.0:39092->39092/tcp, :::39092->39092/tcp
kafka-cluster-zookeeper-1-1   confluentinc/cp-zookeeper:latest   "/etc/confluent/dock…"   zookeeper-1         3 minutes ago       Up 3 minutes        2888/tcp, 3888/tcp, 0.0.0.0:12181->2181/tcp, :::12181->2181/tcp
kafka-cluster-zookeeper-2-1   confluentinc/cp-zookeeper:latest   "/etc/confluent/dock…"   zookeeper-2         3 minutes ago       Up 3 minutes        2888/tcp, 3888/tcp, 0.0.0.0:22181->2181/tcp, :::22181->2181/tcp
kafka-cluster-zookeeper-3-1   confluentinc/cp-zookeeper:latest   "/etc/confluent/dock…"   zookeeper-3         3 minutes ago       Up 3 minutes        2888/tcp, 3888/tcp, 0.0.0.0:32181->2181/tcp, :::32181->2181/tcp
```
