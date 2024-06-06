def a1(n):
    result = 0
    for i in range(int(n)):
        result += i
        print(result)
    return f"{n}a1 * q^{result} = ..."

print(a1(input()))