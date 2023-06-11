var kafka = require('kafka-node'),
  Consumer = kafka.Consumer,
  //connect to broker
  client = new kafka.KafkaClient({
    kafkaHost: '192.168.1.248:9093',
    sasl: {mechanism: 'plain', username: 'admin', password: 'password'}
  }),
  //Get events from the topic2 topic
  consumer = new Consumer(
    client,
      [{ topic: 'topic1', partition: 0 }],
      {
      autoCommit: false
      }
  );

consumer.on('message', function (message) {
console.log(message);
});
