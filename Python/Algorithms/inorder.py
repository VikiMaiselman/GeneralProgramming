class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def inorder_traversal(root):
    result = []
    inorder_recursive(root, result)
    return result

def inorder_recursive(node, result):
    if node is None:
        return
    
    inorder_recursive(node.left, result)
    result.append(node.val)
    inorder_recursive(node.right, result)

# Example usage:
# Create a binary tree
root = TreeNode(1)
root.right = TreeNode(2)
root.right.left = TreeNode(3)

# Perform in-order traversal
print("In-order traversal:", inorder_traversal(root))  # Output: [1, 3, 2]

root = TreeNode(5)
root.left = TreeNode(3)
root.right = TreeNode(8)
root.left.left = TreeNode(1)
root.left.right = TreeNode(4)
root.right.left = TreeNode(6)
root.right.right = TreeNode(9)

# Perform in-order traversal
print("In-order traversal:", inorder_traversal(root))  # Output: [1, 3, 4, 5, 6, 8, 9]

