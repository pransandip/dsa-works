def binary_search(list, target):
    """
    Returns the index position of the target if found, else return None
    """
    first = 0
    last = len(list) - 1

    while first <= last:
        midpoint = (first + last)//2

        if list[midpoint] == target:
            return midpoint
        elif list[midpoint] < target:
            first = midpoint + 1
        else:
            last = midpoint - 1

    return None


def verify(list, index):
    # This Func is to take index value that is returned
    # from binary_search func and print..

    if index is not None:
        print(
            f'Target found at index: {index} and Target value is: {list[index]}')
    else:
        print("Target not found in list")


num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = binary_search(num, 10)
verify(num, result)

result = binary_search(num, 13)
verify(num, result)