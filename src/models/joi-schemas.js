import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const PoiSpec = Joi.object()
  .keys({
    name: Joi.string().example("Jahnstadion Regensburg").required(),
    description: Joi.string().example("The football stadium of the local 3rd division team SSV Jahn Regensburg").allow("").optional(),
    latitude: Joi.number().example(49.015556).required(),
    longitude: Joi.number().example(12.073889).required(),
    img: Joi.array().items(Joi.string()).allow("").optional(),
    categoryid: IdSpec.allow("").optional(),
    userid: IdSpec.allow("").optional(),
  })
  .label("Poi");

export const PoiSpecPlus = PoiSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PoiPlus");

export const PoiAray = Joi.array().items(PoiSpecPlus).label("PoiArray");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
  pois: PoiAray,
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const CategorySpec = Joi.object()
  .keys({
    name: Joi.string().example("football stadium").required(),
    pois: PoiAray,
    img: Joi.string().allow("").optional(),
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
    firstName: Joi.string().example("Homer").required(),
    lastName: Joi.string().example("Simpson").required(),
    _id: IdSpec,
  })
  .label("JwtAuth");

export const CommentSpec = Joi.object()
  .keys({
    comment: Joi.string().example("This place is great!").allow("").optional(),
    rating: Joi.number().example(5).required(),
    userid: IdSpec.required(),
    poiid: IdSpec.required(),
  })
  .label("Comment");

export const CommentSpecPlus = CommentSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("CommentPlus");

export const CommentArray = Joi.array().items(CommentSpecPlus).label("CommentArray");

export const ImageSpec = Joi.object()
  .keys({
    img: Joi.string().example("http://res.cloudinary.com/dlhqnloeh/image/upload/v1762425742/w5cd3qrhhjtgl1fbueio.jpg").required(),
  })
  .label("Poi");

export const UserPrivateSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").allow("").optional(), // for github if email is private
    firstName: Joi.string().example("Homer").required(),
    lastName: Joi.string().example("Simpson").allow("").optional(), // for github if name is private
    poiCount: Joi.number().example(0).required()
  })
  .label("UserPrivate");

export const UserPrivateSpecPlus = UserPrivateSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserPrivatePlus");

export const UserPrivateArray = Joi.array().items(UserPrivateSpecPlus).label("UserPrivateArray");