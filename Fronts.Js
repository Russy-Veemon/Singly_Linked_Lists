// Fronts
// Use classes, attributes, and methods in the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. All examples are done in order, starting with a new instance of the SLL class.

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class SLL {
    // constructor, other methods, removed for brevity
    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head
    }


// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.


    // constructor, other methods, removed for brevity
    removeFront() {
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }


// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    // constructor, other methods, removed for brevity
    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
    }
}

