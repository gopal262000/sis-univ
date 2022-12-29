import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RegistrationFormPreview from "./components/registrationFormPreview";
import ErrorPreview from './components/errorPage'
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            errorElement : <ErrorPreview/>
        },
        {
            path: "/registerPreview",
            element: <RegistrationFormPreview/>

        }
    ]
)


export default router;