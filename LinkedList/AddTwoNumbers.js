// Implement a function to add two numbers represented by linked lists.

class Node {
    constructor(data) {
        this.val = data
        this.next = null
    }
}

function addTwoNumbers(list1, list2) {
    let resutList = new Node(0)
    let current = resutList

    let carry = 0

    while(list1 || list2) {
        let a = list1 ? list1.val : 0
        let b = list2 ? list2.val : 0

        const sum = a + b + carry

        carry = Math.floor(sum/10)

        current.next = new Node(sum % 10)

        current = current.next

        if(list1) list1 = list1.next
        if(list2) list2 = list2.next
    }

    if(carry > 0) {
        current.next = new Node(carry)
    }

    return resutList.next;
}


// Helper function to convert an array to a linked list
function arrayToList(arr) {
    let dummyHead = new Node(0);
    let current = dummyHead;
  
    for (const num of arr) {
      current.next = new Node(num);
      current = current.next;
    }
  
    return dummyHead.next;
  }
  
  // Helper function to convert a linked list to an array
  function listToArray(head) {
    let result = [];
    let current = head;
  
    while (current) {
      result.push(current.val);
      current = current.next;
    }
  
    return result;
  }
  
  // Example usage
  const num1 = [2, 4, 3];
  const num2 = [5, 6, 4];
  
  const l1 = arrayToList(num1);
  const l2 = arrayToList(num2);


  const sumList = addTwoNumbers(l1, l2);
console.log(listToArray(sumList)); // Output: [7, 0, 8]