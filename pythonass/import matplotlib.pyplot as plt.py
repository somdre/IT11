import matplotlib.pyplot as plt, numpy as np

def f(x):
    return 0.5*x**3-1.5*x**2+2

def g(x):
    return 2*x**x-1

xVerdier = np.linspace(-2,4,400)
yVerdier = f(xVerdier)
yVerdierG= g(xVerdier)

plt.plot(xVerdier, yVerdier, color="r", label="f(x)")
plt.plot(xVerdier, yVerdierG, color="g", label="g(x)")

plt.xlabel("Distanse fra sondre i meter")
plt.ylabel("missunelighet på grunn av sexynesset til sondre")

plt.xticks(np.arange(-2, 5, 0.5))
plt.yticks(np.arange(-8, 10, 1))

plt.axhline(y=0, color="k")
plt.axvline(x=0, color="k")

plt.pink()
plt.grid()
plt.legend()
plt.show()