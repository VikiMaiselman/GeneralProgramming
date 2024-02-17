// Proxy  controls access to the real object &| allows to perform something before or after 
// the request gets through to the original object

class RealSubject {
  request() {
    console.log("RealSubject: Handling request.");
  }
}

class Proxy {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    } else {
      console.log("Proxy: Access denied.");
    }
  }

  checkAccess() {
    console.log("Proxy: Checking access.");
    // Perform access control logic here
    return true;
  }

  logAccess() {
    console.log("Proxy: Logging the time of request.");
  }
}

// Usage
const realSubject = new RealSubject();
console.log(realSubject) // RealSubject {}
const proxy = new Proxy(realSubject);

proxy.request();