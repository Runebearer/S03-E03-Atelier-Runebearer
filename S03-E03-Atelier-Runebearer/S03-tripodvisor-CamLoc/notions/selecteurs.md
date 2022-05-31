# Sélecteurs


Petit résumé des sélecteurs en JS : 

- `getElementByID` : renvoie toujours **un seul élément** (car l'id est unique). Il attend en argument un nom d'ID (sans le #)
- `getElementsByTagName` : renvoie toujours **un tableau d'éléments** (meme si un seul trouvé). Il attend un nom de balise (h1, p, span...)
- `getElementsByClassName` : renvoie toujours **un tableau d'éléments** (meme si un seul trouvé). Il attend un nom de classe (sans le .)

- `querySelector` : renvoie **toujours un seul élément** (le premier trouvé sur la page et qui correspond au sélecteur). Il attend un sélecteur CSS en argument (donc avec des #, des . etc. Exemple `#menu .item`)
- `querySelectorAll` : renvoie toujours **un tableau d'éléments** (meme si un seul élément trouvé). Comme querySelector, il attend un sélecteur CSS