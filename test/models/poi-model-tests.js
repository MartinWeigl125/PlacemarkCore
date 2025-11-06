import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { jahnstadion, testPois, building, footballStadium } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Poi Model tests", () => {

  let build = null;

  setup(async () => {
    db.init("mongo");
    await db.categoryStore.deleteAllCategories();
    await db.poiStore.deleteAllPois();
    build = await db.categoryStore.addCategory(building)
    for (let i = 0; i < testPois.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testPois[i] = await db.poiStore.addPoi(build._id, testPois[i]);
    }
  });

  test("delete all pois", async () => {
    let returnedPois = await db.poiStore.getAllPois();
    assert.equal(returnedPois.length, 3);
    await db.poiStore.deleteAllPois();
    returnedPois = await db.poiStore.getAllPois();
    assert.equal(returnedPois.length, 0);
  });

  test("create and get a poi - success", async () => {
    const football = await db.categoryStore.addCategory(footballStadium);
    const newPoi = await db.poiStore.addPoi(football._id, jahnstadion);
    assert.isNotNull(newPoi._id);
    assertSubset(jahnstadion, newPoi);
    const returnedPoi = await db.poiStore.getPoiById(newPoi._id);
    assert.deepEqual(newPoi, returnedPoi);
  });

  test("get multiple pois", async () => {
    const pois = await db.poiStore.getPoisByCategoryId(build._id);
    assert.equal(pois.length, testPois.length)
  });

  test("update One poi - success", async () => {
    const football = await db.categoryStore.addCategory(footballStadium);
    const poi = await db.poiStore.addPoi(football._id, jahnstadion);
    const updatedPoi = {
      _id: poi._id,
      name: "Jahnstadion Regensburg NEW",
      description: "The football stadium of the local 3rd division team SSV Jahn Regensburg NEW",
      latitude: 49,
      longitude: 12,
      categoryid: football._id,
    }
    await db.poiStore.updatePoi(poi, updatedPoi);
    const returnedPoi = await db.poiStore.getPoiById(poi._id);
    assert.equal(updatedPoi.name, returnedPoi.name);
    assert.equal(updatedPoi.description, returnedPoi.description);
    assert.equal(updatedPoi.latitude, returnedPoi.latitude);
    assert.equal(updatedPoi.longitude, returnedPoi.longitude);
  });

  test("delete One poi - success", async () => {
    await db.poiStore.deletePoiById(testPois[0]._id);
    const returnedPois = await db.poiStore.getAllPois();
    assert.equal(returnedPois.length, testPois.length - 1);
    const deletedPoi = await db.poiStore.getPoiById(testPois[0]._id);
    assert.isNull(deletedPoi);
  });

  test("get a poi - bad params", async () => {
    assert.isNull(await db.poiStore.getPoiById(""));
    assert.isNull(await db.poiStore.getPoiById());
  });

  test("delete One poi - fail", async () => {
    await db.poiStore.deletePoiById("bad-id");
    const allPois = await db.poiStore.getAllPois();
    assert.equal(testPois.length, allPois.length);
  });
});
