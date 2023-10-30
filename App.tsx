import React from "react"
import 'react-native-gesture-handler';
import { Dispatch, SetStateAction, useState } from 'react';

import {Navigation} from "./src/navigations"
import { AuthProvider } from "./src/contexts/auth";

export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page, setPage] = useState(1)
  switch (page) {
    default:
      return (
        <AuthProvider>
          <Navigation/>
        </AuthProvider>
      )
      break;
  }
}
