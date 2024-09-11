import React from 'react'
import MaerskLogo from "../../assets/Maersk-Logo.png";
import MSCLogo from "../../assets/MSC-Logo.png";
import EvergreenLogo from "../../assets/Evergreen-Logo.png";
import HapagLogo from "../../assets/Hapag-Logo.png";
import CMACMGLogo from "../../assets/CMA-CMG-Logo.png";


import "./TrustedByCompanies.css";
const TrustedByCompanies = () => {
    return (
        <>
            <div className=" trusted">
                    <h2>Trusted By Companies including</h2>
                    <p>At Sailors wave  Shipment Pvt Ltd, our clients are at the heart of everything we do. Established in 2022, we have built a reputation for delivering exceptional service and value to a diverse clientele across the globe.</p>
                        <div className="trusted-list-con">
                            <div className="trusted-list-sub-con">
                                <img src={MaerskLogo}  />
                            </div>
                            <div className="trusted-list-sub-con">
                                <img src={MSCLogo}  />

                            </div>
                            <div className="trusted-list-sub-con">
                                <img src={EvergreenLogo}  />

                            </div>
                            <div className="trusted-list-sub-con">
                                <img src={HapagLogo}  />

                            </div>
                            <div className="trusted-list-sub-con">
                                <img src={CMACMGLogo} />
                            </div>
                    </div>
            </div>
        </>
    )
}

export default TrustedByCompanies
