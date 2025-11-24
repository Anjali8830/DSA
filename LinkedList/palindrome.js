// --------------------------------
// Node class
// --------------------------------
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// --------------------------------
// Build linked list from array until -1
// --------------------------------
function buildLinkedList(arr) {
    let head = null;
    let tail = null;

    for (let num of arr) {
        if (num === -1) break;

        const newNode = new Node(num);
        if (!head) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    return head;
}

// --------------------------------
// Reverse a linked list
// --------------------------------
function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;  // new head
}

// --------------------------------
// Check Palindrome
// --------------------------------
function isPalindrome(head) {
    // Empty list OR 1 element → palindrome
    if (!head || !head.next) return true;

    // Step 1: Find middle (fast/slow)
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse second half
    let secondHalfHead = reverseList(slow.next);

    // Step 3: Compare halves
    let p1 = head;
    let p2 = secondHalfHead;

    while (p2) {
        if (p1.data !== p2.data) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
}

// --------------------------------
// Example Test Runner
// --------------------------------
function run() {
    const testCases = [
        [9, 2, 3, 3, 2, 9, -1],
        [0, 2, 3, 2, 5, -1],
        [-1]
    ];

    for (let arr of testCases) {
        const head = buildLinkedList(arr);
        console.log(isPalindrome(head));
    }
}

run();
