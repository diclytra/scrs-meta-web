import React, { useState, useEffect } from 'react'
import Mark from 'react-markdown'
import css from '../style/view.module.css'

export const Updates = () => {
  let [mark, setMark] = useState('')
  useEffect(() => {
    getFile().then(setMark).catch(console.log)
  }, [])

  return (
    <section className={css.view}>
      <pre>
        <Mark>{mark}</Mark>
      </pre>
    </section>
  )
}

const getFile = async () => {
  let r = await fetch('/markdown/updates.md')
  if (!r.ok) {
    throw new Error(await r.text())
  }
  return await r.text()
}
