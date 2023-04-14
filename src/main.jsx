import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Auth0Provider } from "@auth0/auth0-react"
import "./styles/main.css"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            // Sevi's Auth0
            // domain="dev-bmeasegf8gukc4s5.us.auth0.com"
            // clientId="7nIAfVZw6SOT7IBURLityTeg6CxCuq6w"
            // Maxi's Auth0
            domain="maxizero.us.auth0.com"
            clientId="XaNPXQ2fnjC3C1pYKmydBI1t4jPx8CD4"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>
)
