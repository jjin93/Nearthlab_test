import React from "react";

const LabelInfo = (props) => {
    let labelInfo = props.label;
    let index = props.index;

    let labelId = labelInfo.id;
    let labelTypeId = labelInfo.typeId;
    let labelDescription = labelInfo.description;
    return (
        <div className="border border-pink-400 mt-1 ml-3 mr-3 mb-2 rounded-lg">
            <div className="ml-4 mt-4 mb-2 font-bold">라벨 #{index + 1}</div>
            <div className="flex flex-row ml-4 mt-2 mb-2 border gap-3">
                <span className="font-semibold text-xs w-10">유형</span>
                <span className="text-xs">단순 손상</span>
            </div>
            <div className="flex flex-row ml-4 mt-2 mb-2 border gap-3">
                <span className="font-semibold text-xs w-10">설명</span>
                <span className="text-xs w-80">{labelDescription}</span>
            </div>
        </div>
    )
}


export default LabelInfo;