import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import CodeEditorTemplate from 'renderer/modules/CodeEditor/components/templates/CodeEditor';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={CodeEditorTemplate} />
      </Switch>
    </Router>
  )
}

export default Routes;
