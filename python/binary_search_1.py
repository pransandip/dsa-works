def binary_search(list, target):
    """
    Returns the index position of the target if found, else return None

    *To work with binary search you have to first sort the list otherwise
     it won't work even if the value is in the list

    Explanation: first it will define first and last element of the list,
    then it will bring up mean of the list and check the target value with
    the mean if it is matches then it will return the index of the midpoint,
    otherwise it will check if mean value is gratter than or less than the midpoint,
    if it is gratter assign the value to first variable(midpoint + 1) it will discard
    lesser values and move it to the right direction, and if is it less then assign the
    value to last variable(midpoint - 1) it will discard higher values and move it
    to the Left hand side direction...
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

result = binary_search(num, 5)
verify(num, result)
