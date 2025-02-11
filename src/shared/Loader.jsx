import React from 'react';

const Loader = () => {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center bg-base-100 min-h-[calc(100vh-306px)]">
            <div className="w-32 h-32 border-4 border-transparent text-sky-400 text-4xl animate-spin flex items-center justify-center border-t-sky-400 rounded-full">
                <div className="w-28 h-28 border-4 border-transparent text-rose-400 text-2xl animate-spin flex items-center justify-center border-t-rose-400 rounded-full" />
            </div>
        </div>
    );
};

export default Loader;