def filter_list(l):
    result = []
    for char in l:
        if isinstance(char, int):
            result.append(char)
    return result
    