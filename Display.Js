class SLL {
    // constructor, other methods, removed for brevity
    display() {
        var listStr = "" ; //Empty string that will contain values of the list
        //Edge case: list is empty
        if (this.head == null) {
            return listStr;
        }
        //we have at least one node
        listStr += this.head.value; // concatenates the first value in the list
        // For the second node one, well add ", " +value;
        var runner = this.head.next;
        while (runner != null){
            listStr += ", " + runner.value;
            runner = runner.next;
        }
        return listStr;
    }
}

var SLL1 = new SLL()

SLL1.addFront(76) 
// => Node { data: 76, next: null }
SLL1.addFront(2) 
// => Node { data: 2, next: Node { data: 76, next: null } }
SLL1.display() 
// => "2, 76"
SLL1.addFront(11.41) 
// => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
SLL1.display()
//  => "11.41, 2, 76"