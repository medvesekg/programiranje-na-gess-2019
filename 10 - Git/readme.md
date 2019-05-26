# Domača naloga

Prvič: za ponovitev dokončaj lekcijo [learn git](https://www.codecademy.com/learn/learn-git) na codecademy

Drugič: Na Github Pages objavi svojo osebno spletno stran. Naj vsebuje kakšno sliko, seznam jezikov in tehnologij, ki ste se jih naučili, ter povezave na projekte, ki smo jih naredili na tečaju. Primer [medvesekg.github.io](https://medvesekg.github.io), kodo lahko pregledate [tu](https://github.com/medvesekg/medvesekg.github.io).


### Navodila za objavo na github pages
1. Na githubu ustvari nov git repozitorji 


![newrepo](1.png)

2. Poimenuj ga {moje-uporabniško-ime}.github.io, kjer je {moje-uporabniško ime} ime s katerim si se prijavili na github. Vse ostalo pusti na privzetih nastavitvah


![newrepo2](2.png)


3. Na svojem računalniku, v mapi kjer imaš datoteke za spletno stran zaženi te ukaze v sledečem vrstnem redu
```
git init

git add .

git commit -m "First commit"

git remote add origin https://github.com/{moje-uporabniško-ime}/{moje-uporabniško-ime}.github.io.git

git push -u origin master
```

4. Čez nekaj minut bo vaša spletna stran dosegljiva na https://{moje-uporabniško-ime}.github.io