import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx'; // Importing XLSX for Excel export

const AdminApplicationsPage = () => {
    const [applications, setApplications] = useState([]); // Initialize state to an empty array
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/applications`);
            const data = await response.json();

            console.log('Fetched Applications:', data); // Debugging

            if (Array.isArray(data)) {
                setApplications(data); // Set applications if data is an array
            } else {
                console.error('API did not return an array');
                throw new Error('API did not return an array');
            }
        } catch (error) {
            console.error('Error fetching applications:', error);
            setError('Failed to fetch applications. Please try again.');
        }
    };

    const exportToExcel = () => {
        if (applications.length === 0) {
            alert('No data available to export.');
            return;
        }

        const worksheet = XLSX.utils.json_to_sheet(applications); // Convert JSON to worksheet
        const workbook = XLSX.utils.book_new(); // Create a new workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications'); // Add worksheet to workbook
        XLSX.writeFile(workbook, 'ApplicationsData.xlsx'); // Download Excel file
    };

    return (
        <div className="container mx-auto p-4 bg-[#F6F6F2] min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-[#2b6777] text-center">Applications</h1>
            <div className="mb-4 text-center">
                <button
                    onClick={exportToExcel}
                    className="px-4 py-2 bg-[#2b6777] text-white font-semibold rounded-lg hover:bg-[#388087] transition"
                >
                    Export to Excel
                </button>
            </div>
            {error ? (
                <div className="text-red-500 text-center">{error}</div>
            ) : (
                <div className="overflow-auto max-h-[500px] border border-[#388087] rounded-lg">
                    <table className="table-auto w-full bg-white rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-[#BADFE7] text-[#2b6777] sticky top-0">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Father's Name</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Address</th>
                                <th className="px-4 py-2">ID Proof</th>
                                <th className="px-4 py-2">Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.length > 0 ? (
                                applications.map((app) => (
                                    <tr key={app._id} className="border-b hover:bg-[#C2EDCE] transition-all">
                                        <td className="px-4 py-2">{app.name}</td>
                                        <td className="px-4 py-2">{app.fatherName}</td>
                                        <td className="px-4 py-2">{app.phone}</td>
                                        <td className="px-4 py-2">{app.email}</td>
                                        <td className="px-4 py-2">{app.address}</td>
                                        <td className="px-4 py-2">
                                            <a
                                                href={app.idProof}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#388087] underline"
                                            >
                                                View ID Proof
                                            </a>
                                        </td>
                                        <td className="px-4 py-2">
                                            <a
                                                href={app.photo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#388087] underline"
                                            >
                                                View Photo
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center text-[#2b6777] py-4">
                                        No applications found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminApplicationsPage;
