import "./style.css";

import CheckinStation from "./pages/CheckinStation";
import { RouteObject, BrowserRouter as Router } from "react-router-dom";
import { Outlet, useRoutes } from "react-router-dom";
import ShowEvent from "./pages/ShowEvent";
import { ListEvents } from "./pages/ListEvents";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <ListEvents />,
      },
      {
        path: "edit",
        element: <ListEvents edit />,
      },
      {
        path: "event/:eid",
        children: [
          { index: true, element: <ShowEvent /> },
          { path: "edit", element: <ShowEvent edit /> },
          { path: "checkin/:sid", element: <CheckinStation /> },
        ],
      },
    ],
  },
];

const App1 = () => {
  return useRoutes(routes);
};
export default function App() {
  return (
    <Router>
      <App1 />
    </Router>
  );
}
