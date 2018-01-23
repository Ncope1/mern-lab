//utilized flashcard container exercise as a guide

import react from 'react'
import RoutineDetails from './RoutineDetails'
import axios from 'axios'
import { ROUTINES_URL} from '../constants'

class Routines extends Component {
    state = {
        routines: []
    }

    render () {
        return(
            <div>
                <p>This Routine Is Tha BOMB!!!!</p>
            </div>
        )
    }
}

export default Routines