import PitchList from "./PitchList";

const pitches = [
    {
        id: 1,
        title: 'Cancha',
        player: 2,
        length: 4,
    },
    {
        id: 2,
        title: 'Cancha2',
        player: 4,
        length: 6,
    }
];

function Pitch() {
    return (
        <>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">All Pitches in the Database</h1>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Player</th>
                                    <th>Duración</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pitches.map((pitch, index) =>
                                    <PitchList  {...pitch} key={index} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pitch;