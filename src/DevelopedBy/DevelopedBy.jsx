import React from 'react';

const DevelopedBy = () => {
    return (
        <footer className="bg-[#2b6777] text-white py-6">
            <div className="text-center">
                <h3 className="text-lg font-semibold">Developed by:</h3>
                <a 
                    href="https://sprightly-sundae-1e450a.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#BADFE7] hover:text-[#C2EDCE] transition-colors"
                >
                    Nabeel Choudhuri
                </a>
                <p className="mt-2 text-sm">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default DevelopedBy;
