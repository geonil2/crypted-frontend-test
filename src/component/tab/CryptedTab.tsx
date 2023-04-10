import React, {useEffect, useMemo, useState} from "react";
import CryptedTabHeader from "./CryptedTabHeader";

interface CryptedTabProps {
    children: any[]
}

/**
 * 공통 Tab Component
 * @param props
 * @constructor
 */
const CryptedTab = (props: CryptedTabProps) => {

    const titles = useMemo(()=>{
        const values = props.children.map((child, index)=> child.props?.title)
        return values
    }, [props.children])

    const [active, setActive] = useState<string>(titles[0].key)

    //exam handler 구현
    const handleTab = () => {

    }

    return (
        <div>
            {/* header*/}
            <CryptedTabHeader title={titles} active={active} onTabClickHandler={handleTab}></CryptedTabHeader>

            {/* Body */}
            {props.children.map((child, index) => {
                return <div key={child.key}>
                    {child}
                </div>
            })}
        </div>
    )
}


export default CryptedTab