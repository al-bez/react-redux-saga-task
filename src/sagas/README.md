# To consider if project would scale

If the project were to scale up to the point were it wouldn't only be about "posts", then we should put all posts related sagas in their own folder and name them respectively if necessary.

We could leave the selectors, and maybe the index in same place, depending on the case.

# About Naming Conventions

Some thoughts about this subject:
- End the file name with Saga, just to make it easier to know what it is if file is open by just looking at the file name, this also avoids name collisions which cause confusion.
- Considreing settings is part of "posts" we could actually have that inside the same *postsSaga* depending on the case, at this point we only have get calls in there, so we could actually name it *getSaga* if it was inside a "posts" folder.
- We could also split the generators inside the postsSaga into their own files if we see fit, as we might at some point have more complex logic related to each, and we could have more api calls related generators such as for PUT, POST, DELETE, PATCH. So here we would end up with *postsSaga*, *commentsSaga*, and the *settingsSaga*

It all depends on how much we expect the project to grow, so we decide which path to take regarding the project's structure.