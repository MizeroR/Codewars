def descending_order(num):
    numbers = sorted(str(num), reverse=True)
    print(numbers)
    return int("".join(numbers))