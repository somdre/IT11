from pylab import *
import scipy.stats as stats

# Leser inn dataene:
x=[603, 628, 610, 639, 579, 637, 653, 612, 623, 550]

# Beregner diverse størrelser
n=len(x)                           # antall observasjoner
snitt_x=mean(x)                    # gjennomsnitt
sd_x=std(x,ddof=1)                 # standardavvik
t_025=stats.t.ppf(0.975,n-1)       # t_{n-1}(0,025)


# Finner konfidensintervallet:
nedre=snitt_x-t_025*sd_x/sqrt(n)
ovre=snitt_x+t_025*sd_x/sqrt(n)
print("95% konfidensintervall:", round(nedre,1), round(ovre,1))