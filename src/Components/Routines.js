//UTILIZED FLASHCARD EXERRCISE AS A GUIDE FOR THIS SECTION
import React, {Component} from 'react'
import axios from 'axios'
import { ROUTINES_URL } from '../constants'

class Routines extends Component {
    state = {
        routines: []
    }

    componentDidMount() {
        axios.get(ROUTINES_URL)
        .then(response => this.setState({ routines: response.data.routines }))
    }


    render () {
        let routines = this.state.routines
        return(
            <div>
                {
                    routines.map((currentRoutine, currentIndex) => {
                        return <li key={currentIndex}>{currentRoutine.title}</li>
                    })
                }
            </div>
            // STILL MISSING "C" IN CR(UD) FOR THIS ASSIGNMENT
        )
    }
}

export default Routines