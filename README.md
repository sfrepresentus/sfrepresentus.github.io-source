## Represent Us SF Website
Homepage for the San Francisco chapter of [Represent.Us](https://www.represent.us)  

#### Development
Build using vuepress on node. Hosted on github pages. Fork the repo, make changes, and submit a pull request.

##### Dev Notes
- The homepage uses a custom layout based on the default vuepress home.
- I copied the template to custom-home.vue and a few dependencies.
- This was so that I could make changes without ejecting the home template so as not to miss out on future updates.


#### Deployment
```
$ npm run src:dev     # to run development server
$ npm run src:build   # to build files to .vuepress/dist
$ ./deploy.sh     # to deploy files to github pages
```

#### Attributions
- built with [vuepress](https://vuepress.vuejs.org/)
- hosted on [github](https://github.com/) pages
- logo based on work from flikr user [
PMell2293
](https://www.flickr.com/photos/melling2293/6114735751)

