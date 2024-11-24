# Sample nodejs kafka-app with authentication

## Step1: Create a topic

```sh
kafka-topics --bootstrap-server <BROKER> \
  --command-config /etc/kafka/adminclient-configs.conf \
  --create --topic topic01
```
## Step2: Create a kafka account on broker

```sh
  kafka-acls --bootstrap-server <BROKER> \
  --command-config /etc/kafka/adminclient-configs.conf \
  --add --allow-principal User:user01 \
  --operation Read --operation Write \
  --topic topic01
```

## Step3: Grant user permission (ACLs)

```sh
  kafka-acls --bootstrap-server <BROKER> \
  --command-config /etc/kafka/adminclient-configs.conf \
  --add --allow-principal User:user1 \
  --operation Read --operation Write \
  --topic topic01
```

## Step4: Grant consumer group permission

```sh
kafka-acls --bootstrap-server <BROKER> \
  --command-config /etc/kafka/adminclient-configs.conf  \
  --add --allow-principal User:user01 \
  --operation Read \
  --operation Describe \
  --group consumer-group
```

## Step5: Install modules

```sh
npm install
```

## Step6: Run producer

```sh
node producer.js
node producer-1m.js
```

## Step7: Run consumer

```sh
node consumer.sh
```
