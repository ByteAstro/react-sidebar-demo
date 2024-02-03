import React, { Component, useState } from 'react'

export default function SidebarItem(props) {
    // const IconComponent = this.omponent props.icon;
    const [dropdown, setDropdown] = useState(false);

    if (!props.childrens) {
        return (
            <div className='w-full text-lg'>
                <div className="hover:bg-slate-800 hover:underline p-4 flex items-center justify-between"
                ><a href={props.path || '#'}
                    className='flex items-center cursor-pointer text-white'>
                        {props.icon && console.log(props.icon)}
                        {props.icon &&
                            <i className={`${props.icon} w-7`} ></i>
                        }
                        {props.title}
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full text-lg'>
            <div className="hover:bg-red-900 py-4 px-4 flex items-center justify-between"
            ><span className='flex items-center cursor-pointer'
                onClick={() => setDropdown(!dropdown)}
            >
                    {props.icon &&
                        <i className={`${props.icon} w-7`} ></i>
                    }
                    {props.title}
                </span>
                <i className={`fa-solid fa-chevron-right 
                    mr-2 cursor-pointer transition-all
                    ${dropdown ? 'rotate-90' : 'rotate-0'}`}
                    onClick={() => setDropdown(!dropdown)}
                ></i>
            </div>

            <div className={`overflow-hidden px-5 transition-all ${dropdown ? 'h-auto' : 'h-0'}`} >
                {props.childrens.map((child, index) =>
                    <SidebarItem
                        key={index}
                        {...child}
                    />
                )}
            </div>
        </div>
    )
}
