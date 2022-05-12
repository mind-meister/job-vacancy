import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardLayout from "../Layout/Dasboard/DashboardLayout";
import LandingLayout from "../Layout/Landing/LandingLayout";
import Login from "../Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import JobVacancy from "../Pages/JobVacancy/JobVacancy";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import DashboardChangePassword from "../Pages/Dashboard/changePassword";
import DashboardProfile from "../Pages/Dashboard/Profile";
import DetailHome from "../Pages/Detail-Home/detailHome";
import LowonganList from "../Pages/Dashboard/CRUD/DataList";
import { DataLowonganProvider } from "../Pages/Dashboard/CRUD/DataContext";
import LowonganForm from "../Pages/Dashboard/CRUD/DataForm";
import NotFound from "../Pages/NotFound/notfound";
import FormData from "../Pages/Dashboard/FormData";

function Routes() {

  const LoginRoute = ({ ...props }) => {
    if (Cookies.get("token") === undefined) {
      return <Route {...props} />;
    } else if (Cookies.get("token") !== undefined) {
      return <Redirect to="/dashboard" />;
    }
  };

  const DashboardRoute = ({ ...props }) => {
    if (Cookies.get("token") === undefined) {
      return <Redirect to="/login" />;
    } else if (Cookies.get("token") !== undefined) {
      return <Route {...props} />;
    }
  };

  return (
    <Router>
      <DataLowonganProvider>
      <Switch>

        <Route path={"/"} exact>
          <LandingLayout>
            <Home />
          </LandingLayout>
        </Route>

        <LoginRoute path={"/login"}>
          <LandingLayout>
          <Login />
          </LandingLayout>
        </LoginRoute>
        
        <Route path={"/job-vacancy"} exact>
          <LandingLayout>
            <JobVacancy />
          </LandingLayout>
        </Route>

        <Route path={"/job-vacancy/:slug"} exact>
          <LandingLayout>
            <DetailHome />
          </LandingLayout>
        </Route>


        
        <DashboardRoute path={"/dashboard"} exact>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </DashboardRoute>

        <Route path={"/dashboard/list-job-vacancy"} exact>
          <DashboardLayout>
            <LowonganList />
          </DashboardLayout>
        </Route>

        <Route path={"/dashboard/list-job-vacancy/form"} exact>
          <DashboardLayout>
            <FormData />
          </DashboardLayout>
        </Route>
        <Route path={"/dashboard/list-job-vacancy"} exact>
          <DashboardLayout>
            <LowonganList />
          </DashboardLayout>
        </Route>

        <Route path={"/dashboard/list-job-vacancy/create"} exact>
          <DashboardLayout>
            <LowonganForm />
          </DashboardLayout>
        </Route>

        <Route path={"/dashboard/list-job-vacancy/form/:slug"} exact>
          <DashboardLayout>
            <LowonganForm />
          </DashboardLayout>
        </Route>

        <Route path={"/dashboard/profile"} exact>
          <DashboardLayout>
            <DashboardProfile />
          </DashboardLayout>
        </Route>

        <Route path={"/dashboard/change-password"} exact>
          <DashboardLayout>
            <DashboardChangePassword />
          </DashboardLayout>
        </Route>

        


        <Route path={"*"}>
          <NotFound />
        </Route>

      </Switch>
      </DataLowonganProvider>
    </Router>
  );
}

export default Routes;
