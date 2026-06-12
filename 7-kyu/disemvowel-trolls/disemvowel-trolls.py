def disemvowel(string):
    result = []
    vowels = ['a','e','i','o','u']
    for char in string:
        if char.lower() not in vowels:
            result.append(char)
    return "".join(result)