import React from "react";
import "./NavigationBarBottom.css";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userId } from "src/user/components/Atom/UserId";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FireIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import PhotoSizeIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

function NavigationBarBottom() {
	const id = useRecoilValue(userId);
	return (
		<div className="navigationbar_bottom">
			<div className="nav_bottom_icons">
				<Link to="/challenge">
					<FireIcon sx={{ fontSize: 30 }} />
				</Link>
			</div>

			<div className="nav_bottom_icons">
				<Link to="/feed">
					<PhotoSizeIcon sx={{ fontSize: 30 }} />
				</Link>
			</div>

			<div className="nav_bottom_icons">
				<Link to="/home">
					<HomeOutlinedIcon sx={{ fontSize: 30 }} />
				</Link>
			</div>

			<div className="nav_bottom_icons">
				<Link to="/shop">
					<LocalMallOutlinedIcon sx={{ fontSize: 30 }} />
				</Link>
			</div>

			<div className="nav_bottom_icons">
				<Link to={`/userpage/${id}`}>
					<PermIdentityOutlinedIcon sx={{ fontSize: 30 }} />
				</Link>
			</div>
		</div>
	);
}

export default NavigationBarBottom;
