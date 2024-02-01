import SmallCard from "./SmallCard";

function ContentRowPitches(){
    return(
        <div className="row">

        {/* <!-- Movies in Data Base --> */}
        <SmallCard title="Canchas disponible" color="success" quantity={3} icon="fa-solid fa-futbol" />

        {/* <!-- Total awards --> */}
        <SmallCard title="Canchas alquiladas" color="" quantity={3} icon="fa-solid fa-lock" />

        {/* <!-- Actors quantity --> */}
        <SmallCard title="Usuarios" color="primary" quantity={3} icon="fa-solid fa-user" />
    </div>
    );
} 
export default ContentRowPitches;
