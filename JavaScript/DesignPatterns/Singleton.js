// ensures a class has only one instance and provides a global access to it
class Singleton {
    // static property is only available on the class & is shared // all objects of this class
      static instance = null;
    
      constructor() {
        if (Singleton.instance) {
          return Singleton.instance;
        }
        Singleton.instance = this;
      }
    
      static getInstance() {
        if (!Singleton.instance) {
          Singleton.instance = new Singleton();
        }
        return Singleton.instance;
      }
    
      sayHello() {
        console.log("Hello from Singleton instance!");
      }
    }
    
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    
    console.log(instance1 === instance2); // true, both refer to the same instance
    console.log(instance1) // Singleton {}
    instance1.sayHello(); // Output: Hello from Singleton instance!
