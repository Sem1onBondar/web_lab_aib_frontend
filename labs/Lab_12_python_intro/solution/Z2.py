def calc_sum_medians(sum_medians, sub_seq_len, numbers):
    temp_seq = numbers[:sub_seq_len]
    temp_seq.sort()
    if len(temp_seq) % 2 == 1:
        if len(temp_seq) == 1:
            sum_medians += temp_seq[0]
        else:
            sum_medians += temp_seq[((len(temp_seq) + 1) // 2) - 1]
    elif len(temp_seq) % 2 == 0:
        sum_medians += temp_seq[(len(temp_seq) // 2) - 1]
    sub_seq_len += 1
    if sub_seq_len > num_count:
        return sum_medians
    else:
        return calc_sum_medians(sum_medians, sub_seq_len, numbers)

num_count = int(input())
numbers = list(map(int, input().split()))
print(calc_sum_medians(0, 1, numbers))