class Node:
    def __init__(self, key=None, value=None):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _add_node(self, node):
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node

    def _remove_node(self, node):
        prev_node = node.prev
        next_node = node.next
        prev_node.next = next_node
        next_node.prev = prev_node

    def _move_to_head(self, node):
        self._remove_node(node)
        self._add_node(node)

    def get(self, key):
        if key in self.cache:
            node = self.cache[key]
            self._move_to_head(node)
            return node.value
        return -1

    def put(self, key, value):
        if key in self.cache:
            node = self.cache[key]
            node.value = value
            self._move_to_head(node)
        else:
            if len(self.cache) == self.capacity:
                del self.cache[self.tail.prev.key]
                self._remove_node(self.tail.prev)
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add_node(new_node)

# Create an LRU cache with capacity 3
cache = LRUCache(3)

# Test case 1: Put some key-value pairs into the cache
cache.put(1, "A")
cache.put(2, "B")
cache.put(3, "C")

# Test case 2: Access existing keys
print(cache.get(1))  # Output: "A"
print(cache.get(2))  # Output: "B"
print(cache.get(3))  # Output: "C"

# Test case 3: Access a non-existent key
print(cache.get(4))  # Output: -1

# Test case 4: Update existing key
cache.put(2, "D")
print(cache.get(2))  # Output: "D"

# Test case 5: Add more items to exceed cache capacity
cache.put(4, "E")
cache.put(5, "F")

# Test case 6: Access keys after exceeding capacity
print(cache.get(1))  # Output: -1 (Evicted)
print(cache.get(3))  # Output: "C"
print(cache.get(2))  # Output: "D"
print(cache.get(4))  # Output: "E"
print(cache.get(5))  # Output: "F"

# Test case 7: Add more items to exceed cache capacity again
cache.put(6, "G")

# Test case 8: Access keys after exceeding capacity again
print(cache.get(3))  # Output: -1 (Evicted)
print(cache.get(2))  # Output: -1 (Evicted)
print(cache.get(4))  # Output: "E"
print(cache.get(5))  # Output: "F"
print(cache.get(6))  # Output: "G"
