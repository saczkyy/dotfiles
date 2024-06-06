def iloczynA1doN(n):
    result = 0
    for i in range(int(n)):
        result += i
        print(result)
    return f"a1^{n} * q^{result} = ..."

print(a1(input()))