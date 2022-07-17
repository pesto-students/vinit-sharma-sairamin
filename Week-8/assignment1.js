//Problem 8.1: Maximum Depth of Binary Tree

//class to create binaryTree node
class BinaryTree
{
    constructor(item)
    {
        this.data=item;
        this.left=this.right=null;
    }
}
 
    let root;
    function maxDepth(BinaryTree)
    {
        if (BinaryTree == null)
            return 0;
        else
        {
            // getting the depth of each subtree
            let lDepth = maxDepth(BinaryTree.left);
            let rDepth = maxDepth(BinaryTree.right);
   
            // use the larger one 
            if (lDepth > rDepth)
                return (lDepth + 1);
             else
                return (rDepth + 1);
        }
    }
     
    // testing the algorithm

        //creating bunary tree
        root = new BinaryTree(1);
        root.left = new BinaryTree(2);
        root.right = new BinaryTree(3);
        root.left.left = new BinaryTree(4);
        root.left.right = new BinaryTree(5);
   
        var depth = maxDepth(root); 
        console.log(depth); //3 is maximum depth of the binary tree

//time complexity is O(N)
//space Complexity is O(N)
