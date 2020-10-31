import React, { Component } from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import {sections} from './directory-data'

export class Directory extends Component {
    constructor(){
        super();
        this.state={
            sections
        }
    }
    render() {
        return (
            <div className="directory-menu">
                 {this.state.sections.map(({id, ...OtherSectionProps})=>(
                     <MenuItem 
                        key={id}
                        {...OtherSectionProps}
                        />
                 ))}
            </div> 
        )
    }
}

export default Directory


