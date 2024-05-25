class LinkedList {
  constructor(list) {
    this.list = list;
    list.value = "HEAD"; // when a list is initialised, there's only one node so mark is as HEAD.
  }

  append(value) {
    let currentNode = this.list;
    if (currentNode.value === "HEAD") {
      currentNode.setValue(value);

      return;
    }
    while (true) {
      if (currentNode.nextNode === null) {
        currentNode.setNextNode(new myNode());
        currentNode.nextNode.setValue(value);
        break;
      }
      currentNode = currentNode.nextNode;
    }
    // somehow iterate until the nodes next node is null, and set that null to a new myNode, then use setValue(value) on it.
  }

  prepend(value) {
    const newNode = new myNode();
    newNode.setValue(value);
    newNode.setNextNode(this.list);
    this.list = newNode;
    // works as expected!!
  }

  size() {
    let currentNode = this.list;
    let loops = 1; // just to get the number of nodes instead, starting at 1 rather than 0

    while (true) {
      if (currentNode.nextNode === null) {
        return loops;
      }
      currentNode = currentNode.nextNode;
      loops++;
    }
  }

  head() {
    return this.list;
  }

  tail() {
    let currentNode = this.list;

    while (true) {
      if (currentNode.nextNode === null) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
  }

  at(index) {
    let currentNode = this.list;
    for (let x = 0; x < index; x++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    let previousNode = this.list; // start it at head node
    let currentNode = this.list.nextNode; // start on first node after head
    if (previousNode.nextNode === null) {
      return Error("This is an empty list.");
    }
    while (true) {
      if (currentNode.nextNode === null) {
        previousNode.nextNode = null; // essentially replacing it with the 'tail' - null.
        break;
      }
      previousNode = previousNode.nextNode;
      currentNode = currentNode.nextNode;
    }
  }

  contains(value) {
    let currentNode = this.list;
    for (let x = 0; x < this.size(); x++) {
      if (currentNode.value === value) {
        return true;
      }
      if (currentNode.nextNode === null) {
        return false;
      }
      currentNode = currentNode.nextNode;
    }
  }

  find(value) {
    let currentNode = this.list;
    for (let x = 0; x < this.size(); x++) {
      if (currentNode.value === value) {
        return x;
      }
      if (currentNode.nextNode === null) {
        return null;
      }
      currentNode = currentNode.nextNode;
    }
  }

  toString() {
    let currentNode = this.list;
    let stringValues = `( ${currentNode.value} )`;
    for (let x = 0; x < this.size() - 1; x++) {
      currentNode = currentNode.nextNode;
      stringValues = stringValues + ` -> ( ${currentNode.value} )`;
    }
    stringValues += ` -> null`;
    return stringValues;
  }
}

class myNode {
  constructor(value, nextNode) {
    this.value = null;
    this.nextNode = null;
  }
  setValue(value) {
    this.value = value;
  }

  setNextNode(node) {
    this.nextNode = node;
  }
}
