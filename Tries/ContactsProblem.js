/**
 * 1. Find out how many contacts start with a given string
 * 2. Be able to expand the contact list
 * 
 * For the Contacts:
 *  Brian
 *  Dave
 *  Fred
 *  Greg
 *  Anne
 *  Don
 *  Anna
 *  Albert
 * 
 * I.E. Given "Ann" return 2, because the contacts ["Anna", "Anne"] match
 * TODO: Makes sense to also return the contacts? As in autocomplete?
 */


class Node {

    constructor() {
        this.ALPHABET = "abcdefghijklmnopqrstuvwxyz";
        this.children = [];

        //How many contact names
        //can be created from this node
        this.nodeSize = 0;
    }

    /**
     * PUBLIC FUNCTIONS
     */
    numberOfContactsStartingWith(string) {
        return this.findCount(string.toLowerCase(), 0);
    }

    add(contact) {
        this.privateAdd(contact.toLowerCase(), 0);
    }

    /**  PRIVATE FUNCTIONS
     *  (in theory, but in practice public, not going to use experimental features)
     * */

    // Get the child node for the given letter
    getNode(character) {
        return this.children[this.getCharIndex(character)];
    }

    //Sets the possible next letter combinations for the current character
    setNode(character, node) {
        this.children[this.getCharIndex(character)] = node;
    }

    getCharIndex(character) {
        //Javascript doesn't have a neat way of easily getting
        //the characters position in alphabet
        return this.ALPHABET.indexOf(character);
    }

    /**
     * Recursive function to add new contact name to the structure
     * @param {String} string 
     * @param {int} index 
     */
    privateAdd(string, index) {
        this.nodeSize++;
        if (index == string.length) return;

        const currentCharacter = string.charAt(index);

        let childNode = this.getNode(currentCharacter);
        if (!childNode) {
            childNode = new Node();
            this.setNode(currentCharacter, childNode);
        }
        childNode.privateAdd(string, ++index);
    }

    findCount(string, index) {
        debugger;
        if (index === string.length) {
            return this.nodeSize;
        }

        const childNode = this.getNode(string.charAt(index));
        if (!childNode) return 0;

        return childNode.findCount(string, ++index);

    }
}

// Build the contacts List
let contacts = new Node();

contacts.add("Brian");
contacts.add("Dave");
contacts.add("Fred");
contacts.add("Greg");
contacts.add("Anne");
contacts.add("Don");
contacts.add("Anna");
contacts.add("Albert");



let numOfContacts = contacts.numberOfContactsStartingWith("Ann")//Should be Anne and Anna
console.log(`Number of contacts starting with "Ann" ${numOfContacts}`);

//Now grow the contact list
contacts.add("David");
contacts.add("Darren");

numOfContacts = contacts.numberOfContactsStartingWith("Da"); //Shoud be Dave, David, and Darren

console.log(`Number of contacts starting with "Da" ${numOfContacts}`);
