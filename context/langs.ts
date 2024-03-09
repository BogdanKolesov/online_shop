"use client";
import { Allowedlangs } from "@/constants/lang";
import { createDomain } from "effector";

const lang = createDomain();

export const setLang = lang.createEvent<Allowedlangs>();

export const $lang = lang
  .createStore(Allowedlangs.RU)
  .on(setLang, (_, lang) => lang);
