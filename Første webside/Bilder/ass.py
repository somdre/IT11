from matplotlib import legend
import matplotlib.pyplot as plt

måltTidStorKule = [1.325, 1.312, 1.296, 1.294, 1.305]
måltTidLitenKule = [1.341, 1.366, 1.355, 1.302, 1.302]
måling = ["1","2","3","4","5"]

plt.plot(måling, måltTidStorKule, "o-", label="stor kule")
plt.plot(måling, måltTidLitenKule, "o-", label="liten kule")
plt.grid()
plt.xlabel("måling nr")
plt.ylabel("periode")
plt.legend()
plt.show()

måltTidLangTråd = [1.469, 1.419, 1.419, 1.432, 1.469]

plt.plot(måling, måltTidLangTråd, "o-", label="Lang tråd")
plt.plot(måling, måltTidLitenKule, "o-", label="Kort tråd")
plt.grid()
plt.xlabel("måling nr")
plt.ylabel("periode")
plt.legend()
plt.show()