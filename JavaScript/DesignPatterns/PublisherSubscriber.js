// defines a one-to-many dependency between objects so that when one object changes state, 
// all its dependents are notified and updated automatically

// Define a Subject (Publisher) class
class NewsPublisher {
  constructor() {
    this.subscribers = []; // Array to hold subscribers
  }

  // Method to add a new subscriber
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  // Method to remove a subscriber
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  // Method to notify all subscribers about new news
  notify(news) {
    this.subscribers.forEach((subscriber) => subscriber.update(news));
  }
}

// Define an Observer (Subscriber) class
class NewsSubscriber {
  constructor(name) {
    this.name = name;
  }

  // Method to update the subscriber with the latest news
  update(news) {
    console.log(`${this.name} received news: ${news}`);
  }
}

// Usage
const publisher = new NewsPublisher();

const subscriber1 = new NewsSubscriber("Subscriber 1");
const subscriber2 = new NewsSubscriber("Subscriber 2");

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

// Notify subscribers about new news
publisher.notify(
  "New breaking news: Earthquake reported in the Pacific region."
);

// Unsubscribe subscriber1
publisher.unsubscribe(subscriber1);

// Notify subscribers again
publisher.notify("Update: Storm warning issued for coastal areas.");
