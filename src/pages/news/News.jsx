import React from 'react'
import Accordion from './Accordion'

export default function News() {
  return (
    <div>
      <Accordion>
                <Accordion.Header>Title Accordion 1</Accordion.Header>
                <Accordion.Content>Text Accordion 1</Accordion.Content>
            </Accordion>
    </div>
  )
}
