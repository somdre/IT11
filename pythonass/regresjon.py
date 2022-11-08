import matplotlib.pyplot as plt
import numpy as np


#Legger inn datasettet
tid=[0, 5.3, 8.9, 12.4, 16, 19.7, 23.6, 27.7, 31.8, 36, 40.5, 45.94] # sett inn tid for start, slutt og 10 hekker
strekning=[0, 45, 80, 115, 150, 185, 220, 255, 290, 325, 360, 400] # sett inn posisjonen til start, sliutt og 10 hekker
plt.scatter(tid, strekning) #plotter datasettet som punkt

parameter=np.polyfit(tid,strekning,3)
polynom=np.poly1d(parameter)
x = np.arange(tid[-1]+1) # lager en liste med alle de hele tallene fra 0 til og med det siste elementet i tid (46)
y = polynom(x) # finner y verdiene for hver x verdi
plt.plot(x, y, color="red") # plotter polynomet

plt.grid() # slår på rutenett
plt.xlabel("tid (sekund)") # gir navn til aksene
plt.ylabel("strekning (meter)") # gir navn til aksene
plt.title("Karstein Warholm hekkeløp") # setter en titel på grafen

print("polynomet som er tilpasset er")
print(polynom)

plt.show() # viser grafen

#plt.axline((8.9,0),(8.9,1),color="y") #lager den gule linjen

def f(x): #definerer polyynomet
    return -0.0006988*x**3 + 0.02054*x**2 + 9.263*x - 1.901

def fd(x,h): #definerer formelen for momentan vekstfart
    return (f(x+h)-f(x))/h

l = 0.00000001 # lavt nummer :D
x = [] # definerer en liste
dY = [] # Dervierte y verdier
for i in np.arange(l, 46, 0.1): # arange (range med float) som kjører gjennom alle x verdiene
    x.append(i) # appender x verdiene i en liste
    dY.append(fd(i,l)) # bruker formelen (fd) som er opgitt til å finne momentanvekstfart, appender den
   
plt.plot(x, dY, color="green")


fart=[] # definerer en liste, legger til 0 siden han står i ro når hekkeløpet starter
for i in range(len(tid)-1): # for loopen gir i verdiene fra 0 til 11 og kjører gjennom listene og finner gjennomsnitsfart
    a = round((strekning[i+1] - strekning[i])/(tid[i+1] - tid[i]),2) #bruker formelen for stigningstall
    fart.append(a) # appender variabelen a bakerst i listen fart

# lager stegplot

x=[strekning[0]] # tyvstarter x- listen siden start og slutt verdien skal være kun en gang
y=[]

for i in range(len(fart)):
    x.append(tid[i+1]) #dobbler alle x-vedier uten om første og siste
    x.append(tid[i+1])
    y.append(fart[i]) #dobbler alle yverdier.
    y.append(fart[i])
x.pop() #"popper" ut den siste x- verdien slik at x- og y- listene blir like lange


#plt.plot(x,y,"r")

plt.show() # viser grafen


