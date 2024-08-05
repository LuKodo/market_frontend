import { render } from 'preact'
import { App } from './app.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/main.css'

render(<App />, document.getElementById('app')!)