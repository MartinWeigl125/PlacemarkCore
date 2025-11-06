import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PoiSpec = Joi.object()
  .keys({
    name: Joi.string().example("Jahnstadion Regensburg").required(),
    description: Joi.string().example("The football stadium of the local 3rd division team SSV Jahn Regensburg").allow("").optional(),
    latitude: Joi.number().example(49.015556).required(),
    longitude: Joi.number().example(12.073889).required(),
    categoryid: IdSpec,
  })
  .label("Poi");

export const PoiSpecPlus = PoiSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PoiPlus");

export const PoiAray = Joi.array().items(PoiSpecPlus).label("PoiArray");

export const CategorySpec = Joi.object()
  .keys({
    name: Joi.string().example("football stadium").required(),
    pois: PoiAray,
  })
  .label("Category");

export const CategorySpecPlus = CategorySpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("CategoryPlus");

export const CategoryArray = Joi.array().items(CategorySpecPlus).label("CategoryArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");