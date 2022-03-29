import React, {Component} from 'react'
import {Text} from 'react-native'
import * as D from '../data'
import type {FC} from 'react'

export type PersonProps = {


    person: D.IPerson
}



const Person: FC<PersonProps> = ({person}) =>{

    return <Text>{JSON.stringify(person,null,2)}</Text>

}

export default Person