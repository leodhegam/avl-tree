// https://github.com/justinethier/AVL-Tree/blob/master/src/main/java/justinethier/AvlTree.java
// https://www.youtube.com/watch?v=vRwi_UcZGjU


class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left  = null;
        this.height = 0;
    }
}

class Tree {
    constructor() {

    }

    search () {}
    insert() {}
    remove() {}
    rotateLeft(node) {

        // right child becomes his parent
        // his right child's child becomes his child
        
        let auxNode = node.right;
        node.right = auxNode.left;
        
        if(auxNode.left !== null) {
            auxNode.left.parent = node;
        }

        auxNode.parent = node.parent;

        if(node.parent === null) {
            this.root = auxNode;
        } else if (node.parent.left == node) {
            node.parent.left = auxNode;
        } else {
            node.parent.right = auxNode;
        }

        auxNode.left = node;
        node.parent = auxNode;
    }

    rotateRight() {

        let auxNode = node.left;
        node.left = auxNode.right;
        
        if(auxNode.right !== null) {
            auxNode.right.parent = node;
        }

        auxNode.parent = node.parent;

        if(node.parent === null) {
            this.root = auxNode;
        } else if (node.parent.right == node) {
            node.parent.right = auxNode;
        } else {
            node.parent.left = auxNode;
        }

        // node.right = auxNode;
        // auxNode.parent = node;

        auxNode.right = node;
        node.parent = auxNode;
    }

    height() {
        aux = root;
    }
}

/**
 *
public int height (AvlNode<T> t){
   return t == null ? -1 : t.height;
}


 * 
 * /


// threshold padrao = 1
// altura:
// vazio altura = -1
// 1 elemento altura = 0
// se left e right sao nulos altura = 0
// se left ou right sao nao nulos altura = 1
// altura total = altura da esquerda - altura da direita
// se altura positiva = left heavy
// se altura negativa = right heavy // rotaciona pra 