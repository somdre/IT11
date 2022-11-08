from pylab import *
import scipy.stats as stats

# Leser inn dataene
høyde=array([170, 160, 183, 180, 170, 178, 180, 190, 186, 172])
skonummer=array([38, 36, 44, 43, 39, 41, 42, 44, 45, 37])

# Tilpasser lineær regresjonsmodell 
resultat=stats.linregress(skonummer,høyde)

# Plotter dataene og regresjonslinja
plot(skonummer, høyde, 'o', label='observasjoner')
plot(skonummer, resultat.intercept + resultat.slope*skonummer, 'r', label='regresjonslinje')
legend()


# Skriver ut diverse resultatet for regresjonen
print("Estimat stigningstall:", round(resultat.slope,5))
print("Estimat konstantledd:", round(resultat.intercept,3))
print("r^2:", round(resultat.rvalue**2,3))
print("P-verdi (nullhypotese: stigningstall=0):", round(resultat.pvalue,4))
print("Standardfeil stigningstall:", round(resultat.stderr,5))
print("Standardfeil konstantledd:", round(resultat.intercept_stderr,3))


########################

x = skonummer; y = høyde

# Beregner diverse størrelser
m=len(x); n=len(y)                                            # antall observasjoner
snitt_x=mean(x); snitt_y=mean(y)                              # gjennomsnitt
sd_x=std(x,ddof=1); sd_y=std(y,ddof=1)                        # empirsik standardavvik for hver gruppe
sp=sqrt(((m-1)/(m+n-2))*sd_x**2+((n-1)/(m+n-2))*sd_y**2)      # felles empirisk standardavvik
t_025=stats.t.ppf(0.975,m+n-2)                               # t-pt_{n+m-2}(0,025)

# Finner konfidensintervallet:
nedre=snitt_x-snitt_y-t_025*sp*sqrt(1/m+1/n)
ovre=snitt_x-snitt_y+t_025*sp*sqrt(1/m+1/n)
print("95% konfidensintervall:", round(nedre,1), round(ovre,1))
print("stigningtallet som er", round(resultat.slope,5), ", er det samme som vi forventer høyden kommer til å øke med per skostørrelse")

show()

