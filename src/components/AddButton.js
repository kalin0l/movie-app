import { useDispatch } from "react-redux"



const AddButton = ({addToFav,id,name,image,genre,runtime,summary}) => {
    const dispatch = useDispatch();
    return <button
    type="button"
    onClick={() =>
      dispatch(
        addToFav(
          id,
          name,
          image.original,
          genre[0],
          runtime,
          summary
        )
      )
    }
  >
    Add to favourites
  </button>
}
export default AddButton