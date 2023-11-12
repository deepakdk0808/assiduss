import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaidIcon from "@mui/icons-material/Paid";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Charts from "./Chart";

const Sidebar = () => {
    const navigate=useNavigate()
   
  return (
    <div className="sidebar">
      <div className="Nav">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            marginLeft: "30px",
          }}
        >
          Assiduss
        </div>
        <div className="profile">
          <div>
            <PersonSearchIcon />
          </div>
          <div>
            <NotificationImportantIcon />
          </div>
          <div>
            <AccountCircleIcon />
          </div>
        </div>
      </div>
      <div className="data-view">
        <div className="list">
          <button onClick={() => navigate("/")}>
            <DashboardIcon
              fontSize="small"
              style={{ position: "absolute", left: "10px", top: "8px" }}
            />
            Dashboard
          </button>
          <button onClick={() => navigate("/")}>
            <MailIcon
              fontSize="small"
              style={{ position: "absolute", left: "10px", top: "8px" }}
            />
            Accounts
          </button>
          <button onClick={() => navigate("/")}>
            <PaidIcon
              fontSize="small"
              style={{ position: "absolute", left: "10px", top: "8px" }}
            />
            Payroll
          </button>
          <button onClick={() => navigate("/")}>
            <AssessmentIcon
              fontSize="small"
              style={{ position: "absolute", left: "10px", top: "8px" }}
            />
            Reports
          </button>
          <button onClick={() => navigate("/")}>
            <InboxIcon
              fontSize="small"
              style={{ position: "absolute", left: "10px", top: "8px" }}
            />
            Advisor
          </button>
          <button onClick={() => navigate("/")}>
            <ContactsIcon
              fontSize="small"
              style={{ position: "absolute", left: "10px", top: "8px" }}
            />
            Contacts
          </button>
        </div>
      </div>
      <div>
        <div className="chart">{<Charts/>}</div>
      </div>
    </div>
  );
};

export default Sidebar;
