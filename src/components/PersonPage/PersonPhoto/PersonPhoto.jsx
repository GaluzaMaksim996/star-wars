import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setPersonToFavorite, removePersonToFavorite } from '../../../store/actions'

import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

import styles from './PersonPhoto.module.css'

const PersonPhoto = ({
  personId,
  personImg,
  personName,
  personFavorite,
  setPersonFavorite
 }) => {
  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonToFavorite(personId))
      setPersonFavorite(false)
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personImg
        }
      }))
      setPersonFavorite(true)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personImg} alt={personName} />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite} 
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
          alt="Add to favorite" 
        /> 
      </div>

    </>
  )
}

PersonPhoto.propTypes = {
  personId: PropTypes.string,
  personImg: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}

export default PersonPhoto