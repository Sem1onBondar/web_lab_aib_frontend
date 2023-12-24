def sum_median(arr):
    count = 0
    for item in arr:
        tarr = sorted(arr[:item])
        count += tarr[len(tarr) // 2] if len(tarr) % 2 != 0 else tarr[len(tarr) // 2 - 1]
    return count


print(sum_median([5, 10, 8, 1, 7, 3, 9, 6, 2, 4]))
# print(sum_median([5, 3, 1, 2, 4]))