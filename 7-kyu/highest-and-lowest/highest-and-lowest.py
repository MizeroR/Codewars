def high_and_low(numbers):
    list = []
    for char in numbers.split():
        list.append(int(char))
    return f"{max(list)} {min(list)}"
​