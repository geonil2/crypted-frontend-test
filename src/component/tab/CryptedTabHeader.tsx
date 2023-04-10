import React from "react";
import styled from "styled-components"

const UlStyle = styled.ul`
  list-style: none;
  padding: 0;
  border: 0;
`

const TabTitle = styled.li`
  display: inline-block;
`


interface CryptedTabHeaderProps {
    title: string[]
    active: string
    onTabClickHandler: ()=> void
}

/**
 * 공통 탭 header 영역
 * @param props
 * @constructor
 */
const CryptedTabHeader = (props: CryptedTabHeaderProps) =>{

    return (
        <>
            <UlStyle>
                {props.title?.map((title, idx)=>{
                    return <TabTitle key={`crypted-tab-header-key-${idx}`}>{title}</TabTitle>
                })}
            </UlStyle>
        </>
    )
}

export default CryptedTabHeader