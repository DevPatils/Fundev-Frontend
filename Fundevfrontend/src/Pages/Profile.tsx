import axios from "axios";
import { useEffect, useState } from "react";
import { Startup } from "./Invest";  // Ensure the type is correctly imported or defined
// import { Patent } from "../Components/PatentList";  // Ensure the type is correctly imported or defined
import TopNavbar from "../Components/TopNavbar";
import BottomNavbar from "../Components/BottomNavbar";
import Footer from "../Components/Footer";
import { Patent } from "../Components/PatentList";

export interface Investment {
    id: number;
    amount: number;
    date: string;
    startupId: number;
    userId: number | null;
    investorId: number;
    startup: Startup;
}

const Profile = () => {
    const userType = localStorage.getItem("userType");
    const [error, setError] = useState("");
    const [startups, setStartups] = useState<Startup[]>([]);
    const [patents, setPatents] = useState<Patent[]>([]);
    const [investments, setInvestments] = useState<Investment[]>([]);
    const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null); // State for the selected startup
    const token = localStorage.getItem("token");

    const fetchStartups = async () => {
        try {
            const response = await axios.get(
                "https://fundev-backend.onrender.com/api/startup/get-my-startups",
                {
                    headers: { "auth-token": token },
                }
            );
            setStartups(response.data.startups);
        } catch (error) {
            console.log(error);
            setError("Failed to fetch startups. Please try again later.");
        }
    };

    const fetchPatents = async () => {
        try {
            const response = await axios.get(
                "https://fundev-backend.onrender.com/api/patent/get-my-patents",
                {
                    headers: { "auth-token": token },
                }
            );
            setPatents(response.data.patents);
        } catch (error) {
            console.log(error);
            setError("Failed to fetch patents. Please try again later.");
        }
    };

    const fetchInvestments = async () => {
        try {
            const response = await axios.get(
                "https://fundev-backend.onrender.com/api/investment/get-my-investments",
                {
                    headers: { "auth-token": token },
                }
            );
            setInvestments(response.data.investments);
        } catch (error) {
            console.log(error);
            setError("Failed to fetch investments. Please try again later.");
        }
    };

    useEffect(() => {
        fetchStartups();
        fetchPatents();
        if (userType === "investor") {
            fetchInvestments();
        }
    }, [token]);

    const handleStartupClick = (startup: Startup) => {
        setSelectedStartup(startup); // Set the selected startup to display in the card
    };

    const closeCard = () => {
        setSelectedStartup(null); // Close the card by setting selectedStartup to null
    };

    return (
        <>
            <TopNavbar />
            <BottomNavbar />
            <div className="container mx-auto p-4">

                <h1 className="text-2xl font-bold mb-4">Profile</h1>

                {error && <p className="text-red-500">{error}</p>}
                {startups.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">My Startups</h2>
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border">Name</th>
                                    <th className="py-2 px-4 border">Industry</th>
                                    <th className="py-2 px-4 border">Funding Goal</th>
                                    <th className="py-2 px-4 border">Raised Amount</th>
                                    <th className="py-2 px-4 border">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {startups.map((startup) => (
                                    <tr key={startup.id} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{startup.name}</td>
                                        <td className="py-2 px-4 border">{startup.industry}</td>
                                        <td className="py-2 px-4 border">${startup.fundingGoal.toLocaleString()}</td>
                                        <td className="py-2 px-4 border">${startup.raisedAmount.toLocaleString()}</td>
                                        <td className="py-2 px-4 border">{new Date(startup.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {/* Patents Table */}
                {patents.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">My Patents</h2>
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border">Title</th>
                                    <th className="py-2 px-4 border">Inventor Name</th>
                                    <th className="py-2 px-4 border">Filing Date</th>
                                    <th className="py-2 px-4 border">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patents.map((patent) => (
                                    <tr key={patent.id} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{patent.title}</td>
                                        <td className="py-2 px-4 border">{patent.inventorName}</td>
                                        <td className="py-2 px-4 border">
                                            {new Date(patent.filingDate).toLocaleDateString()}
                                        </td>
                                        <td className="py-2 px-4 border">
                                            {patent.status ? patent.status : "N/A"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Investments Table */}
                {investments.length > 0 && (
                    <div>
                        <h2 className="text-xl font-bold mb-2">My Investments</h2>
                        <table className="min-w-full bg-white border border-gray-300 mb-8">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border">Startup Name</th>
                                    <th className="py-2 px-4 border">Amount Invested</th>
                                    <th className="py-2 px-4 border">Investment Date</th>
                                    <th className="py-2 px-4 border">Industry</th>
                                    <th className="py-2 px-4 border">Funding Goal</th>
                                    <th className="py-2 px-4 border">Raised Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {investments.map((investment) => (
                                    <tr
                                        key={investment.id}
                                        className="hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleStartupClick(investment.startup)} // Click to show startup details
                                    >
                                        <td className="py-2 px-4 border">
                                            {investment.startup.name}
                                        </td>
                                        <td className="py-2 px-4 border">${investment.amount}</td>
                                        <td className="py-2 px-4 border">
                                            {new Date(investment.date).toLocaleDateString()}
                                        </td>
                                        <td className="py-2 px-4 border">
                                            {investment.startup.industry}
                                        </td>
                                        <td className="py-2 px-4 border">
                                            ${investment.startup.fundingGoal}
                                        </td>
                                        <td className="py-2 px-4 border">
                                            ${investment.startup.raisedAmount}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Modal Card for Startup Details */}
                        {selectedStartup && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                                    <h3 className="text-xl font-bold mb-4">
                                        {selectedStartup.name}
                                    </h3>
                                    <p className="mb-2">
                                        <strong>Description: </strong> {selectedStartup.description}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Industry: </strong> {selectedStartup.industry}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Funding Goal: </strong> ${selectedStartup.fundingGoal}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Raised Amount: </strong> ${selectedStartup.raisedAmount}
                                    </p>
                                    <p className="mb-2">
                                        <strong>Created At: </strong>{" "}
                                        {new Date(selectedStartup.createdAt).toLocaleDateString()}
                                    </p>
                                    <p className="mb-4">
                                        <strong>Updated At: </strong>{" "}
                                        {new Date(selectedStartup.updatedAt).toLocaleDateString()}
                                    </p>
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                        onClick={closeCard}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

            </div>
            <div className="absolute bottom-0 left-0 right-0">

                <Footer />
            </div>
        </>
    );
};

export default Profile;
