# linked-list

Creating an algorithm for the linked-list data structure.

# To use:

Create new LinkedList:

```javascript
const newList = new LinkedList(new myNode()); // HEAD is first node, replace with append
```

Append new value:

```javascript
newList.append("whatever");
```

Prepend new value:

```javascript
newList.prepend("prepended value");
```

Get list size:

```javascript
newList.size();
```

Get first value in list:

```javascript
newList.head();
```

Get final value in list:

```javascript
newList.tail();
```

Get value at index in list:

```javascript
newList.at(0); // Gets value at index 0
```

Remove value at end of list:

```javascript
newList.pop();
```

Check if list contains a value:

```javascript
newList.contains("whatever"); // Returns true if "whatever" string is found in list
```

Find index of a value in the list:

```javascript
newList.find("a value"); // Returns index number if found, else returns null
```

Show list visually as a string:

```javascript
newList.toString();
// Example output: " ( 'value 1' ) -> ( 'value 2' ) -> ( 'value 3' ) -> null "
```
