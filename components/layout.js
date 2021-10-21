import SideBar from "./sidebar"

export default function Layout({children}) {
    return (
        <>
            <SideBar>
                <main>{children}</main>    
            </SideBar>        
        </>
    )
}