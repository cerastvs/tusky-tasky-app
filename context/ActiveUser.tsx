"use client";

import { createContext } from "react";

type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export const ActiveUser = createContext<User | null>(null);

type Props = {
  children: React.ReactNode;
  user: User | null;
};

export default function ActiveUserProvider({ user, children }: Props) {
  return <ActiveUser.Provider value={user}>{children}</ActiveUser.Provider>;
}
