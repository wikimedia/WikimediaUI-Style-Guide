# Questions you may have

## Why do we have a shell script?

Dependencies added with `npm install` do not get committed to the repository because `node_modules/` folder is ignored by `.gitignore`.

If you want the style guide to load such third-party script, you will have to copy the script from its `node_modules/<library_name>` folder to this project's `js/` scripts folder.

This shell script **automates this manual step** of copying one library from its folder to this project `js/` scripts folder.


## When to execute the shell script?

Whenever we update a third-party dependency.

**Note:** It is harmless to run this script. Feel safe to run this script after any `npm install` or `npm update`.


# What you need to know

## When do I add something to the shell script?

When you add a third-party library to the style guide, add a line that copies the required file.


## How to execute the shell script

In your terminal, run:
```
sh build/build.sh
```
