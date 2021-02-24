# mere-face
What is a **face**? - well, a face is just a fancy name of a user interface bundle. that `mere-shell` can load as desktop interface.

### Bundle
`mere-face` bundle is a structured directory hirerachy with the top level directory with a name ends with *.face* extension. There must be a file named as *index.face* that contains meta information about the face and a *contents* that contains actual interface related resources.

```
mere-deafault.face/
                  /manifest
                  /contents
                           /index.html
                           /assets/
                                  /js
                                  /css
                                  /img
                                  /etc...
                  

index.face is a key-value pair meta file containing following informaiton.
face=1.0  
uuid=
name=
note=
base=contents
```

### Create
```
mere-face -c my-custom-face
```
above command will create a skeleton of te bundle in the directory from where the command invoked as my-custom-face.face. Now you can modify the contents of the face and register and use it!

### Install
```
mere-face -i my-custom-face
```
