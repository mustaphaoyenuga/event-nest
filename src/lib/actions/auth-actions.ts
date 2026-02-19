"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

export const signUp = async (email: string, password: string, name: string) => {
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      callbackURL: "/dashboard",
    },
  });
  return data;
};

export const signIn = async (email: string, password: string) => {
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: "/dashboard",
    },
    headers: await headers(),
  });
  return data;
};

export const signOut = async () => {
  const data = await auth.api.signOut({
    headers: await headers(),
  });
  return data;
};
