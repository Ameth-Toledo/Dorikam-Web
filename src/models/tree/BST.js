import Node from "./Node.js";

class BST {
    #root

    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root === null) {
            this.#root = new Node(value);
            return this.#root !== null;
        } else {
            return this.insertNode(this.#root, value);
        }
    }

    insertNode(node, value) {
        if (value.idShoe < node.value.idShoe) {
            if (node.left === null) {
                node.left = new Node(value); 
                return node.left !== null;
            } else {
                return this.insertNode(node.left, value);
            }
        } else if (value.idShoe > node.value.idShoe) {
            if (node.right === null) {
                node.right = new Node(value);
                return node.right !== null;
            } else {
                return this.insertNode(node.right, value);
            }
        } else {
            return false;
        }
    }
    
    search(idShoe) {
        return this.searchNode(this.#root, idShoe);
    }

    searchNode(node, idShoe) {
        if (node === null) {
            return null;
        } else if (idShoe < node.value.idShoe) {
            return this.searchNode(node.left, idShoe);
        } else if (idShoe > node.value.idShoe) {
            return this.searchNode(node.right, idShoe);
        } else {
            return node;
        }
    }

    min() {
        if (this.#root === null) {
            return null; 
        }
        return this.minNode(this.#root); 
    }
    
    minNode(node) {
        if (node === null) {
            return null;
        }
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    
    max() {
        if (this.#root === null) {
            return null;
        }
        return this.maxNode(this.#root); 
    }

    maxNode(node) {
        if (node === null) {
            return null;
        }
        while (node.right !== null) {
            node = node.right;
        }
        return node; 
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.#root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) { 
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value); 
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.#root, callback);
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.value); 
            this.preOrderTraverseNode(node.left, callback); 
            this.preOrderTraverseNode(node.right, callback); 
        }
    }

    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.#root, callback);
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback); 
            callback(node.value); 
        }
    } 
}

export default BST;
