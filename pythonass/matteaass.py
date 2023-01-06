a = 0
b = 4
nøyaktighet = 0.00001

def f(x):
    return (x**2-4*x+3)/(x-2)

m = (a+b)/2
m+=nøyaktighet

while abs(f(m)) >= nøyaktighet:
    if f(a)*f(m) < 0:
        b = m
    else:
        a = m
    m = (a+b)/2
    if a == 2:
        a+=nøyaktighet
    if m == 2:
        m+=nøyaktighet
print("Det første nullpunkteter:", round(m,4))

a=0
m = (a+b)/2
m-=nøyaktighet

while abs(f(m)) >= nøyaktighet:
    if f(a)*f(m) < 0:
        b = m
    else:
        a = m
    m = (a+b)/2
    if a == 2:
        a-=nøyaktighet
    if m == 2:
        m-=nøyaktighet
print("Det andre nullpunktet  er:", round(m,4))