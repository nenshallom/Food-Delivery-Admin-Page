import React from "react";
import styles from "../styles/MainContent.module.css";

interface MainContentProps {
    // children can take any value that jsx can render
    children:React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
    return (
        <div className={styles.mainContent}>

            <div className={styles.dashboardBody}>
                {/* admin dashboard heading */}
                {children} 
            </div>
        </div>
    )
}

export default MainContent;