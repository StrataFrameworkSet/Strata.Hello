import './index.css';
import {IApplication} from 'strata.client.core/Main';
import {HelloWorldApplication} from "strata.hello.client/Main/HelloWorldApplication";
import reportWebVitals from './reportWebVitals';

const application: IApplication = new HelloWorldApplication();

application.start();
reportWebVitals();
