# mere-face
`mere-face` is the user interface for the desktop of mere system interface. In other words, interface of your desktop enviromnet that you can easily develop and link with mere system. `mere-shell` will load the configured face while it starts up. 

### Location
`mere-face` usages xdg base directory specifications to organize the face bundle. Locally installed bundled are stored in *~/.local/share/mere/faces* and globally or system wise installed bundled will be in */usr/local/share/mere/faces/*.

### Bundle
`mere-face` bundle is a hierarchical structured directory with the top level directory with a name ends with *.face* extension. Withing this bundle there must be a *manifest* file that contains meta information about the face and a *contents* folder that contains actual interface related resources.

```
├── my-face.face
│   ├── manifest
│   ├── contents
│   │   ├── index.html
|   │   ├── assets
|   │   │   ├── css
|   │   │   │   ├── runner.css
|   │   │   │   └── style.css
|   │   │   ├── img
|   │   │   │   └── logo.png
|   │   │   ├── js
|   │   │   │   ├── channel.js
|   │   │   │   ├── connect.js
|   │   │   │   └── runner.js
|   │   │   └── lib
|   │   │       └── qtwebchannel
|   │   │           └── qwebchannel.js
```


### Create
You can create a face bundle folowing the basic structure shown above, but it is recomneded to use [face client](https://github.com/merelabs/mere-face-cli)
```
mere-face-cli -c my-face.face
```
This will create a skeleton of the bundle in the directory from where the command invoked as my-face.face. Now you can modify the contents of the face and register and use it!

### Install
Again you can easily install your desire faces manually by copying the bundle to the appropriate locations - locally install for a specific user or globally to make it available to all the users of the system..
```
mere-face-cli -i ./my-face.face
```
You can use '-g' flag for global installation.
