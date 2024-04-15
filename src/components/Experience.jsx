import React from "react";

function Experience(){
    return <div id="exp">
        <h1 className="expTitle">Experience</h1>

        <div className="exp-container">
            <div className="cards">
                <div className="card activeCard">
                    <h2 className="jobTitle">WEB DESIGNER</h2>
                    <p className="jobCompany">GÖRSENTAM</p>
                    <p className="jobYear">2022 - 2023</p>
                </div>
                <div className="card">
                    <h2 className="jobTitle">WEB DESIGNER</h2>
                    <p className="jobCompany">GÖRSENTAM</p>
                    <p className="jobYear">2022 - 2023</p>
                </div>

            </div>

            <div className="jobDetails">
                <div className="details">
                    <p className="detailText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam. Euismod quis viverra nibh cras pulvinar mattis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.</p>
                    <ul className="detailList">
                        <li><img className="listItemIcon" alt="listItemIcon" src="assets/images/Union.png"></img>aaaaaaaaaaaaaaaaaaaaaa</li>
                        <li><img className="listItemIcon" alt="listItemIcon" src="assets/images/Union.png"></img>aaaaaaaaaaaaaaaaaaaaaa</li>
                        <li><img className="listItemIcon" alt="listItemIcon" src="assets/images/Union.png"></img>aaaaaaaaaaaaaaaaaaaaaa</li>
                    </ul>
                </div>
            </div>
            
        </div>

    </div>
}

export default Experience;