## Create a Topic in Kafka

- Create topic "topic01" with single partition and single replication

`/usr/local/kafka/bin/kafka-topics.sh --create --topic topic01 --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1`

## list all topic

`/usr/local/kafka/bin/kafka-topics.sh --list --bootstrap-server localhost:9092`

## Change the number of partitions on a topic

`/usr/local/kafka/bin/kafka-topics.sh --alter --topic topic01 --bootstrap-server localhost:9092 --partitions 2`

## Show topic details (Describe)

`/usr/local/kafka/bin/kafka-topics.sh --describe --topic topic01 --bootstrap-server localhost:9092`

```
[kafka@kafka01 ~]$ /usr/local/kafka/bin/kafka-topics.sh --describe --topic topic01 --bootstrap-server localhost:9092
Topic: topic01	TopicId: 3xqnYnqyTGKgKink2p1j1g	PartitionCount: 3	ReplicationFactor: 1	Configs: segment.bytes=1073741824
	Topic: topic01	Partition: 0	Leader: 0	Replicas: 0	Isr: 0
	Topic: topic01	Partition: 1	Leader: 0	Replicas: 0	Isr: 0
	Topic: topic01	Partition: 2	Leader: 0	Replicas: 0	Isr: 0
```

## Push Messages in Kafka (Producers)

`/usr/local/kafka/bin/kafka-console-producer.sh --broker-list localhost:9092 --topic topic01`

## Consumer from a topic (Consumers)

`/usr/local/kafka/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic topic01 --from-beginning`
