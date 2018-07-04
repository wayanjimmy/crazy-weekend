import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";

createConnection()
  .then(async connection => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    const photo = new Photo();
    photo.filename = "test";
    photo.description = "description";
    photo.isPublished = true;
    photo.name = "lengeh";
    photo.views = 100;
    await connection.manager.save(photo);
    console.log("Saved a new photo with id: " + photo.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Loading photos from the database...");
    const photos = await connection.manager.find(Photo);
    console.log("Loaded photos: ", photos);

    const photoRepo = connection.getRepository(Photo);

    const photoToUpdate = await photoRepo.findOne();
    if (photoToUpdate) {
      photoToUpdate.name = "Me, my friends and pinguins";
      await photoRepo.save(photoToUpdate);
    }

    const photoToRemove = await photoRepo.findOne();
    if (photoToRemove) {
      await photoRepo.remove(photoToRemove);
    }

    const metadata = new PhotoMetadata();
    metadata.height = 640;
    metadata.width = 480;
    metadata.compressed = true;
    metadata.comment = "cybershot";
    metadata.orientation = "portrait";
    metadata.photo = photo;

    const metaRepo = connection.getRepository(PhotoMetadata);
    await metaRepo.save(metadata);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch(error => console.log(error));
