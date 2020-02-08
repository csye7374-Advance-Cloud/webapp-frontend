# webapp-frontend

## Team Information

| Name | NEU ID | Email Address |
| --- | --- | --- |
|Jagmandeep Kaur | 001426439|kaur.j@husky.neu.edu |  | | |
|Mayank Barua| 001475187| barua.m@husky.neu.edu|
|Yogita Patil| 001435442|patil.yo@husky.neu.edu |
|Prajesh Jain| 001409343| Jain.pra@husky.neu.edu|


## Docker Build Instructions

Open terminal and run the following commands :

To pull the image from the registry with tagname

```bash
$ docker pull registryname:tagName
```

To run image 

```bash
$ docker run --network=host -it -p 4000:4000 registryName:tagName
```
