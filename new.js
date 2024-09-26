// Node class representing each element in the Linked List
class Node {
    constructor(value) {
        this.value = value;   // The data or value stored in the node
        this.next = null;     // Pointer to the next node
    }
}

// Singly Linked List class
class LinkedList {
    constructor() {
        this.head = null;     // The head of the list (first node)
        this.size = 0;        // Size of the list
    }

    // Add a new node to the end of the linked list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {          // If list is empty, set the new node as the head
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {    // Traverse the list until we find the last node
                current = current.next;
            }
            current.next = newNode;   // Add the new node at the end
        }

        this.size++;
    }

    // Add a node at the beginning of the linked list
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head; // Point the new node to the current head
            this.head = newNode;      // Make the new node the head
        }

        this.size++;
    }

    // Remove a node by value
    // remove(value) {
    //   if (!this.head) return null;

    //   // If the node to remove is the head
    //   if (this.head.value === value) {
    //     this.head = this.head.next;
    //     this.size--;
    //     return;
    //   }

    //   let current = this.head;
    //   let previous = null;

    //   // Traverse to find the node with the given value
    //   while (current && current.value !== value) {
    //     previous = current;
    //     current = current.next;
    //   }

    //   if (!current) return null;  // Value not found

    //   // Skip the node to remove it
    //   previous.next = current.next;
    //   this.size--;
    // }


    removePrime(value) {
        if (!this.head) return null
        if (this.head.value % 2 == 1) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let curr = this.head
        let prev = null
        
        while(curr && curr.value!==value){
            prev = prev.next
            curr = curr.next
        }

    }

    // Print the linked list
    printList() {
        let current = this.head;
        let result = '';

        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }

        console.log(result + 'null');
    }

    // Get the size of the linked list
    getSize() {
        return this.size;
    }

    // Check if the linked list is empty
    isEmpty() {
        return this.size === 0;
    }


}

// Example usage:
const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(3);
// ll.printList(); // Output: 10 -> 20 -> 30 -> null
ll.prepend(5);
// ll.printList(); // Output: 5 -> 10 -> 20 -> 30 -> null



ll.removePrime();
ll.printList(); // Output: 5 -> 10 -> 30 -> null
console.log("prime",ll.removePrime())


// console.log("Size:", ll.getSize());  // Output: Size: 3
