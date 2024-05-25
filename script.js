class LinkedList {
  constructor(list) {
    this.list = list;
    list.value = "HEAD"; // when a list is initialised, there's only one node so mark is as HEAD.
  }

  append(value) {
    let currentNode = this.list;
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
    newNode.setNextNode(this.list.nextNode);
    this.list.setNextNode(newNode);
    // works as expected!!
  }

  size() {
    let currentNode = this.list;
    let loops = 0;

    while (true) {
      if (currentNode.nextNode === null) {
        return loops;
      }
      currentNode = currentNode.nextNode;
      loops++;
    }
  }

  head() {
    return this.list.nextNode;
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
    for (let x = 0; x < index + 1; x++) {
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
    // WRITE THIS TOMORROW. ALSO WRITE ERROR HANDLING IN THE CASE SOMEONE USES THE "at()" FUNCTION AND THAT INDEX DOES NOT EXIST SUCH AS WHEN ITS TOO LARGE OR LESS THAN 0
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

const newList = new LinkedList(new myNode());

// newList.list.setNextNode(new myNode());
// newList.list.nextNode.setValue("second node");

newList.append("second node");
newList.append("third node");
newList.append("fourth node");
newList.prepend("should be at beginning of list");
newList.prepend("nah i am");

// console.log(newList.list);
// console.log(newList.size());
// console.log(newList.head());
// console.log(newList.tail());

console.log(newList.at(3));
newList.pop();
console.log(newList.at(3));

// console.log(newList.list.nextNode);

// MAYBE GET RID OF HEAD NDOE AND JUST HAVE THE FIRST NODE BE WHATEVER I ADD TO LIST FIRST. I WILL NEED TO CHANGE A COUPLE FUNCTIONS TO IMPLEMENT THIS
