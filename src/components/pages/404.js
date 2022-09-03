import { Helmet } from "react-helmet";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return(
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                    />
                <title>Error page</title>
            </Helmet>
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'color': '#9F0013', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
        </div>
    )
}

export default Page404;