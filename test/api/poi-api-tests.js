import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, jahnstadion, testPois, building, footballStadium } from "../fixtures.js";

const pois = new Array(testPois.length);

suite("Poi API tests", () => {
  let user = null;
  let build = null;

  setup(async () => {
    placemarkService.clearAuth();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate({ email: maggie.email, password: maggie.password });
    await placemarkService.deleteAllCategories();
    await placemarkService.deleteAllPois();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate({ email: maggie.email, password: maggie.password });
    build = await placemarkService.createCategory(building);
    for (let i = 0; i < testPois.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      pois[i] = await placemarkService.createPoi(build._id, testPois[i]);
    }
  });
  teardown(async () => {});

  test("create and update a poi", async () => {
    const football = await placemarkService.createCategory(footballStadium);
    let newPoi = await placemarkService.createPoi(football._id, jahnstadion);
    assertSubset(jahnstadion, newPoi);
    assert.isDefined(newPoi._id);
    const updatedPoi = {
      name: "Jahnstadion Regensburg NEW",
      description: "The football stadium of the local 3rd division team SSV Jahn Regensburg NEW",
      latitude: 49,
      longitude: 12,
    }
    await placemarkService.updatePoi(newPoi._id, updatedPoi);
    newPoi = await placemarkService.getPoi(newPoi._id);
    assertSubset(newPoi, updatedPoi);
  });

  test("delete all pois", async () => {
    let returnedPois = await placemarkService.getAllPois();
    assert.equal(returnedPois.length, 3);
    await placemarkService.deleteAllPois();
    returnedPois = await placemarkService.getAllPois();
    assert.equal(returnedPois.length, 0);
  });

  test("get a poi", async () => {
    const returnedPoi = await placemarkService.getPoi(pois[0]._id);
    assert.deepEqual(pois[0], returnedPoi);
  });

  test("get a poi - bad id", async () => {
    try {
      const returnedPoi = await placemarkService.getPoi("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No poi with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });

  test("get a poi - deleted poi", async () => {
    await placemarkService.deletePoi(pois[0]._id);
    try {
      const returnedPoi = await placemarkService.getPoi(pois[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No poi with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
});