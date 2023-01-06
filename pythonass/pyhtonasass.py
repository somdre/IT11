folk = ["a","b","c","d","e"]
par = []

for i in range(len(folk)-1):
    par.append([folk[i],folk[i+1]])
par.append([folk[-1],folk[0]])

def chunks(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]
    print(lst)
chunks(folk, 2)
