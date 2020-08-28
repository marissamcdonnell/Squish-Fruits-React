import React from 'react'
import { Link } from 'react-router-dom'
// import { withAppContext } from '../utils/AppContext'
import PropTypes from 'prop-types'
import { data } from '../../data/data'

import styles from './List.module.scss'

const List = () => (
  <div className={styles.container}>
    <div className={styles.side}>
      <ul>
        {data.map((fruit) => (
          <li key={fruit.id}>
            <img id={fruit.id} src={fruit.url} />
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

// List.propTypes = {
//   appContext: PropTypes.object.isRequired,
// }

export default List
