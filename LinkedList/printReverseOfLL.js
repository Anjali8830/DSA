// -------------------------------
// Node class for Linked List
// -------------------------------
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// -------------------------------
// Build Linked List from array until -1
// -------------------------------
function buildLinkedList(arr) {
    let head = null;
    let tail = null;

    for (let num of arr) {
        if (num === -1) break;

        const newNode = new Node(num);

        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    return head;
}

// -------------------------------
// Print Linked List in Reverse (Recursive)
// -------------------------------
function printReverse(head) {
    if (head === null) return;

    printReverse(head.next);

  
    process.stdout.write(head.data + " ");
}
