def linear_search(list, target):
    # It's called doc string for documenting code
    """
    Returns the index position of the target if found, else return None,
    Linear search is a sequential algorithm, it goes through each an every item until the target is found
    """
    for i in range(0, len(list)):
        if list[i] == target:
            return i
    return None


def verify(index):
    # This Func is to take index value that is returned
    # from linear_search func and print..

    if index is not None:
        print(f'Target found at index: {index}')
    else:
        print("Target not found in list")


num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = linear_search(num, 2)
verify(result)
