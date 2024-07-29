import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}




export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
    className="border-2 border-teal-400 w-full p-3  flex justify-between items-center  hover:bg-teal-400 hover:text-white"
    onClick={()=> dispatch({type: 'add-item', payload: {item} } )}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
