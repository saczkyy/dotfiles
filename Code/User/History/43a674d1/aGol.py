def a1(n):
    result = 0
    for i in range(int(n)+1):
        result += i
    return f"{n}a1 * {result}q = ..."

print(a1(input()))