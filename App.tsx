import React from "react"
import 'react-native-gesture-handler';
import { Dispatch, SetStateAction, useState } from 'react';

import {Navigation} from "./src/navigations"

export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page, setPage] = useState(1)
  switch (page) {
    default:
      return <Navigation/>
      break;
  }
}
