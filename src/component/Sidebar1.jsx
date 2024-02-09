import React from "react";
import { Sidebar, SubMenu } from "react-pro-sidebar";
import { MenuItem } from "react-pro-sidebar";
import { Menu } from "react-pro-sidebar";
import GridViewIcon from "@mui/icons-material/GridView";
import GroupsIcon from "@mui/icons-material/Groups";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
const Sidebar1 = () => {
  return (
    <div>
      <Sidebar
        className="app"
        style={{
          float: "left",
          height: "100vh",
          backgroundColor: "blueviolet",
          boxShadow:"8px 4px 20px #231F20", 
          marginTop:"1%"
        }}
      >
        <Menu>
          <MenuItem icon={<GridViewIcon />}> Dashboard </MenuItem>
          <MenuItem icon={<GroupsIcon />}> Leads </MenuItem>
          <MenuItem icon={<BuildCircleIcon />}>Buyers</MenuItem>
          <MenuItem icon={<PersonIcon />}>clients</MenuItem>
          <MenuItem icon={<ApartmentIcon />}>Properties</MenuItem>
          <SubMenu label="Orders" icon={<AssignmentIcon />}>
            <MenuItem>Transaction</MenuItem>
            <br></br>
            <MenuItem>Non Transactional</MenuItem>
          </SubMenu>
          <MenuItem icon={<WhatshotIcon />}>Red Box</MenuItem>
          <MenuItem icon={<PhoneCallbackIcon />}>call Back</MenuItem>
          <MenuItem icon={<SavingsIcon />}>investments</MenuItem>
          <MenuItem icon={<AccountBalanceWalletIcon />}> Payments</MenuItem>
          <SubMenu label="Loan" icon={<AssuredWorkloadIcon />}>
            <MenuItem> Lap</MenuItem>
            <MenuItem>Home Loan</MenuItem>
          </SubMenu>
          <MenuItem icon={<AutoAwesomeIcon />}> MAGIK</MenuItem>
          <SubMenu label="ST" icon={<BubbleChartIcon />}>
            <MenuItem>ST Clients</MenuItem>
            <MenuItem>ST Properties</MenuItem>
            <MenuItem>ST Cases</MenuItem>
          </SubMenu>
          <SubMenu label="Primary Sale" icon={<HomeWorkIcon />}>
            <MenuItem>Builders</MenuItem>
            <MenuItem>Properties</MenuItem>
            <MenuItem>Transactional Orders</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default Sidebar1;
