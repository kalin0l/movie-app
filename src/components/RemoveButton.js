


const RemoveButton = ({_id,id,remove}) => {
  
    return <button
    onClick={() => remove(_id,id)}
    type="button"
    className="remove-btn"
  >
    Remove from favourites
  </button>
}
export default RemoveButton;