import React from 'react'
import styles from '../styles/pages/index.module.scss'
interface IProps {}

const Index: React.FC<IProps> = (props) => {
    return <div className={styles.container}>Welcome to next.js!</div>
}

export default Index
