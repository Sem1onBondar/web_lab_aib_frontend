from collections import Counter

def histogram(text: str):
    text = text.replace(' ', '')
    chars = Counter(text)
    sorted_chars = sorted(chars.items())
    max_height = max(chars.values())
    sorted_text_columsn = "\n".join(
        "".join(["#" if height <= column[1] else " " for column in sorted_chars]) for height in
        range(max_height, 0, -1))
    return sorted_text_columsn + "\n" + "".join([column[0] for column in sorted_chars])


if __name__ == '__main__':
    text = 'Hello, world!'
#    text = 'Twas brillig, and the slithy toves' \
#           'Did gyre and gimble in the wabe;' \
#           'All mimsy were the borogoves,' \
#           'And the mome raths outgrabe.'
    print(histogram(text))