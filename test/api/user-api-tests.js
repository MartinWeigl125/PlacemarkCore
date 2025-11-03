import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, testUsers } from "../fixtures.js";
import { db } from "../../src/models/db.js";

const users = new Array(testUsers.length);

suite("User API tests", () => {
  setup(async () => {
    placemarkService.clearAuth();
    await placemarkService.createUser(maggie);
    await placemarkService.authenticate({ email: maggie.email, password: maggie.password });
    await placemarkService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await placemarkService.createUser(testUsers[i]);
    }
    await placemarkService.createUser(maggie);
    await placemarkService.authenticate({ email: maggie.email, password: maggie.password });
  });
  teardown(async () => {});

  test("create and update a user", async () => {
    let newUser = await placemarkService.createUser(maggie);
    assertSubset(maggie, newUser);
    assert.isDefined(newUser._id);
    const updatedUser = {
      firstName: "New Maggie",
      lastName: "New Simpson",
      email: "newmaggie@newsimpson.com",
      password: "newsecret",
    }
    await placemarkService.updateUser(newUser._id, updatedUser);
    newUser = await placemarkService.getUser(newUser._id);
    assertSubset(newUser, updatedUser);
  });

  test("delete all user", async () => {
    let returnedUsers = await placemarkService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await placemarkService.deleteAllUsers();
    await placemarkService.createUser(maggie);
    await placemarkService.authenticate({ email: maggie.email, password: maggie.password });
    returnedUsers = await placemarkService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user", async () => {
    const returnedUser = await placemarkService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("get a user - bad id", async () => {
    try {
      const returnedUser = await placemarkService.getUser("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });

  test("get a user - deleted user", async () => {
    await placemarkService.deleteUser(users[0]._id);
    await placemarkService.createUser(maggie);
    await placemarkService.authenticate({ email: maggie.email, password: maggie.password });
    try {
      const returnedUser = await placemarkService.getUser(users[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
});