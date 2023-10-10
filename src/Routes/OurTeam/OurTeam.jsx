import { useState } from "react";
import Team from "../../Pages/Team/Team";


const OurTeam = () => {

    const [members, setMembers] = useState([]);

    fetch('/about.json')
        .then(res => res.json())
        .then(data => setMembers(data))

    return (
        <div className="w-[80%] mx-auto mb-20">
            <h2 className="text-center text-5xl text-semibold mt-12 mb-6">Lets Meet Our Team.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    members.map(member => <Team key={member.id} member={member}></Team>)
                }
            </div>
        </div>
    );
};

export default OurTeam;