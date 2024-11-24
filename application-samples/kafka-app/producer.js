const { Kafka } = require('kafkajs');

// Connect to kafka
const kafka = new Kafka({
  clientId: 'producer-client',
  brokers: ['10.10.10.10:9092','10.10.10.11:9092','10.10.10.12:9092'], //kafka broker cluster
  ssl: false,
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'user01',
    password: 'changeme',
  },
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  console.log('Producer connected');

  try {
    const result = await producer.send({
      topic: 'topic01',
      messages: [
        { key: 'key1', value: 'Hello Kafka!' },
        { key: 'key2', value: 'This is a test message.' },
      ],
    });
    console.log('Message sent successfully:', result);
  } catch (error) {
    console.error('Error sending message:', error);
  }

  await producer.disconnect();
  console.log('Producer disconnected');
};

run().catch(console.error);
