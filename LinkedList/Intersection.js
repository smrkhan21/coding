// Find the intersection point of two linked lists.

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


// 1st Approach:

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
    return null; // If either list is empty, there's no intersection.
  }

  let ptrA = headA;
  let ptrB = headB;

  while (ptrA !== ptrB) {
    // Advance both pointers, and if they reach the end of their respective lists,
    // reset them to the head of the other list.
    ptrA = ptrA ? ptrA.next : headB;
    ptrB = ptrB ? ptrB.next : headA;
  }

  return ptrA.data;
};

// 2nd Approach:

function getIntersectNode(listA, listB) {
    let visitedNode = new Set()

    while(listA !== null ) {
        visitedNode.add(listA.data)
        listA = listA.next
    }

    while(listB !== null) {
        if(visitedNode.has(listB.data)) {
            return listB.data
        }
        listB = listB.next
    }
    return false;
}

// list 1
let head1 = new Node(1);
 head1.next = new Node(2);
 head1.next.next = new Node(3);
 head1.next.next.next = new Node(4);
 head1.next.next.next.next = new Node(5);
 head1.next.next.next.next.next = new Node(6);
 head1.next.next.next.next.next.next = new Node(7);
 // list 2
 let head2 = new Node(10);
 head2.next = new Node(9);
 head2.next.next = new Node(8);
 head2.next.next.next = head1.next.next.next;

 console.log("1st Approach The node of intersection is : " + getIntersectionNode(head1, head2));
 console.log("2nd Approach The node of intersection is : " + getIntersectNode(head1, head2));
