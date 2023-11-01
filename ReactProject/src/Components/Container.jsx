import React from 'react'

export default function Container(props) {
  return (
    <>
    <section className='props.class1'>
        <div className='container'>{props.children}</div>
    </section>
    </>
    )
}
