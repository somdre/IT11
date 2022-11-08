from pylab import *
import scipy.stats as stats

# Leser inn dataene:
x=[201, 221, 228, 237, 326, 235, 240, 257, 284, 210]
y=[200, 216, 224, 216, 296, 195, 207, 247, 260, 209]

# Manuel beregning av test observator og p-verdi:
d = array(x)-array(y)
n=len(d)                                	# antall differanser
snitt_d=mean(d)                      	    # gjennomsnitt
sd_d=std(d,ddof=1)                   	    # standardavvik
t=snitt_d/(sd_d/sqrt(n))                    # t-observator
p=2*(1-stats.t.cdf(abs(t),n-1))             # P-verdi
print("t-observator:",round(t,3))
print("P-verdi:",round(p,3))

# Direkte ved kommando for t-test for parforsøk:
test_d=stats.ttest_rel(x,y)
print("t-observator:",round(test_d.statistic,3))
print("P-verdi:",round(test_d.pvalue,3))
