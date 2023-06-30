import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="pages">
      <div className="sideNav">
        <NavLink exact activeClassName="active" className="navItem" to="/">Demo Booked</NavLink >
        <NavLink activeClassName="active" className="navItem" to="/democomplete">Demo Completed</NavLink >
        <NavLink activeClassName="active" className="navItem" to="/pricingcall">Pricing Call Booked</NavLink >
        <NavLink activeClassName="active" className="navItem" to="/pricingcallcompleted">Pricing Call Completed</NavLink >
        <NavLink activeClassName="active" className="navItem" to="/jumpstart">Jump Start Booked</NavLink >
        <NavLink activeClassName="active" className="navItem" to="/jumpstartcompleted">Jump Start Completed</NavLink >
        <NavLink activeClassName="active" className="navItem" to="/closeddeal">Closed Deal</NavLink >
      </div>
      <Outlet />
    </div>
  )
};

export default Layout;