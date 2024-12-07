import React, { useEffect, useState } from 'react';

const NoticeSection = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [visibleNotices, setVisibleNotices] = useState(6); // Initial number of visible notices
    const [selectedNotice, setSelectedNotice] = useState(null); // State for the selected notice to display in the modal

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/notices`);
            const data = await response.json();

            if (Array.isArray(data)) {
                setNotices(data);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (err) {
            setError('Failed to load notices. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        setVisibleNotices((prev) => prev + 6); // Load 6 more notices
    };

    const handleModalClose = () => {
        setSelectedNotice(null); // Close the modal
    };

    return (
        <div className="py-12 bg-[#F6F6F2]">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-[#2b6777]">Latest Notices</h2>
                    <p className="text-[#388087] text-lg mt-2">
                        Stay informed about the latest updates and announcements at APJEC.
                    </p>
                </div>
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-[#2b6777] w-12 h-12 animate-spin"></div>
                        <p className="mt-4 text-[#388087]">Loading Notices...</p>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500">{error}</div>
                ) : (
                    <>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {notices.slice(0, visibleNotices).map((notice) => (
                                <div
                                    key={notice._id}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-transform transform hover:scale-105"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm font-semibold text-[#BADFE7] bg-[#2b6777] py-1 px-3 rounded-lg">
                                            {new Date(notice.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#2b6777] mb-3">
                                        {notice.title}
                                    </h3>
                                    <p className="text-[#388087] mb-4 line-clamp-3">{notice.description}</p>
                                    <button
                                        onClick={() => setSelectedNotice(notice)}
                                        className="text-white bg-[#388087] hover:bg-[#2b6777] py-2 px-4 rounded-lg inline-block"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            ))}
                        </div>
                        {visibleNotices < notices.length && (
                            <div className="text-center mt-10">
                                <button
                                    onClick={handleLoadMore}
                                    className="bg-[#2b6777] text-white hover:bg-[#388087] py-3 px-6 rounded-lg"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Modal for displaying the full notice */}
            {selectedNotice && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
                        <button
                            onClick={handleModalClose}
                            className="absolute top-4 right-4 text-[#2b6777] hover:text-[#388087]"
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold text-[#2b6777] mb-4">{selectedNotice.title}</h3>
                        <p className="text-[#388087] mb-6">{selectedNotice.description}</p>
                        {selectedNotice.link && (
                            <a
                                href={selectedNotice.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white bg-[#388087] hover:bg-[#2b6777] py-2 px-4 rounded-lg inline-block"
                            >
                                Read More
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoticeSection;
