import React from 'react';
import AuthNav from "./auth-nav";
const Header = () => {
    return (
        <header id="header">
			<div className="logo">
				<h1>
					<img src="https://lh3.googleusercontent.com/proxy/h8CpgOzoSZmKP2QRKwJkSEBSt5aQUgDgexTbdubRKBNKFyZMJ13KU2M2sFbmtqfhY0iRHq_fxenBWwfDh19ATalBIGcsZ_y6cLdcHrfG-RTGVozHTw5owFFVzW81eg" alt="Logo" width="70" height="75"/>
				</h1>
				
			</div>
			<AuthNav />
		</header>
    )
}

export default Header

