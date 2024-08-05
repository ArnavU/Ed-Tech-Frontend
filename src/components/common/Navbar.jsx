import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import navbarLinks from "../../data/navbarLinks";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { SlArrowDown } from "react-icons/sl";
import toast from "react-hot-toast";
import { setLoading } from '../../redux/slices/authSlice'
import { getAllCategories } from '../../services/operations/otherServices'
import { getCurrentUser } from '../../services/operations/profileServices'

const Navbar = () => {
	const { token, loading } = useSelector((state) => state.auth);
	const { user } = useSelector((state) => state.profile);
	const { cartItemsCount } = useSelector((state) => state.cart);
	const [loading2, setLoading2] = useState(true);
	const location = useLocation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [catalogs, setCatalogs] = useState([]);

	useEffect(() => {
		const fetchCatalog = async () => {
			const toastId = toast.loading("Loading Backend ...");
			const result = await getAllCategories();
			if (result) {
				setCatalogs(result);
			} else {
				toast.error("Failed to load backend");
			}
			toast.dismiss(toastId);
			setLoading2(false);
		};
		fetchCatalog();
	}, []);

	useEffect(() => {
		const getCurrentUserDetails = async () => {
			dispatch(setLoading(true));
			if (token) {
				await getCurrentUser(token, dispatch, navigate);
			}
			dispatch(setLoading(false));
		};
		getCurrentUserDetails();
	}, [token, dispatch, navigate]);

	const matchRoute = (route) => {
		return matchPath({ path: route }, location.pathname);
	};

	return (
		<div className="mainContainer h-14 border-b border-richblack-700 flex items-center justify-center">
			<div className="innerContainer flex flex-row w-11/12 max-w-maxContent items-center justify-between">
				{/* logo */}
				<div className="logoContainer">
					<img
						src={logo}
						alt="logoImg"
						loading="lazy"
						width={160}
						height={32}
					/>
				</div>

				{/* Nav links */}
				<nav className="flex flex-row text-richblack-50 w-fit items-center justify-center">
					<ul className="flex flex-row items-center justify-center gap-3">
						{navbarLinks.map((link, index) => (
							<li key={index} className="">
								{link.path ? (
									<div
										className={`${
											matchRoute(link.path)
												? "text-yellow-25"
												: ""
										}`}
									>
										<Link to={link.path}>{link.title}</Link>
									</div>
								) : (
									<div className="flex items-center gap-1 group cursor-pointer relative ">
										<p>{link.title}</p>
										<SlArrowDown className="translate-y-[1px]" />

										<div className="z-10 absolute top-[50%] translate-y-[3em] left-[50%] translate-x-[-50%] flex flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 transition-all duration-150 w-[200px]  lg:w-[300px] invisible  opacity-0  group-hover:visible group-hover:opacity-100 group-hover:translate-y-[1.65em]">
											<div className="absolute h-6 w-6 top-0 translate-y-[-40%] select-none  left-[50%] translate-x-[80%] rotate-45 rounded bg-richblack-5"></div>

											{catalogs.length ? (
												<div className="flex flex-col capitalize">
													{catalogs.map(
														(catalog, index) => (
															<Link
																to={`/categorycourses/${catalog.name
																	.split(" ")
																	.join(
																		"-"
																	)}`}
																key={index}
															>
																<p className="hover:bg-richblack-50 rounded-lg py-3 pl-4">
																	{
																		catalog.name
																	}
																</p>
															</Link>
														)
													)}
												</div>
											) : (
												<div className="select-none cursor-not-allowed">
													No Catalog Available
												</div>
											)}
										</div>
									</div>
								)}
							</li>
						))}
					</ul>
				</nav>

				{/* Login / SignUp / DashBoard / Cart */}
				<div className="hidden md:flex gap-x-4 items-center">
					{(loading || loading2) && (
						<div className="text-white font-bold">Loading ...</div>
					)}
					{token === null && (
						<Link to={"/login"}>
							<button className="border border-richblack-700 bg-richblack-800 text-richblack-100 rounded-md px-3 py-2">
								Log in
							</button>
						</Link>
					)}

					{token === null && (
						<Link to={"/signup"}>
							<button className="border border-richblack-700 bg-richblack-800 text-richblack-100 rounded-md px-3 py-2">
								Sign Up
							</button>
						</Link>
					)}

					{user && user?.accountType === "Student" && (
						<Link to={"/dashboard/cart"} className="relative">
							<AiOutlineShoppingCart className="text-2xl text-richblack-100" />
							{cartItemsCount > 0 && (
								<span className="absolute text-yellow-100 text-center text-xs font-bold bg-richblack-600 h-5 w-5 -bottom-2 -right-2 grid place-items-center rounded-full">
									{cartItemsCount}
								</span>
							)}
						</Link>
					)}

					{token !== null && <ProfileDropDown />}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
