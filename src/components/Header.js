import React from 'react'


const menuData = [
    {
        id: 1,
        name: "home",
    },
    {
        id: 2,
        name: "about",
    },
    {
        id: 3,
        name: "servic",
    },
    {
        id: 4,
        name: "galary",
    },
    {
        id: 5,
        name: "contact",
    }
]
function Header() {
    return (
        <>
           <div className='box'>
            <div className='left-header-box'>
                <logo/>
            </div>
            
            <div className='right-header-box'>
                <div className='menus'>
                {menuData.map((x,i)=>{
                    return(
                        <button className='menue'>{x.name}</button>
                    )

                })}
                
                </div>
                <button className='btn-style'>became a member</button>
            </div>
            </div>
        </>
    )
}

export default Header