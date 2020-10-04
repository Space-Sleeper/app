import React from "react"
import Icon from '@mdi/react'

// import Title from "../components/Title.js";
import {
  CardContent,
  IconButton,
  Card,
} from 'ui-neumorphism'

import {
  mdiChevronRight
} from '@mdi/js'

import Styles from './Sleep.module.css'

export default function SleepPage(props) {
  return (
  	// const {value} = props.data;
  	<div className={Styles.container}>
	  	<Card className={Styles.score}>
	  		<CardContent className={Styles.scoreValue}>
	  			89
	  		</CardContent>
      </Card>
      <div className={Styles.diffWrapper}>
        <div className={Styles.diffLabel}>
          Compared to yesterday
        </div>
        <div className={Styles.diffValue}>
          <span className={Styles.diffArrow}>↓</span>
          10 points
        </div>
      </div>
      <div className={Styles.aveWrapper}>
        <div className={Styles.ave}>
          Avarage Score
        </div>
        <div className={Styles.aveValue}>
          90
        </div>
      </div>
      <div className={Styles.dataWrapper}>
        <div  className={Styles.data}>
          Past Data
        </div>
        <div className={Styles.button}>
         <IconButton rounded text={false} size='small'>
          <Icon path={mdiChevronRight} size={0.8} />
        </IconButton>
        </div>
      </div>
</div>
  )
}
