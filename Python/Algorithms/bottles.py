##### ---------------------- GLobals ---------------------- #####
bottle_price = 3


##### ---------------------- Loop Solution ---------------------- #####
def count_bottles(cash):
    initial_bottles_ammount = cash // bottle_price
    all_bottles = initial_bottles_ammount 

    remaining_bottles_ammount = initial_bottles_ammount 
   
    while remaining_bottles_ammount != 1:
        more_bottles = remaining_bottles_ammount // 2  # getting 1 bottle for 2 empty bottles
        all_bottles += more_bottles 
        remaining_bottles_ammount = more_bottles + (remaining_bottles_ammount % 2)

    return all_bottles


##### ---------------------- Output ---------------------- #####
print("LOOP")
print(count_bottles(3)) # => 1
print(count_bottles(6)) # => 3
print(count_bottles(9)) # => 5
print(count_bottles(12)) # => 7
print(count_bottles(15)) # => 9
print(count_bottles(18)) # => 11
print(count_bottles(21)) # => 13
print(count_bottles(24)) # => 15


##### ---------------------- Recursive Solution ---------------------- #####
def count_bottles_recursive(remaining_bottles):
    prev_bottles = remaining_bottles 
    remaining_bottles = remaining_bottles // 2 

    if remaining_bottles < 1:  
        return remaining_bottles

    return remaining_bottles + count_bottles_recursive(remaining_bottles + prev_bottles % 2)


def count_bottles_rec(cash):
    init_bottles = cash // bottle_price

    return init_bottles + count_bottles_recursive(init_bottles)
   


##### ---------------------- Output ---------------------- #####
print("RECURSIVE")
print(count_bottles_rec(3)) # => 1
print(count_bottles_rec(6)) # => 3
print(count_bottles_rec(9)) # => 5
print(count_bottles_rec(12)) # => 7
print(count_bottles_rec(15)) # => 9
print(count_bottles_rec(18)) # => 11
print(count_bottles_rec(21)) # => 13
print(count_bottles_rec(24)) # => 15

