[Meteor Issue #6793](https://github.com/meteor/meteor/issues/6793)

# Update
With the help of [MDG](https://github.com/meteor/meteor/issues/6793#issuecomment-227606218) I have been able to add a simple fix as of https://github.com/ecwyne/TransformingVisitor-Bug/commit/717cc7126064eddd3de95c53cddd06b9afd26f5f

# To Reproduce
```shell
  git clone https://github.com/ecwyne/TransformingVisitor-Bug
  git checkout d61ae8e
  cd TransformingVisitor-Bug
  meteor run --production
```
Go to localhost:3000 on Chrome 51, open developer console and refresh the page until error occurs and page does not load.

### Update
Error still occurs even when the `twbs:bootstrap` package is removed
