class Node {
    constructor(data) {
        this.data = data; // Data on that node
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode; // Updating the new Node to the head
        this.size++; // Increment the size
    }

    // Implement append method
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let str = '';
        while (current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }
        console.log(str + 'null');
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let newNode = new Node(data);
        if (index === 0) {
            this.prepend(data); // If the index is 0, prepend it.
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    // Implement removeLast method
    removeLast() {
        if (!this.head) {
            return null;
        }

        if (this.head.next === null) {
            let removedNode = this.head;
            this.head = null;
            this.size--;
            return removedNode;
        }

        let current = this.head;
        let previous = null;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.size--;
        return current;
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;

        return current.data;
    }

    search(data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    updateAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.data = data; // Update the data that we want.
    }
}

// Testing the LinkedList class
let linkedList = new LinkedList();

// Prepending nodes
linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);

// Inserting a node at index 2
linkedList.insertAt(15, 2);

// Updating the node at index 3
linkedList.updateAt(25, 3);

// Printing the list
console.log("List after various operations:");
linkedList.printList(); // Output: 30 -> 20 -> 15 -> 25 -> 10 -> null

// Appending a node
linkedList.append(35);
console.log("List after appending 35:");
linkedList.printList(); // Output: 30 -> 20 -> 15 -> 25 -> 10 -> 35 -> null

// Removing the last node
linkedList.removeLast();
console.log("List after removing the last node:");
linkedList.printList(); // Output: 30 -> 20 -> 15 -> 25 -> 10 -> null

// Removing the first node
linkedList.removeFirst();
console.log("List after removing the first node:");
linkedList.printList(); // Output: 20 -> 15 -> 25 -> 10 -> null

// Searching for a node
console.log("Search for 25:", linkedList.search(25)); // Output: true
console.log("Search for 40:", linkedList.search(40)); // Output: false
