<h1 style="text-align: center">cat-or-penguin</h1>

### Run locally on your machine

You need to have installed Node and NPM.

Clone this repository
``` shell
git clone https://github.com/btholt/cat-or-penguin.git
```

Install dependencies
``` shell
npm install
```

Start NodeJS server at http://localhost:3000
``` shell
npm start
```

For Nodemon usage
``` shell
nodemon ./bin/www
```

### Environment

The animal used will be determined by what the `ANIMAL` environment variable is. By default, the animal will be a cat. If `ANIMAL` is set to `penguin`, then a penguin flipper will be used instead.

### Credits

Thank you to the person I forked this from: gtsopour@gmail.com. 

Image credits:
[Penguin flipper](https://ejphoto.com/images_FK/FK_KingPenguin40.jpg)