[Meteor Issue #6793](https://github.com/meteor/meteor/issues/6793)

# To Reproduce
```shell
  git clone https://github.com/ecwyne/TransformingVisitor-Bug
  cd TransformingVisitor-Bug
  meteor run --production
```
Go to localhost:3000 on Chrome 51, open developer console and refresh the page until error occurs and page does not load.

### Update
Error still occurs even when the `twbs:bootstrap` package is removed
