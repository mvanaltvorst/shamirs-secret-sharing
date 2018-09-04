# Shamir's Secret Sharer
This is a demo of Shamir's Secret Sharing algorithm. This is an algorithm that
allows you to convert a secret into different fragments. You only need a selection of these
fragments to reconstruct the original secret.

## Building
```
git clone https://github.com/mvanaltvorst/shamirs-secret-sharing.git
cd shamirs-secret-sharing
npm install
webpack --mode=production
```
The resulting files will be located in the `dist/` directory.

## Web GUI

<img src="https://github.com/mvanaltvorst/shamirs-secret-sharing/blob/master/demo.png?raw=true" width=500>
