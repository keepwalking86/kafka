var kafka = require('kafka-node'),
  Producer = kafka.Producer,
  //connect to broker
  client = new kafka.KafkaClient({
    kafkaHost: '192.168.1.248:9093',
    sasl: {mechanism: 'plain', username: 'admin', password: 'password'}
  }),
  producer = new Producer(client),
  km = new kafka.KeyedMessage('key', 'message'),
  payloads = [
      { topic: 'topic1', messages: 'Welcome to keepwalking86', partition: 0 },
      { topic: 'topic2', messages: ['hello', 'world', km] }
  ];
//Send events to topics
producer.on('ready', function () {
  producer.send(payloads, function (err, data) {
      console.log(data);
  });
});
 
producer.on('error', function (err) {})