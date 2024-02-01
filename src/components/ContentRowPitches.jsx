import SmallCard from "./SmallCard";

function ContentRowPitches(){
    return(
        <div className="row">

        {/* <!-- Pitches in Data Base --> */}
        <SmallCard title="Canchas disponible" color="success" quantity={3} icon="fa-solid fa-futbol" />

        {/* <!-- Pitches --> */}
        <SmallCard title="Canchas alquiladas" color="warning" quantity={3} icon="fa-solid fa-lock" />

        {/* <!-- Usuarios quantity --> */}
        <SmallCard title="Usuarios" color="primary" quantity={3} icon="fa-solid fa-user" />
    </div>
    );
} 
export default ContentRowPitches;
