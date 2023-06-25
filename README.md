# Workout app

# Architecture

#### Où trouver les points réalisés ?

Nous avons mis des commentaire <code>NOTATION</code> là où se trouvent les points. Ils ne sont pas tous répertoriés (surtout pour le redux store, qui est utilisé dans la quasi-totalité de l'application) mais nous avons essayé d'en mettre au moins un par point.

> NOTATION : Sexy UI everywhere !

## App sketches

https://www.canva.com/design/DAFm1Ip-HjA/r_Fic11F5OM33qMmoZiNlA/edit?utm_content=DAFm1Ip-HjA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Description

Il s'agit d'une application qui permet de créer ses propres séance de musculation et donc de suivre son évolution.

### Users

> email : <code>gabrielle</code>
> password : <code>gaby</code>

On a, pour commencer, tout un système d'authentification.
En arrivant sur l'application, on a la possibilité de se connecter ou de s'inscrire. L'inscription ajoute un utilisateur au redux store, et la connexion ajoute l'utilisateur loggé à l'async storage. Afin d'utiliser les données de cet utilisateur stocké dans le storage, on a fait un hook personnalisé (<code>useCurrentUser</code>). Si on souhaite se connecter et que l'utilisateur n'existe pas, on a un message d'erreur. De même si on veut s'inscrire sans avoir renseigné toutes les informations.

Il y a également la possibilité de se déconnecter, qui vient effacer 'lentièreté du de l'asyn storage et redirige vers l'écran de connexion (qui n'est pas accessible si un ustilisateur est connexté). De plus, une fois sur la page de connexion, il est impossible de revnir sur la page précédente. Idem si on est sur la page d'accueil pour éviter de retoruner sur 'écran de connexion alors que l'utilisateur est bien connecté.

Au sein de l'application, de nombreuses actions viennent modifier ou chercher l'utilisateur.

Les actions liées au storage sont dans le dossiers "hooks/asyncStorage".
Pour chercher un programme il faut aller dans la page d'accueil (Home), et cliquer sur la loupe.

### Workouts

Les "workouts" sont donc les séances de sport. Il y a la possibilité de les consulter (dans la page "Home") ainsi que d'en créer à partir de la BottomBar, en cliquant sur le gros bouton plus (+).
Pour l'instant, les workouts sont composés d'une liste d'exercices à réaliser. Dans une seconde version de l'application, nous auront des sets à définir pour chacun de ces exercices (cette fonctionnalité n'étant pas la plus urgente). Nous avons fait en sorte que de le workout s'inscrive dans le storage le temps qu'il soit totalement créé pour mettre à jour le store depuis les données du storage à la fin. De cette manière, on n'a pas de workout sans exercice à l'intérieur.

### Programs

Il s'agit des programmes. Ceux ci sont accessibles seulement en lecture, et nous n'avons pas encore mis la possibilité de faire les séances du programme au sein de l'application. Mais ces changements seront disponibles dans une 2ème version de l'application (à venir, stay tuned).
Dans cette 2ème version, les utilisateurs auront des rôles. Le rôle de "coach" permettra la création et l'édition de programme.

---

Color palette :
DARK :
grey slate
#4e5a65

slate grey:
#364d53

salmon
#ec9374
