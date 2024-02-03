import React from 'react';
import SidebarItem from './SidebarItem';
import items from '../data/sidebar.json'

export default function Sidebar() {
    return (
        <div className='w-64 flex-shrink-0 bg-red-950 h-screen overflow-auto no-scrollbar'>
            {items.map((item, index) => (
                <SidebarItem key={index}
                    title={item.title}
                    icon={item.icon}
                    childrens={item.childrens}
                />
            ))}
            {/* <SidebarItem /> */}
        </div>
    )
}
