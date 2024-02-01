import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Pitch from "./Pitch";


function ContentWrapper() {
	return (
		<>
			{/* <!-- Main Content --> */}
			<div id="content">

				{/* <!-- Topbar --> */}
				<TopBar />
				{/* <!-- End of Topbar --> */}

				{/* <!-- Content Row Top --> */}
				<ContentRowTop />
				{/* <!--End Content Row Top--> */}
				<Pitch/>
			</div>
			{/* <!-- End of MainContent --> */}
		</>


	);
}

export default ContentWrapper;