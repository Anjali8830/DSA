/****************************************************************

	Following is the let class already written for the Linked List

	class  Node<T> {
    	T data;
    	 Node<T> next;
    
    	public  Node(T data) {
        	this.data = data;
    	}
	}

*****************************************************************/

function Solution(head) {
	
		let current = head;
		let n = head.next;
let index =0;
if(pos== 0){
	head.next = null;
	head = n;
	return head;
}
while(current !=null && index < pos -1){
	current = current.next ;
	index++;
}
  if (current == null || current.next == null) {
            return head;  // No deletion
        }
//case 2 somewhere in between 
current.next = current.next.next;

return head;
	}
