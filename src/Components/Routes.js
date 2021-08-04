import Homepage from './HomePage'
import Projects from './Projects'
import Resume from './Resume'
import { Route, Switch } from 'react-router-dom'

export default function Routes(props) {

    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/resume">
                <Resume />
            </Route>
        </Switch>
    )
}
