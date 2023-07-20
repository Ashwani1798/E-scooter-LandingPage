import {ReactNode} from 'react'

import stl from "./ContainerStyle.module.scss"

 type ContainerProps = {
   children: ReactNode;
 };
const Container = ({children}:ContainerProps) => {
  return (
    <div className={stl.container}>{children}</div>
  )
}

export default Container