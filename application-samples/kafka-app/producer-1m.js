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

const sendMessagesInBatch = async () => {
  await producer.connect();
  console.log('Producer connected');
  
  const topic = 'topic01'; 
  const numMessages = 1000000;
  const batchSize = 10000;
  const messages = []; // array to container messages

  const startTime = Date.now();

  for (let i = 0; i < numMessages; i++) {
    messages.push({
      value: `Message ${i + 1}`,  //message
    });

    if (messages.length >= batchSize) {
      try {
        await producer.send({
          topic: topic,
          messages: messages,
        });
        console.log(`Sent ${i + 1} messages...`);
        messages.length = 0;  // empty array after send messages
      } catch (error) {
        console.error('Error sending batch:', error);
      }
    }
  }

  if (messages.length > 0) {
    try {
      await producer.send({
        topic: topic,
        messages: messages,
      });
      console.log(`Sent ${numMessages} messages.`);
    } catch (error) {
      console.error('Error sending remaining batch:', error);
    }
  }

  const endTime = Date.now();
  const duration = (endTime - startTime) / 1000;
  console.log(`Successfully sent ${numMessages} messages in ${duration} seconds`);

  await producer.disconnect();
};

sendMessagesInBatch().catch(console.error);
