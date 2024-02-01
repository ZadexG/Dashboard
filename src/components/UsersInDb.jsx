function UsernInDb() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Acción
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Animación
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Aventura
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Ciencia Ficción
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Comedia
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Documental
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Drama
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Fantasia
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Infantiles
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    Musical
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsernInDb;

// import React from "react";
// import User from "./User";

// class UsersInDb extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             usersList: [],
//             titleMouseOver: false
//         };
//     }

//     componentDidMount() {
//         fetch('http://127.0.0.1:3001/api/users')
//             .then(res => res.json())
//             .then(users => {
//                 this.setState({ usersList: users.data });
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     handleMouseOverTitle = () => {
//         this.setState({ titleMouseOver: !this.state.titleMouseOver });
//     };

//     render() {
//         return (
//             <div className="col-lg-6 mb-4">
//                 <div className="card shadow mb-4">
//                     <div className="card-header py-3">
//                         <h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.handleMouseOverTitle}>Usuarios in Data Base</h5>
//                     </div>
//                     <div className={`card-body ${this.state.titleMouseOver ? 'bg-secondary' : ''}`}>
//                         <div className="row">
//                             {this.state.usersList.map((user, index) =>
//                                 <User name={user.name} key={index} />
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default UsersInDb;