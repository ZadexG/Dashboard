import ContentRowPitches from "./ContentRowPitches";
import LastPitchInDB from "./LastPitchInDb";
import UserInDB from "./UsersInDb";
function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row Pitches--> */}
            <ContentRowPitches/>
            {/* <!-- End Pitches in Data Base --> */}


            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Last Pitch in DB --> */}
                <LastPitchInDB/>
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- User in DB --> */}
                <UserInDB/>
            </div>
        </div>
    );
}

export default ContentRowTop;