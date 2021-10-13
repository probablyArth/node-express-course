class Item:
    def __init__(self, name:str, price:int):
        self.name = name
        self.price = price

class ShoppingCart:
    def __init__(self):
        self.item_list = []
        self.price = 0

    def add_item(self, item:Item):
        self.item_list.append(item)
        self.price = self.price + item.price

    def items(self):
        print(len(self.item_list))

    def __str__(self):
        return "hello"

    def __len__(self):
        return 65

    
candy = Item("Candy", 2)

cart = ShoppingCart()

cart.add_item(candy)
cart.add_item(candy)
print(cart.price)
cart.items()
print(cart)
print(len(cart))
