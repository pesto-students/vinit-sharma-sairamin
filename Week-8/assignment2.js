//Problem 8.2 : Validate a Binary Tree


class BinaryTree
{
	constructor(item)
	{
		this.data = item;
		this.left = this.right=null;
	}
}

// Root of the Binary Tree
let root;

// To keep tract of previous BinaryTree in Inorder Traversal
let prev;

function isBST()
{
	prev = null;
	return _isBST(root);
}

//Returns true if given search tree is binary
function _isBST(BinaryTree)
{

	// traverse the tree in inorder fashion and
		if (BinaryTree != null)
		{
			if (!_isBST(BinaryTree.left))
				return false;

			// allows only distinct values BinaryTree
			if (prev != null && BinaryTree.data <= prev.data )
				return false;
			prev = BinaryTree;
			return _isBST(BinaryTree.right);
		}
		return true;
}

//testing binary tree 
root = new BinaryTree(4);
root.left = new BinaryTree(2);
root.right = new BinaryTree(5);
root.left.left = new BinaryTree(1);
root.left.right = new BinaryTree(3);

console.log(isBST()); //true

//time complexuty is O(N)
//space complexity is O(N)
