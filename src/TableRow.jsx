import React from "react";

function TableRow({number, index}){
    return (
            <div className="text-violet-700 text-center">
                {number} x {index} = {number * index}
            </div>
    );
}

export default TableRow;