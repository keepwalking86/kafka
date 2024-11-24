const { Kafka } = require('kafkajs');

// Connect to kafka
const kafka = new Kafka({
  clientId: 'consumer-client',
  brokers: ['10.10.10.10:9092','10.10.10.11:9092','10.10.10.12:9092'], //kafka broker cluster
  ssl: false,
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'user01',
    password: 'changeme',
  },
});

const consumer = kafka.consumer({ groupId: 'consumer-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'topic01', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        // if message.value is Buffer
        if (Buffer.isBuffer(message.value)) {
          // convert buffer to string
          const messageValue = message.value.toString();
          console.log(`Received message: ${messageValue}`);
        } else {
          console.log(`Received non-binary data: ${message.value}`);
        }
      } catch (error) {
        console.error('Error processing message:', error);
      }
    },
  });
};

// Run consumer
run().catch(console.error);
